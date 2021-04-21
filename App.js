import React from "react";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { AppNavigator } from "./routes/appNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    "FiraSans regular": require("./assets/fonts/FiraSans-Regular.ttf"),
    "FiraSans-bold": require("./assets/fonts/FiraSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigator />;
  }
}
