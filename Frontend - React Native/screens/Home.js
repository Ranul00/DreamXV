import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from "react-native";
import { SearchBar } from 'react-native-elements';
import { globalStyles } from "../styles/global";

export default function Home({route, navigation }) {
  const {text} = route.params;


  const goToPositions = () => {
    navigation.navigate("Positions");
  };

  const goTobestXV = () => {
    navigation.navigate("BestXV");

  };

  const goToCompare = () => {
    navigation.navigate("Compare");
  };

  const goToSearch = () => {
    navigation.navigate("Search");
  };

  const goToPrediction = () => {
    navigation.navigate("Prediction");
  };

  const[searchPlayer, setSearchPlayer] = useState({});

  const { search } = searchPlayer;

  const updateSearch = (search) => {
          setSearchPlayer({ search });   
  };


  if (text === "") {
    return (
    <View style={styles.container}>

      <View style = {styles.textContainer}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.name}>Guest.</Text>

        <TouchableOpacity onPress = {goToSearch} style = {styles.searchbar}>
          <View >
          <SearchBar
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            placeholderTextColor={'gray'}
            placeholder={'Search'}
            inputContainerStyle={styles.inputContainerStyle}
            onPress = {goToSearch}
            onChangeText={updateSearch}
            value={search}
          /> 

          </View>

        </TouchableOpacity>
        

        </View>
        
        <View style = {styles.buttonContainer}>
          
          <TouchableOpacity
            titile="go to positions"
            onPress={goToPositions}
            style={styles.btn1}
          >
            <Text style={globalStyles.btnText}>Positions</Text>
          </TouchableOpacity>

        

          
          <TouchableOpacity 
          style={styles.btn4}
          onPress={goToPrediction}
          >
            <Text style={globalStyles.btnText}>Predictions</Text>
          </TouchableOpacity>

          

          
          <TouchableOpacity
            titile="go to bestxv"
            onPress = {goTobestXV}
            style={styles.btn2}
          >
            <Text style={globalStyles.btnText}>Best XV</Text>
          </TouchableOpacity>

          

          
          <TouchableOpacity
            titile="go to compare"
            onPress={goToCompare}
            style={styles.btn3}
          >
            <Text style={globalStyles.btnText}>Compare</Text>
          </TouchableOpacity>

          </View>
    </View>
  )
  }else{
    return (
      <View style={styles.container}>

        <View style = {styles.textContainer}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.name}>{text}.</Text>

        <TouchableOpacity onPress = {goToSearch} style = {styles.searchbar}>
          <View >
          <SearchBar
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            placeholderTextColor={'gray'}
            placeholder={'Search'}
            inputContainerStyle={styles.inputContainerStyle}
            onPress = {goToSearch}
            onChangeText={updateSearch}
            value={search}
          /> 

          </View>

        </TouchableOpacity>
        

        </View>
        
        <View style = {styles.buttonContainer}>
          
          <TouchableOpacity
            titile="go to positionss"
            onPress={goToPositions}
            style={styles.btn1}
          >
            <Text style={globalStyles.btnText}>Positions</Text>
          </TouchableOpacity>

        

          
          <TouchableOpacity 

          style={styles.btn4}
          onPress={goToPrediction}
          >
            <Text style={globalStyles.btnText}>Predictions</Text>
          </TouchableOpacity>

          

          
          <TouchableOpacity
            titile="go to bestxv"
            onPress = {goTobestXV}
            style={styles.btn2}
          >
            <Text style={globalStyles.btnText}>Best XV</Text>
          </TouchableOpacity>

          

          
          <TouchableOpacity
            titile="go to compare"
            onPress={goToCompare}
            style={styles.btn3}
          >
            <Text style={globalStyles.btnText}>Compare</Text>
          </TouchableOpacity>

          

          </View>

      </View>
    );
  }

  

}

// async function getPlayerNames(){
//   try{
//        let response = await fetch('http://192.168.8.104:5000/bestTeam');
//        let responseJSON = await response.json();
//        console.log(responseJSON);
//   }
//   catch (error){
//        console.log(error);
//   }
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141E24",
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    flex:1,
    
  },
  textContainer:{
    flex:1,
    justifyContent:'flex-end',
    backgroundColor: "#141E24", 
    // borderBottomLeftRadius:30,
    // borderBottomRightRadius:30, 
  },

  buttonContainer:{
    flex:1,
    backgroundColor: "#141E24",
  },

  text: {
    fontSize: 50,
    color: "#00E2F2",
    left:10,
    fontFamily: "FiraSans regular",
    paddingLeft: 5,
  },
  name: {
    fontSize: 30,
    left:10,
    fontFamily: "FiraSans regular",
    paddingLeft: 5,
    color: "white",
  },

  btn1: {
    justifyContent: "center",
    height: 99,
    width: 154,
    borderWidth:3,
    borderColor:"#62A2A2",
    alignItems: "center",
    top:65,
    left: 25,
    
  },

  btn4: {
    justifyContent: "center",
    height: 99,
    width: 154,
    borderWidth:3,
    borderColor:"#62A2A2",
    alignItems: "center",
    top:90,
    left: 25,
  },

  btn2: {
    justifyContent: "center",
    height: 99,
    width: 154,
    borderWidth:3,
    borderColor:"#62A2A2",
    alignItems: "center",
    bottom:132,
    left: 220,
  },
  btn3: {
    justifyContent: "center",
    height: 99,
    width: 154,
    borderWidth:3,
    borderColor:"#62A2A2",
    alignItems: "center",
    bottom:107,
    left: 220,
    
  },
searchbar:{
    marginTop:20,
    justifyContent:'flex-end',
    height:70,
    //backgroundColor:'white',
    alignItems: 'center',
    justifyContent:'center'
    
},
inputStyle:{
    backgroundColor: '#d3dff5',
    height:40,
    borderRadius:15
},
containerStyle:{
    backgroundColor: '#d3dff5',
    borderRadius: 30,
    width:380, 
    height:50,
    borderColor:'#82c5f5'
},
inputContainerStyle:{
    backgroundColor: '#d3dff5',
    height:30
}
});
