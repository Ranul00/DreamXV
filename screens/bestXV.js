import React , { useState }from 'react'
import { StatusBar } from 'react-native';
import { Platform } from 'react-native';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Button } from 'react-native'


export default function BestXV({navigation}) {
     const pressHandler = () => {
          navigation.goBack();
     };
     
     
     const[player, setPlayer] = useState([
          {text: 'Player One' , key : '1'},
          {text: 'Player Two' , key : '2'},
          {text: 'Player Three' , key : '3'},
          {text: 'Player Four' , key : '4'},
          {text: 'Player Five' , key : '5'},
          {text: 'Player Six' , key : '6'},
          {text: 'Player Seven' , key : '7'},
          {text: 'Player Eight' , key : '8'},
          {text: 'Player Nine' , key : '9'},
          {text: 'Player Ten' , key : '10'},
          {text: 'Player Eleven' , key : '11'},
          {text: 'Player Twelve' , key : '12'},
          {text: 'Player Thirtenn' , key : '13'},
          {text: 'Player Fourteen' , key : '14'},
          {text: 'Player Fifteen' , key : '15'},
     ])
     return (
          <View style = {styles.container}>
               <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
                     <Text style = {styles.button}>Home</Text>
               </TouchableOpacity>
               <View style = {styles.textOneContainer}>
                    <Text style = {styles.textOne}>Best XV</Text>
                </View>
                <View style = {styles.textTwoContainer}>
                    <Text style = {styles.textTwo}>DreamXV  First  Fifteen </Text>
               </View>

               
                    <FlatList
                         data = {player}
                         numColumns = {2}
                         renderItem = {({item}) => {
                              return(
                                   <View style = {styles.listContainer}>
                                        <TouchableOpacity style = {styles.itemContainer} onPress = {() => navigation.navigate("PlayerStats", item)}>
                                             <Text style = {styles.item}>{item.text}</Text>
                                        </TouchableOpacity>
                                   </View>

                              )
                         }}
                    />
               
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#50409A",
     },
     buttonContainer: {
          paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
          width:100,
          
     },
     button: {
          color:'white',
          fontWeight:'bold',
          fontSize:18,
          left:6
     },
     textOneContainer: {
          backgroundColor: "#1A1E49",
          borderRadius: 10,
          width: 100,
          height: 30,
          alignItems:'center',
          marginTop:25,
          marginLeft:8
     },
     textOne: {
          fontFamily: "FiraSans regular",
          fontSize: 18,
          color: '#fff',
          
          //left:10,   
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
     },
     listContainer: {
          flex:1,
          alignItems:'center',
          marginTop:30,
          //paddingTop: 0,
          backgroundColor: "#50409A",
     },
     
     
     itemContainer: {
          backgroundColor: "#964EC2",
          borderRadius:10,
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
