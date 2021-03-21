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

        <TouchableOpacity onPress = {goToSearch}>
          <View style = {styles.searchbar}>
          <SearchBar
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            placeholderTextColor={'gray'}
            placeholder={'Search'}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={updateSearch}
            value={search}
          /> 

          </View>

        </TouchableOpacity>
        

        </View>

      <View style = {styles.buttonContainer}>
        <View>
        <TouchableOpacity
          titile="go to positionss"
          style={styles.btn1}
          onPress={goToPositions}
        >
          <Text style={globalStyles.btnText}>Positions</Text>
        </TouchableOpacity>

        </View>

        <View>
        <TouchableOpacity
          titile="go to bestxv"
          style={styles.btn2}
          onPress={goTobestXV}
        >
          <Text style={globalStyles.btnText}>Best XV</Text>
        </TouchableOpacity>

        </View>

        <View>
        <TouchableOpacity
          titile="go to compare"
          style={styles.btn3}
          onPress={goToCompare}
        >
          <Text style={globalStyles.btnText}>Compare</Text>
        </TouchableOpacity>

        </View>

        </View>
    </View>
  )
  }else{
    return (
      <View style={styles.container}>

        <View style = {styles.textContainer}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.name}>{text}.</Text>

        <TouchableOpacity onPress = {goToSearch}>
          <View style = {styles.searchbar}>
          <SearchBar
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            placeholderTextColor={'gray'}
            placeholder={'Search'}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={updateSearch}
            value={search}
          /> 

          </View>

        </TouchableOpacity>
        

        </View>
        
        <View style = {styles.buttonContainer}>
        <View>
        <TouchableOpacity
          titile="go to positionss"
          style={styles.btn1}
          onPress={goToPositions}
        >
          <Text style={globalStyles.btnText}>Positions</Text>
        </TouchableOpacity>

        </View>

        <View>
        <TouchableOpacity
          titile="go to bestxv"
          style={styles.btn2}
          onPress={goTobestXV}
        >
          <Text style={globalStyles.btnText}>Best XV</Text>
        </TouchableOpacity>

        </View>

        <View>
        <TouchableOpacity
          titile="go to compare"
          style={styles.btn3}
          onPress={goToCompare}
        >
          <Text style={globalStyles.btnText}>Compare</Text>
        </TouchableOpacity>

        </View>

        </View>

      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C44",
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    flex:1,
  },
  textContainer:{
    flex:1,
    justifyContent:'flex-end'
  },
  buttonContainer:{
    flex:1,
    backgroundColor: "#2C2C44",
  
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 224.31,
    width: 154,
    backgroundColor: "#1A1E49",
    alignItems: "center",
    top:90,
    left: 30,
    elevation: 11,
  },
  btn2: {
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 99,
    width: 154,
    backgroundColor: "#1A1E49",
    alignItems: "center",
    //top: 0,
    bottom:132,
    left: 220,
    elevation: 11,
  },
  btn3: {
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 99,
    width: 154,
    backgroundColor: "#1A1E49",
    alignItems: "center",
    //top: 0,
    bottom:112,
    left: 220,
    elevation: 11,
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
    borderColor:'#d3dff5'
},
inputContainerStyle:{
    backgroundColor: '#d3dff5',
    height:30
}
});
