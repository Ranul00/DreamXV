from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
import json

ws = pd.read_excel("Kaggle.xlsx", "Player Details", index_col=None, na_values=["NA"])

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = SQLAlchemy(app)

def listOutput(worksheet):
    players = []
    rows = worksheet.shape[0]

    addToList(worksheet, rows, players)

    return players

def addToList(worksheet, rows, players):
    for row in range(0, rows):
        player = {
            "name": worksheet.iloc[row, 0],
            "score": int(worksheet.iloc[row, 1]),
            "link": worksheet.iloc[row, 2],
            "img": worksheet.iloc[row, 3],
            "position": worksheet.iloc[row, 4],
            "positionNo": int(worksheet.iloc[row, 5]),
            "height": float(worksheet.iloc[row, 6]),
            "weight": int(worksheet.iloc[row, 7]),
            "day": int(worksheet.iloc[row, 8]),
            "month": int(worksheet.iloc[row, 9]),
            "year": int(worksheet.iloc[row, 10]),
            "team": worksheet.iloc[row, 11],
            "matchesPlayed": int(worksheet.iloc[row, 12]),
            "minutesPlayed": int(worksheet.iloc[row, 15]) + int(worksheet.iloc[row, 17]),
            "cameOn": int(worksheet.iloc[row, 18]),
            "cameOff": int(worksheet.iloc[row, 21]),
            "tries": int(worksheet.iloc[row, 22]),
            "dropGoals": int(worksheet.iloc[row, 23]),
            "conversion": int(worksheet.iloc[row, 25]),
            "penalties": int(worksheet.iloc[row, 27]),
            "points": int(worksheet.iloc[row, 28]),
            "redCards": int(worksheet.iloc[row, 31]),
            "predictedPos": worksheet.iloc[row, 32]
        }
        players.append(player)


def positionSort(position):

    ws_pp = ws[ws["Position"] == position]
    ws_pp.sort_values(by="RPI")

    return listOutput(ws_pp)


def predictedPositionSort(position):

    ws_pp = ws[ws["Predicted Position"] == position]
    ws_pp.sort_values(by="RPI")

    return listOutput(ws_pp)

positionList = ["Loose Head Prop",
                "Hooker",
                "Tight Head Prop",
                "Lock 4",
                "Lock 5",
                "Blindside Flanker",
                "Openside Flanker",
                "Number 8",
                "Scrum Half",
                "Fly Half",
                "Left Wing",
                "Inside Centre",
                "Outside Centre",
                "Right Wing",
                "Fullback"]

predictedPositionList = ["Prop",
                         "Hooker",
                         "Prop",
                         "Lock",
                         "Lock",
                         "Blindside Flanker",
                         "Openside Flanker",
                         "No. 8",
                         "Scrum Half",
                         "Outside Half",
                         "Left Wing",
                         "Center",
                         "Center",
                         "Right Wing",
                         "Full Back"]


def bestTeam():
    bestPlayerList = []

    for x in range(0, 15):
        bestPlayerList.append(positionSort(positionList[x])[0])

    return bestPlayerList

def predictedBestTeam():
    bestPlayerList = []


    for x in range(0, 15):
        if (x == 2 or x == 4 or x == 12):
            bestPlayerList.append(predictedPositionSort(predictedPositionList[x])[1])
        else:
            bestPlayerList.append(predictedPositionSort(predictedPositionList[x])[0])

    return bestPlayerList

def searchPlayer(name):
    searchPlayerList = []

    if (name != " "):
        for x in listOutput(ws):
            if (name.upper() in x["name"].upper()):
                searchPlayerList.append(x)
            elif (name.upper() in x["name"].upper().replace(" ", "")):
                searchPlayerList.append(x)

    return searchPlayerList



@app.route('/bestTeam', methods =["GET"])
def getBestTeam():
    team = bestTeam()
    return json.dumps(team, indent=2)

@app.route('/predictedBestTeam', methods =["GET"])
def getPredictedBestTeam():
    team = predictedBestTeam()
    return json.dumps(team, indent=2)

@app.route('/positionPlayers', methods =["GET"])
def getPositionPlayers():
    position = request.args.get('position')
    players = positionSort(position)
    return json.dumps(players, indent=2)

@app.route('/search', methods =["GET"])
def getSearchedPlayers():
    name = request.args.get('name')
    players = searchPlayer(name)
    return json.dumps(players, indent=2)

if __name__ == "__main__":
    app.run(host="192.168.8.104",debug=True)