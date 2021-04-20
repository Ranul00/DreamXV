import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,StatusBar} from 'react-native'

export default function PlayerStats({route, navigation}) {

     const {text} = route.params;

     const backToBestXV = () => {
          navigation.goBack("PlayerStats");
     };

     return (
          <View style = {styles.container}>
               <View style = {styles.navigationContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={backToBestXV}>
                         <Text style = {styles.button}>Back</Text>
                    </TouchableOpacity>

                    <View style = {styles.textOneContainer}>
                         <Text style = {styles.textOne}>Player Stats</Text>
                    </View>
               </View>
               
               
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
          paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
     },
     navigationContainer:{
          //flex:1,
          flexDirection:'row',
          backgroundColor:'#0D1B46',
          justifyContent:'space-between',
          height:50,
          borderBottomRightRadius:10,
          borderBottomLeftRadius:10
          
     },
     textOneContainer: {
          justifyContent:'center',
          marginRight:10
          
          
     },
     buttonContainer:{
          backgroundColor:'#313866',
          alignItems:'center',
          height:40,
          width:70,
          marginLeft:10,
          marginVertical:5,
          justifyContent:'center',
          borderRadius:10
     },
     textOne: {
          fontFamily: "FiraSans regular",
          fontSize: 18,
          color: '#fff',
          fontWeight:'bold'
          
          //left:10,   
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
     button: {
          color:'white',
          fontWeight:'bold',
          fontSize:18,
          //left:6
     },

})
