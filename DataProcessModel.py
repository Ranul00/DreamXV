import pandas as pd

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

# python dictionary to json object function
def jsonOutput(worksheet):
    players = []
    rows = worksheet.shape[0]
