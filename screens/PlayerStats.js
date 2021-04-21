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
     textOneContainer: {
          justifyContent:'center',
          marginRight:10
          
          
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
          backgroundColor: "#141E24",   
     },
     imageContainer:{
          width:160,
          height:160,
          borderRadius:10,
          backgroundColor:'black',
          borderColor: "#65BCBF",
          borderWidth:2,
          position:'absolute',
          alignSelf:'center',
          marginTop:220  
        
     },
     playerDetails: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#0B1114",
          borderWidth:2,
          borderColor:"#65BCBF",
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
