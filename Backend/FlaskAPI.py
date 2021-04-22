from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import DataProcess
import pandas as pd
import json

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = SQLAlchemy(app)

