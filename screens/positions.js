import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressHandler} style={styles.bckBtnContainer}>
        <Text style={styles.bckBtnText}>Home</Text>
      </TouchableOpacity>
      <View style={styles.topicContainer}>
        <Text style={styles.topicText}>Positions</Text>
      </View>
      <Text style={styles.topic}>Select your positions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C44",
    flex: 1,
  },
  topic: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    top: 150,
    left: 8,
    color: "white",
  },
  bckBtnText: {
    fontSize: 18,
    color: "white",
    //fontWeight: "bold",
    left: 8,
    top: 42,
  },
  topicContainer: {
    backgroundColor: "#1A1E49",
    width: 100,
    height: 38,
    top: 90,
    left: 8,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 15,
  },
  topicText: {
    alignSelf: "center",
    color: "white",
  },
});
