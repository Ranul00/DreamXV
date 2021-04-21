import pandas as pd

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

# player list return function
def listOutput(worksheet):
    players = []
    rows = worksheet.shape[0]

    addToList(worksheet, rows, players)

    return players

# players add to list function
def addToList(worksheet, rows, players):
    for row in range(0, rows):
        player = {
            "name": worksheet.iloc[row, 0],
            "score": int(worksheet.iloc[row, 1]),
            "link": worksheet.iloc[row, 2],
            "img": worksheet.iloc[row, 3],
            "position": worksheet.iloc[row, 4],
            "positionNo": int(worksheet.iloc[row, 5]),
            "height": int(worksheet.iloc[row, 6]),
            "weight": int(worksheet.iloc[row, 7]),
            "day": int(worksheet.iloc[row, 8]),
            "month": int(worksheet.iloc[row, 9]),
            "year": int(worksheet.iloc[row, 10]),
            "team": worksheet.iloc[row, 11]
        }
        players.append(player)

# print(listOutput(ws))

# players according to position sort by RPI function
def positionSort(worksheet, positionNo):

    # ws_pp means players according to position worksheet
    ws_pp = worksheet[worksheet["Position No"] == positionNo]
    ws_pp.sort_values(by="RPI")

    return listOutput(ws_pp)

# print(positionSort(ws,1))

# recommending best team function
def bestTeam():
    bestPlayerList = []

    for x in range(1, 16):
        bestPlayerList.append(positionSort(ws, x)[0])

    return bestPlayerList

# print(bestTeam())

# search player function
def searchPlayer(worksheet, name):
    searchPlayerList = []

    if (name != " "):
        for x in listOutput(worksheet):
            if (name.upper() in x["name"].upper()):
                searchPlayerList.append(x)
            elif (name.upper() in x["name"].upper().replace(" ", "")):
                searchPlayerList.append(x)

    return searchPlayerList

# print(searchPlayer(ws, "jam"))