import pandas as pd


ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])


def bxv_listOutput(worksheet):
    players = []
    rows = worksheet.shape[0]

    bxv_addToList(worksheet, rows, players)

    return players