import React , { useState }from 'react'
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Button } from 'react-native'

export default function BestXV({navigation}) {
     const pressHandler = () => {
          navigation.goBack();
     };

     const goToPlayerStats = () => {
          navigation.navigate("PlayerStats");
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
               <View style = {styles.buttonContainer}>
                     <Button title="Back to home" onPress = {pressHandler} />
               </View>
               <View>
                    <Text style = {styles.textOne}>Best XV</Text>
                    <Text style = {styles.textTwo}>DreamXV  First  Fifteen </Text>
               </View>

               <View style = {styles.listContainer}>
                    <FlatList
                         data = {player}
                         renderItem = {({item}) => {
                              return(
                                   <TouchableOpacity style = {styles.itemContainer} onPress = {goToPlayerStats}>
                                         <Text style = {styles.item}>{item.text}</Text>
                                   </TouchableOpacity>

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
          backgroundColor: "#2C2C44",
     },
     buttonContainer: {
          paddingTop:30
     },
     textOne: {
          fontFamily: "FiraSans regular",
          fontSize: 18,
          color: '#fff',
          left:10,
          paddingBottom:10,
          paddingTop:10
     },
     textTwo: {
          fontFamily: "FiraSans regular",
          fontSize: 23,
          color: '#fff',
          left: 6,
          paddingBottom:10,
          fontWeight:'bold'
     },
     item: {
          fontFamily: "FiraSans regular",
          fontSize: 15,
          color: "white",
          padding:10,
          marginHorizontal: 10
          
     },
     listContainer: {
          flex:1,
     }
})
