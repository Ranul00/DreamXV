import React , { useState } from "react";
import { StyleSheet, View, Text, Button,FlatList,TouchableOpacity } from "react-native";


export default function Compare({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const [player, setplayer] = useState([
    {text: 'Select Player', key: '1'},
    {text: 'Select Player', key: '2'},
  ]
  )

  return (
    <View style={styles.container}>

      <View style = {styles.buttonContainer}>
        <Button title="go to home" onPress={pressHandler} />
      </View>

      <View style = {styles.textContainer}>
        <Text style = {styles.text}>Compare</Text>
      </View>

      
      <FlatList
          data={player}
          numColumns={2}
          renderItem = {({item}) =>{
            return(
               <View style = {styles.listContainer}>
                 <TouchableOpacity style = {styles.itemContainer}>
                   <Text style = {styles.item}>{item.text}</Text>
                 </TouchableOpacity>
                 
               </View>
            )
          }
          
          }
      />

    <View style = {styles.playerDetailsContainer}>
      <View style = {styles.playerDetails}>
        <Text>No Players Selected</Text>
      </View>
      <View style = {styles.playerDetails}>
      <Text>No Players Selected</Text>
      </View>
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C44",
    flex: 1,
  },
  buttonContainer: {
    paddingTop:30
  },
  textContainer: {
    paddingTop:40
  },
  text: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    top: 40,
    left: 6,
    color: "white",
    
  },
  item: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    left: 6,
    color: "white",
    padding:10,
    marginHorizontal: 10
    
  },
  listContainer: {
    flex:1,
    alignItems:'center',
    paddingTop: 120
  },
  itemContainer: {
    backgroundColor:'#110066',
    borderRadius:20,
    alignItems:'center'
  
  },
  playerDetailsContainer: {
    flex:7,
    flexDirection:'row',
    paddingTop:2,
    justifyContent:'center',
    
  },
  playerDetails: {
    backgroundColor:'#72A0C1',
    borderRadius:20,
    height:250,
    width:172,
    marginHorizontal: 20,
    justifyContent:'center',
    alignItems:'center'
    
  }
 
});
