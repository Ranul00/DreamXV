from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import DataProcess
import pandas as pd
import json

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = SQLAlchemy(app)

@app.route('/bestTeam', methods =["GET"])
def getBestTeam():
    team = DataProcess.bestTeam()
    return json.dumps(team, indent=2)

@app.route('/pBestTeam', methods =["GET"])
def getPBestTeam():
    team = DataProcess.pBestTeam()
    return json.dumps(team, indent=2)

@app.route('/positionPlayers', methods =["POST", "GET"])
def getPositionPlayers():
    json_data = request.json
    # json_data = request.get_json()
    name = json_data["name"]
    positionNo = json_data["positionNo"]
    players = DataProcess.positionSort(ws, positionNo, "Position No")
    return json.dumps(players, indent=2)

@app.route('/playerDetails', methods =["POST", "GET"])
def getPlayerDetails():
    json_data = request.json
    # json_data = request.get_json()
    name = json_data["name"]
    team = json_data["team"]
    player = DataProcess.getPlayerDetails(name, team)
    return json.dumps(player, indent=2)

@app.route('/search', methods =["POST", "GET"])
def getSearchedPlayers():
    json_data = request.json
    # json_data = request.get_json()
    name = json_data["name"]
    players = DataProcess.searchPlayer(ws, name)
    return json.dumps(players, indent=2)

@app.route('/compare', methods =["POST", "GET"])
def getComparePlayers():
    json_data = request.json
    # json_data = request.get_json()
    name = json_data["name"]
    players = DataProcess.searchPlayer(ws, name)
    return json.dumps(players, indent=2)

@app.route('/comparePlayerDetails', methods =["POST", "GET"])
def getComparePlayer():
    json_data = request.json
    # json_data = request.get_json()
    name = json_data["name"]
    team = json_data["team"]
    players = DataProcess.getPlayerDetails(name, team)
    return json.dumps(players, indent=2)

if __name__ == "__main__":
    app.run(host='192.168.8.104', debug=True)