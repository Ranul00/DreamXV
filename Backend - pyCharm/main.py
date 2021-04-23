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
    pass

def positionSort(position):
    pass

def predictedPositionSort(position):
    pass

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