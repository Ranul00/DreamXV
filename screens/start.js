import React from "react";
import { Button } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Start({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/pics/bgpic.jpg")}
        style={styles.image}
      >
        <Text style={styles.text2}>XV</Text>
        <Text style={styles.text1}>Dream</Text>

        <TouchableOpacity
          titile="go to home"
          style={styles.btn1}
          onPress={goToHome}
        >
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  btn1: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 270,
    top: 60,
    left: 60,
  },

  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  text2: {
    //paddingTop: 0,
    color: "white",
    fontSize: 230,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 0.5,
    top: 350,
    left: 46,
  },
  text1: {
    //paddingTop: 0,
    color: "white",
    fontSize: 90,
    fontWeight: "bold",
    textAlign: "center",
    top: 20,
    left: -59,
  },
});
