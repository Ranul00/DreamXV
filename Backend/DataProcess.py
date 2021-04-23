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

# print(jsonOutput(ws))

# players according to position sort by RPI function
def positionSort(position):

    # ws_pp means players according to position worksheet
    ws_pp = ws[ws["Position"] == position]
    ws_pp.sort_values(by="RPI")

    return listOutput(ws_pp)

def predictedPositionSort(position):

    # ws_pp means players according to position worksheet
    ws_pp = ws[ws["Predicted Position"] == position]
    ws_pp.sort_values(by="RPI")

    return listOutput(ws_pp)

# print(posSort(ws,1))

# recommending best team function
def bestTeam():
    bestPlayerList = []

    for x in range(0, 15):
        positionList = ["Loose Head Prop",
                                                "Hooker",
                                                "Tight Head Prop",
                                                "Lock 4",
                                                "Lock 5",
                                                "Blindside Flanker",
                                                "Openside Flanker",
                                                "Number 8",
                                                "Scrum Half",
                                                "Fly Half",
                                                "Left Wing",
                                                "Inside Centre",
                                                "Outside Centre",
                                                "Right Wing",
                                                "Fullback"]
        bestPlayerList.append(positionSort(positionList[x])[0])

    return bestPlayerList
print(bestTeam())

def predictedBestTeam():
    bestPlayerList = []

    for x in range(0, 15):
        positionList = ["Loose Head Prop",
                                                "Hooker",
                                                "Tight Head Prop",
                                                "Lock 4",
                                                "Lock 5",
                                                "Blindside Flanker",
                                                "Openside Flanker",
                                                "Number 8",
                                                "Scrum Half",
                                                "Fly Half",
                                                "Left Wing",
                                                "Inside Centre",
                                                "Outside Centre",
                                                "Right Wing",
                                                "Fullback"]
        bestPlayerList.append(predictedPositionSort(positionList[x])[0])

    return bestPlayerList

# print(bestTeam())

# search player function
def searchPlayer(name):
    searchPlayerList = []

    if (name != " "):
        for x in listOutput(ws):
            if (name.upper() in x["name"].upper()):
                searchPlayerList.append(x)
            elif (name.upper() in x["name"].upper().replace(" ", "")):
                searchPlayerList.append(x)

    return searchPlayerList






