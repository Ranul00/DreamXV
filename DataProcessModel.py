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

def bestTeam():
    bestPlayerList = []

    for x in range(1, 16):
        bestPlayerList.append(positionSort(ws, x, "Position No")[0])

    return bestPlayerList

def pBestTeam():
    bestPlayerList = []

    for x in range(1, 16):
        bestPlayerList.append(positionSort(ws, x, "Predicted Position No")[0])

    return bestPlayerList

def pd_addToList(worksheet, rows, players):
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
            "predicted pos": worksheet.iloc[row, 31],
        }
        players.append(player)