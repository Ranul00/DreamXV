import pandas as pd

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])
