import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Select your positions</Text>
      <Button title="go to home" onPress={pressHandler} />
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
    left: 6,
    color: "white",
  },
});
