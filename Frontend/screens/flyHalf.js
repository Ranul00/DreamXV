import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={globalStyles.bckButton} onPress={pressHandler}>
        <Text style={globalStyles.bckBtnText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.topic}>Fly Half</Text>

      <ScrollView style={styles.contentBox}>
        {/* <Text style={styles.subTopic}>Scrum Players</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C44",
    flex: 1,
  },
  contentBox: {
    top: 120,
    width: 400,
    height: 30,
    flex: 1,
    backgroundColor: "#2C2C44",
    paddingTop: 20,
  },
  topic: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    top: 110,
    left: 8,
    color: "white",
    fontWeight: "bold",
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
});
