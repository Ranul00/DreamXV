import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,StatusBar} from 'react-native'

export default function PlayerStats({route, navigation}) {

     const {text} = route.params;

     const backToBestXV = () => {
          navigation.goBack("PlayerStats");
     };

     return (
          <View style = {styles.container}>
               <TouchableOpacity style={styles.buttonContainer} onPress={backToBestXV}>
                    <Text style = {styles.button}>Back</Text>
               </TouchableOpacity>
               
               <View style = {styles.playerNumber}>
                    <Text style = {styles.text}>{text}</Text>
               </View>

               <View style = {styles.playerDetails}>
                    <Text style = {styles.text}>player stats displays here</Text>
               </View>

               <View style = {styles.imageContainer}>
                    
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#313866",
     },
     playerNumber: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#313866",      
     },
     imageContainer:{
          width:160,
          height:160,
          borderRadius:10,
          backgroundColor:'white',
          position:'absolute',
          alignSelf:'center',
          marginTop:220  
        
     },
     playerDetails: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#50409A',
          borderTopLeftRadius:40,
          borderTopRightRadius:40,

     },
     text: {
          fontFamily: "FiraSans regular",
          fontSize: 28,
          color: '#fff'
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

})
