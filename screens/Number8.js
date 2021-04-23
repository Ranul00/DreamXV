import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
          <Text style={styles.button}>Back</Text>
        </TouchableOpacity>

        <View style={styles.textOneContainer}>
          <Text style={styles.textOne}>Number8</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Number 8</Text>
        </View>

        {/* <FlatList
          data={pos}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <View style={styles.listContainer}>
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => navigation.navigate("PlayerStats", item)}
                >
                  <Text style={styles.item}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141E24",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
  main: {
    flex: 1,
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
  textContainer: {
    paddingTop: 0,
    alignItems: "center",
  },
  text: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    top: 20,
    left: 6,
    color: "white",
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
  listContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    //paddingTop: 0,
    backgroundColor: "#141E24",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#65BCBF",
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 60,
  },
  item: {
    fontFamily: "FiraSans regular",
    fontSize: 15,
    color: "white",
    padding: 11,
    marginHorizontal: 10,
  },
});
