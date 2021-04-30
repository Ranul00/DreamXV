import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import BestXV from "../screens/bestXV";
import Compare from "../screens/compare";
import Positions from "../screens/positions";
import PlayerStats from "../screens/PlayerStats";
import Start from "../screens/start";
import Signup from "../screens/Signup";
import Hooker from "../screens/hooker";
import Prop from "../screens/Prop";
import Lock from "../screens/lock";
import Blind from "../screens/Blind-side";
import Open from "../screens/open-side";
import Number8 from "../screens/Number8";
import Scrum from "../screens/scrumHlaf";
import FlyHalf from "../screens/flyHalf";
import Center from "../screens/center";
import FullBack from "../screens/fullBack";
import Search from "../screens/Search";
import Prediction from "../screens/Prediction";
import PredictedPosition from "../screens/PredictedPosition";
import CompareTwo from "../screens/CompareTwo";
import PlayerTwoSearch from "../screens/PlayerTwoSearch";
import Lock5 from "../screens/Lock5";
import LeftWing from "../screens/LeftWing";
import RightWing from "../screens/RightWing";
import OutsideCenter from "../screens/OutsideCenter";
import LooseHeadProp from "../screens/LooseHeadProp";
import PlayerDetails from "../screens/PlayerDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    {/* //other options: "float", "screen" */}
    <Screen name="Start" component={Start} />
    <Screen name="Home" component={Home} />
    <Screen name="Positions" component={Positions} />
    <Screen name="Compare" component={Compare} />
    <Screen name="BestXV" component={BestXV} />
    <Screen name="PlayerStats" component={PlayerStats} />
    <Screen name="Signup" component={Signup} />
    <Screen name="Hooker" component={Hooker} />
    <Screen name="Prop" component={Prop} />
    <Screen name="Lock" component={Lock} />
    <Screen name="Blind" component={Blind} />
    <Screen name="Open" component={Open} />
    <Screen name="Number8" component={Number8} />
    <Screen name="Scrum" component={Scrum} />
    <Screen name="FlyHalf" component={FlyHalf} />
    <Screen name="Center" component={Center} />
    <Screen name="FullBack" component={FullBack} />
    <Screen name="Search" component={Search}/>
    <Screen name="LooseHeadProp" component={LooseHeadProp} />
    <Screen name="Lock5" component={Lock5} />
    <Screen name="LeftWing" component={LeftWing} />
    <Screen name="RightWing" component={RightWing} />
    <Screen name="OutsideCenter" component={OutsideCenter} />
    <Screen name="Prediction" component={Prediction}/>
    <Screen name="PredictedPosition" component={PredictedPosition}/>
    <Screen name="CompareTwo" component={CompareTwo}/>
    <Screen name="PlayerDetails" component={PlayerDetails}/>
    
    
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
