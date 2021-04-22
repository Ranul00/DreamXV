import pandas as pd


ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])


def bxv_listOutput(worksheet):
    players = []
    rows = worksheet.shape[0]

    bxv_addToList(worksheet, rows, players)

    return players

def positionSort(worksheet, positionNo, strCellHead):

    ws_pp = worksheet[worksheet[strCellHead] == positionNo]
    ws_pp.sort_values(by="RPI")

    return bxv_listOutput(ws_pp)