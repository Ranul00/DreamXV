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
        <Text style={globalStyles.bckBtnText}>Home</Text>
      </TouchableOpacity>
      <View style={styles.topicContainer}>
        <Text style={styles.topicText}>Positions</Text>
      </View>
      <Text style={styles.topic}>Select your position</Text>

      <ScrollView style={styles.contentBox}>
        <Text style={styles.subTopic}>Scrum Players</Text>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>1. Hooker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>2. Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>3. Lock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>4.Blind-side-flanker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>5.Open-side-flanker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>6.Number 8</Text>
        </TouchableOpacity>
        <Text style={styles.subTopic}>Back Players</Text>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>7.Scrum half</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>8.Fly half</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>8.Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={pressHandler}>
          <Text style={styles.contentText}>9.Full back</Text>
        </TouchableOpacity>
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
  contentText: {
    fontSize: 17,
    fontSize: 17,
    //paddingTop: 20,
    color: "white",
  },
  subTopic: {
    color: "white",
    left: 10,
    paddingTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  pButton: {
    width: 150,
    //backgroundColor: "white",
    left: 20,

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
  topicText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
});
