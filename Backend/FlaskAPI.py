from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import DataProcessModel
import pandas as pd
import json

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = SQLAlchemy(app)

@app.route('/bestTeam', methods=["GET"])
def getBestTeam():
    team = DataProcessModel.bestTeam()
    return json.dumps(team, indent=2)

if __name__ == "__main__":
    app.run(host='192.168.8.104', debug=True)