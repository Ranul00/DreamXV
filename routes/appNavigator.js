import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import BestXV from "../screens/bestXV";
import Compare from "../screens/compare";
import Positions from "../screens/positions";
import PlayerStats from "../screens/PlayerStats";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    {/* //other options: "float", "screen" */}
    <Screen name="Home" component={Home} />
    <Screen name="Positions" component={Positions} />
    <Screen name="Compare" component={Compare} />
    <Screen name="BestXV" component={BestXV} />
    <Screen name="PlayerStats" component={PlayerStats}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
