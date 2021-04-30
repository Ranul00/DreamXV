import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Platform } from 'react-native';
import { StyleSheet, Text, View,FlatList, TouchableOpacity,StatusBar } from 'react-native'

export default function Prediction({navigation}) {

     useEffect(() => {
          const url = 'http://192.168.8.104:5000/predictedBestTeam';

          axios.get(url).then(response => {
               /* do thing as you wish*/
               setPlayer(response.data);
             }).catch(() => {
               /*error handlings as you wish*/
               console.log('API crashed');
             });

     }, [])


     const pressHandler = () => {
          navigation.goBack();
     };

     const[player, setPlayer] = useState([]);


     // const[player, setPlayer] = useState([
     //      {text: 'Player One' , key : '1'},
     //      {text: 'Player Two' , key : '2'},
     //      {text: 'Player Three' , key : '3'},
     //      {text: 'Player Four' , key : '4'},
     //      {text: 'Player Five' , key : '5'},
     //      {text: 'Player Six' , key : '6'},
     //      {text: 'Player Seven' , key : '7'},
     //      {text: 'Player Eight' , key : '8'},
     //      {text: 'Player Nine' , key : '9'},
     //      {text: 'Player Ten' , key : '10'},
     //      {text: 'Player Eleven' , key : '11'},
     //      {text: 'Player Twelve' , key : '12'},
     //      {text: 'Player Thirtenn' , key : '13'},
     //      {text: 'Player Fourteen' , key : '14'},
     //      {text: 'Player Fifteen' , key : '15'},
     // ])


     return (
         <View style = {styles.container}>
               <View style = {styles.navigationContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
                         <Text style = {styles.button}>Back</Text>
                    </TouchableOpacity>

                    <View style = {styles.textOneContainer}>
                         <Text style = {styles.textOne}>Predictions</Text>
                    </View>

               </View>
               
               <View style = {styles.teamContainer}>
                    <View style = {styles.textTwoContainer}>
                         <Text style = {styles.textTwo}>Predicted Fifteen</Text>
                    </View>

                    
                         <FlatList
                              data = {player}
                              numColumns = {2}
                              keyExtractor = {(item) => `${item.name} - ${item.team}`}
                              renderItem = {({item}) => {
                                   return(
                                        <View style = {styles.listContainer}>
                                             <TouchableOpacity style = {styles.itemContainer} onPress = {() => navigation.navigate("PredictedPosition", item)}>
                                                  <Text style = {styles.item}>{item.name}</Text>
                                             </TouchableOpacity>
                                        </View>

                                   )
                              }}
                         />
                    </View>
               
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#141E24",
          paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
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
     teamContainer:{
          flex:1
     },
    
     textTwo: {
          fontFamily: "FiraSans regular",
          fontSize: 23,
          color: '#fff',
          left: 6,
          paddingBottom:10,
          fontWeight:'bold'
     },
     textTwoContainer:{
          marginTop:20,
          alignItems:'center'
     },
     listContainer: {
          flex:1,
          alignItems:'center',
          marginTop:30,
          //paddingTop: 0,
          backgroundColor: "#141E24",
     }, 
     itemContainer: {
          borderWidth:1,
          borderColor: "#65BCBF",
          alignItems:'center',
          justifyContent:'center',
          width:140,
          height:60
     },
     item: {
          fontFamily: "FiraSans regular",
          fontSize: 15,
          color: "white",
          padding:11,
          marginHorizontal: 10
          
     },

})
