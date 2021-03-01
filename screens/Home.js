import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const goToPositions = () => {
    navigation.navigate("Positions");
  };

  const goTobestXV = () => {
    navigation.navigate("BestXV");
  };

  const goToCompare = () => {
    navigation.navigate("Compare");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello,</Text>
      <Text style={styles.name}>Jhon Wick.</Text>

      <TouchableOpacity
        titile="go to positionss"
        style={styles.btn1}
        onPress={goToPositions}
      >
        <Text style={globalStyles.btnText}>Positions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        titile="go to bestxv"
        style={styles.btn2}
        onPress={goTobestXV}
      >
        <Text style={globalStyles.btnText}>Best XV</Text>
      </TouchableOpacity>

      <TouchableOpacity
        titile="go to compare"
        style={styles.btn3}
        onPress={goToCompare}
      >
        <Text style={globalStyles.btnText}>Compare</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C44",
    flex: 1,
  },
  text: {
    fontSize: 50,
    color: "#00E2F2",
    top: 180,
    fontFamily: "FiraSans regular",
    paddingLeft: 5,
  },
  name: {
    fontSize: 30,
    top: 178,
    fontFamily: "FiraSans regular",
    paddingLeft: 5,
    color: "white",
  },

  btn1: {
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 224.31,
    width: 154,
    backgroundColor: "#1A1E49",
    alignItems: "center",
    top: 390,
    left: 10,
    elevation: 11,
  },
  btn2: {
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 99,
    width: 154,
    backgroundColor: "#1A1E49",
    alignItems: "center",
    top: 167,
    left: 194,
    elevation: 11,
  },
  btn3: {
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 99,
    width: 154,
    backgroundColor: "#1A1E49",
    alignItems: "center",
    top: 177,
    left: 194,
    elevation: 11,
  },
});
