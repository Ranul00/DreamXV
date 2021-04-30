import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,StatusBar,Image} from 'react-native'

export default function PlayerStats({route, navigation}) {

     const {name} = route.params;

     const {height} = route.params;
     const {weight} = route.params;
     const {team} = route.params;
     const {position} = route.params;
     const {day} = route.params;
     const {month} = route.params;
     const {year} = route.params;
    
    

     const {img} = route.params;
    // console.log(img);

      

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
                    <Text style = {styles.text}>{name}</Text>
               </View>

               <View style = {styles.playerDetails}>

                    <View style = {styles.stats}>
                         <Text style = {styles.statText1}>Height</Text><Text style = {styles.statText2}>{height} m</Text>
                    </View>
                    <View style = {styles.stats}>
                         <Text style = {styles.statText1}>Weight</Text><Text style = {styles.statText2}>{weight} kg</Text>
                    </View>
                    <View style = {styles.stats}>
                         <Text style = {styles.statText1}>Team</Text><Text style = {styles.statText2}>{team}</Text>
                    </View>
                    <View style = {styles.stats}>
                         <Text style = {styles.statText1}>Position</Text><Text style = {styles.statText2}>{position}</Text>
                    </View>
                    <View style = {styles.stats}>
                         <Text style = {styles.statText1}>Date Of Birth</Text><Text style = {styles.statText2}>{day} - {month} - {year}</Text>
                    </View>
                    
               </View>

               <View style = {styles.imageContainer}>
                    <Image style = {styles.image} source = {{uri:img}}/>
               
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
     stats:{
          width:350 ,
          height:50,
          flexDirection:'row',
          paddingTop:10,
          paddingLeft:10,
          paddingRight:10,
          marginTop:18,
          justifyContent:'space-between',
          backgroundColor:'#141E24',
          borderBottomColor:'#65BCBF',
          borderWidth:1,
     },
     statText1:{
          color:'#fff',
          fontSize:20
     },
     statText2:{
          color:'#fff',
          fontSize:20
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
          width: 153,
          height: 150,
          backgroundColor: "#141E24",
          borderRadius: 10,
          borderColor: "#141E24",
          //borderWidth: 2,
          position: "absolute",
          alignSelf: "center",
          marginTop: 220,
        
     },
     image:{
          width: 153,
          height: 150,
          borderRadius: 10, 
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
