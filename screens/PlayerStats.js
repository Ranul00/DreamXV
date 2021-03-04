import React from 'react'
import { StyleSheet, Text, View ,Button,StatusBar} from 'react-native'

export default function PlayerStats({navigation}) {
     const backToBestXV = () => {
          navigation.goBack("PlayerStats");
     };

     return (
          <View style = {styles.container}>
               <View style = {styles.buttonContainer}>
                    <Button title="back to BestXV" onPress = {backToBestXV} />
               </View>
               
               <View style = {styles.playerNumber}>
                    <Text style = {styles.text}>placeholder text one</Text>
               </View>
               <View style = {styles.playerDetails}>
                    <Text style = {styles.text}>placeholder text two</Text>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#2C2C44",
     },
     playerNumber: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#2C2C44",
          
     },
     playerDetails: {
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#72A0C1',
          borderTopLeftRadius:40,
          borderTopRightRadius:40,

     },
     text: {
          fontFamily: "FiraSans regular",
          fontSize: 23,
          color: '#fff'
     },
     buttonContainer: {
          paddingTop:30
     },

})
