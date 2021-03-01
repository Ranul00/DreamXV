import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function BestXV({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>best xv</Text>
      <Button title="go to home" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C44",
    flex: 1,
  },
});
