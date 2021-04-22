import pandas as pd


ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

# player list return function
def bxv_listOutput(worksheet):
    players = []
    rows = worksheet.shape[0]

    bxv_addToList(worksheet, rows, players)

    return players

# players add to list function
def bxv_addToList(worksheet, rows, players):
    for row in range(0, rows):
        player = {
            "name": worksheet.iloc[row, 0],
            "score": int(worksheet.iloc[row, 1]),
            "img": worksheet.iloc[row, 3],
            "position": worksheet.iloc[row, 4],
            "positionNo": int(worksheet.iloc[row, 5]),
            "team": worksheet.iloc[row, 11]
        }
        players.append(player)

# print(jsonOutput(ws))

# players according to position sort by RPI function
def positionSort(worksheet, positionNo, strCellHead):

    # ws_pp means players according to position worksheet
    ws_pp = worksheet[worksheet[strCellHead] == positionNo]
    ws_pp.sort_values(by="RPI")

    return bxv_listOutput(ws_pp)

# print(posSort(ws,1))

# recommending best team function
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

# print(bestTeam())

# search player function
def searchPlayer(worksheet, name):
    searchPlayerList = []

    if (name != " "):
        for x in bxv_listOutput(worksheet):
            if (name.upper() in x["name"].upper()):
                searchPlayerList.append(x)
            elif (name.upper() in x["name"].upper().replace(" ", "")):
                searchPlayerList.append(x)

    return searchPlayerList

# print(searchPlayer(ws, "jam"))

def pd_listOutput(worksheet):
    players = []
    rows = worksheet.shape[0]

    pd_addToList(worksheet, rows, players)

    return players

# players add to list function
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

def getPlayerDetails(name, team):
    playerDetails = []

    ws_pp1 = ws[ws["Name"] == name]
    ws_pp2 = ws_pp1[ws_pp1["Team"] == team]

    return pd_listOutput(ws_pp2)

def com_listOutput(worksheet):
    players = []
    rows = worksheet.shape[0]

    com_addToList(worksheet, rows, players)

    return players

# players add to list function
def com_addToList(worksheet, rows, players):
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
            "redCards": int(worksheet.iloc[row, 30])
        }
        players.append(player)

def getComPlayerDetails(name, team):
    playerDetails = []

    ws_pp1 = ws[ws["Name"] == name]
    ws_pp2 = ws_pp1[ws_pp1["Team"] == team]

    return pd_listOutput(ws_pp2)


