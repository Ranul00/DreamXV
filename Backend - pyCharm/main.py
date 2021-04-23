from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
import json

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

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
            "minutesPlayed": int(worksheet.iloc[row, 16]) + int(worksheet.iloc[row, 18]),
            "cameOn": int(worksheet.iloc[row, 17]),
            "cameOff": int(worksheet.iloc[row, 20]),
            "tries": int(worksheet.iloc[row, 21]),
            "dropGoals": int(worksheet.iloc[row, 22]),
            "conversion": int(worksheet.iloc[row, 24]),
            "penalties": int(worksheet.iloc[row, 26]),
            "points": int(worksheet.iloc[row, 27]),
            "redCards": int(worksheet.iloc[row, 30]),
            "predicted pos": worksheet.iloc[row, 31]
        }
        players.append(player)


def positionSort(position):

    ws_pp = ws[ws["Position"] == position]
    ws_pp.sort_values(by="RPI")

    return listOutput(ws_pp)


def predictedPositionSort(position):

    ws_pp = ws[ws["Prediction Position"] == position]
    ws_pp.sort_values(by="RPI")

    return listOutput(ws_pp)

def bestTeam():
    pass

def predictedBestTeam():
    pass

def searchPlayer(name):
    pass



@app.route('/bestTeam', methods =["GET"])
def getBestTeam():
    team = bestTeam()
    return json.dumps(team, indent=2)

@app.route('/predictedBestTeam', methods =["GET"])
def getPredictedBestTeam():
    team = bestTeam()
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
    app.run(debug=True)