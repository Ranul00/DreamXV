import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {

  const[position, setPosition] = useState([
    {name:'Hooker', key:'1'},
    {name:'Prop', key:'2'},
    {name:'Lock', key:'3'},
    {name:'Blind-Side-Flanker', key:'4'},
    {name:'Open-Side-Flanker', key:'5'},
    {name:'Number 8', key:'6'},
    {name:'Scrun Half', key:'7'},
    {name:'Fly Half', key:'8'},
    {name:'Center', key:'9'},
    {name:'Full Back', key:'10'},
  ]);


  const pressHandler = () => {
    navigation.goBack();
  };

  const goToHooker = () => {
    navigation.navigate("Hooker");
  };
  const goToProp = () => {
    navigation.navigate("Prop");
  };
  const goToLock = () => {
    navigation.navigate("Lock");
  };
  const goToBlind = () => {
    navigation.navigate("Blind");
  };
  const goToOpen = () => {
    navigation.navigate("Open");
  };
  const goTonumber8 = () => {
    navigation.navigate("Number8");
  };
  const goToScruhHalf = () => {
    navigation.navigate("Scrum");
  };
  const goToFly = () => {
    navigation.navigate("FlyHalf");
  };
  const goToCenter = () => {
    navigation.navigate("Center");
  };
  const goToFullBack = () => {
    navigation.navigate("FullBack");
  };

  return (
    <View style={styles.container}>
      <View style = {styles.navigationContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
            <Text style = {styles.button}>Home</Text>
          </TouchableOpacity>

          <View style = {styles.textOneContainer}>
            <Text style = {styles.textOne}>Positions</Text>
          </View>

      </View>
      <Text style={styles.topic}>Select your position</Text>

      <ScrollView style={styles.contentBox}>
        {/* <Text style={styles.subTopic}>Scrum Players</Text> */}
        <TouchableOpacity style={styles.pButton} onPress={goToHooker}>
          <Text style={styles.contentText}>1. Hooker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToProp}>
          <Text style={styles.contentText}>2. Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToLock}>
          <Text style={styles.contentText}>3. Lock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToBlind}>
          <Text style={styles.contentText}>4.Blind-side-flanker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToOpen}>
          <Text style={styles.contentText}>5.Open-side-flanker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goTonumber8}>
          <Text style={styles.contentText}>6.Number 8</Text>
        </TouchableOpacity>
        {/* <Text style={styles.subTopic}>Back Players</Text> */}
        <TouchableOpacity style={styles.pButton} onPress={goToScruhHalf}>
          <Text style={styles.contentText}>7.Scrum half</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToFly}>
          <Text style={styles.contentText}>8.Fly half</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToCenter}>
          <Text style={styles.contentText}>8.Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pButton} onPress={goToFullBack}>
          <Text style={styles.contentText}>9.Full back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141E24",
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    flex: 1,
  },

  navigationContainer:{
    //flex:1,
    flexDirection:'row',
    backgroundColor:'#101B37',
    justifyContent:'space-between',
    borderBottomColor:"#4FE0B6",
    borderBottomWidth:1,
    height:50,
    
    
},
button: {
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    //left:6
},
buttonContainer:{
  borderWidth:2,
  borderColor:'#F64668',
  alignItems:'center',
  height:40,
  width:70,
  marginLeft:10,
  marginVertical:5,
  justifyContent:'center',
  borderRadius:10
},
textOneContainer: {
    justifyContent:'center',
    marginRight:10
    
    
},
textOne: {
    fontFamily: "FiraSans regular",
    fontSize: 18,
    color: '#fff',
    fontWeight:'bold'
    
    //left:10,   
},
  contentBox: {
    top: 120,
    width: 400,
    height: 30,
    flex: 1,
    backgroundColor: "#141E24",
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
