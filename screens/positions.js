import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  var positions = {
    hooker: "Hooker",
    tightHeadProp: "Tight Head Prop",
    looseHeadProp: "Loose Head Prop",
    lock4: "Lock 4",
    lock5: "Lock 5",
    blindesideFlanker: "Blindside Flanker",
    opensideFlanker: "Openside Flanker",
    number8: "Number 8",
    scrumHalf: "Scrum Half",
    flyHalf: "Fly Half",
    leftWing: "Left Wing",
    insideCenter: "Inside Centre",
    outsideCenter: "Outside Centre",
    rightWing: "Right Wing",
    fullback: "Fullback",
  };

  const goToHooker = () => {
    navigation.navigate("Hooker", positions);
  };
  const goToProp = () => {
    navigation.navigate("Prop", positions);
  };
  const goToLock = () => {
    navigation.navigate("Lock", positions);
  };
  const goToBlind = () => {
    navigation.navigate("Blind", positions);
  };
  const goToOpen = () => {
    navigation.navigate("Open", positions);
  };
  const goTonumber8 = () => {
    navigation.navigate("Number8", positions);
  };
  const goToScruhHalf = () => {
    navigation.navigate("Scrum", positions);
  };
  const goToFly = () => {
    navigation.navigate("FlyHalf", positions);
  };
  const goToCenter = () => {
    navigation.navigate("Center", positions);
  };
  const goToFullBack = () => {
    navigation.navigate("FullBack", positions);
  };
  const goToLooseHeadProp = () => {
    navigation.navigate("LooseHeadProp", positions);
  };
  const goToLock5 = () => {
    navigation.navigate("Lock5", positions);
  };
  const goToLeftWing = () => {
    navigation.navigate("LeftWing", positions);
  };
  const goToRightWing = () => {
    navigation.navigate("RightWing", positions);
  };
  const goToOutsideCenter = () => {
    navigation.navigate("OutsideCenter", positions);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
          <Text style={styles.button}>Home</Text>
        </TouchableOpacity>

        <View style={styles.textOneContainer}>
          <Text style={styles.textOne}>Positions</Text>
        </View>
      </View>

      <ScrollView style={styles.contentBox}>
        <TouchableOpacity style={styles.pButton} onPress={goToHooker}>
          <Text style={styles.contentText}>Hooker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToProp}>
          <Text style={styles.contentText}>Tight-Head-Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToLock}>
          <Text style={styles.contentText}>Lock 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToBlind}>
          <Text style={styles.contentText}>Blind-side-flanker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToOpen}>
          <Text style={styles.contentText}>Open-side-flanker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goTonumber8}>
          <Text style={styles.contentText}>Number 8</Text>
        </TouchableOpacity>
        {/* <Text style={styles.subTopic}>Back Players</Text> */}
        <TouchableOpacity style={styles.pButton} onPress={goToScruhHalf}>
          <Text style={styles.contentText}>Scrum half</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToFly}>
          <Text style={styles.contentText}>Fly half</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToCenter}>
          <Text style={styles.contentText}>Inside-Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToFullBack}>
          <Text style={styles.contentText}>Full back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToLooseHeadProp}>
          <Text style={styles.contentText}>Loose Head Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToLock5}>
          <Text style={styles.contentText}>Lock 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToLeftWing}>
          <Text style={styles.contentText}>Left Wing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToRightWing}>
          <Text style={styles.contentText}>Right Wing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToOutsideCenter}>
          <Text style={styles.contentText}>Outside Center</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141E24",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },

  navigationContainer: {
    //flex:1,
    flexDirection: "row",
    backgroundColor: "#101B37",
    justifyContent: "space-between",
    borderBottomColor: "#4FE0B6",
    borderBottomWidth: 1,
    height: 50,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    //left:6
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: "#F64668",
    alignItems: "center",
    height: 40,
    width: 70,
    marginLeft: 10,
    marginVertical: 5,
    justifyContent: "center",
    borderRadius: 10,
  },
  textOneContainer: {
    justifyContent: "center",
    marginRight: 10,
  },
  textOne: {
    fontFamily: "FiraSans regular",
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",

    //left:10,
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#141E24",
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B1114",
    width: 350,
    height: 70,
    borderBottomColor: "#4FE0B6",
    borderWidth: 1,
    left: 20,
    marginTop: 10,
  },
});
