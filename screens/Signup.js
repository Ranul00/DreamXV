import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Signup({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.form}>
      <Text style={styles.header}>Get Started</Text>

      <TextInput style={styles.textinput} placeholder="Your name" />
      <TextInput style={styles.textinput} placeholder="Email" />
      <TouchableOpacity
        titile="go to home"
        style={styles.btn1}
        onPress={goToHome}
      >
        <Text style={styles.btnText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#2C2C44",
    flex: 1,
  },
  btn1: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 270,
    top: 290,
    left: 60,
  },

  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  header: {
    width: 300,
    top: 220,
    left: 40,
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput: {
    color: "white",
    top: 280,
    left: 40,
    width: 300,
    height: 40,
    marginBottom: 30,
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
});
