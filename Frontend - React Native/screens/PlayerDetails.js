import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Image } from 'react-native'

export default function PlayerDetails({route,navigation}) {

     const{img} = route.params;
     const{name} = route.params;
     const{matchesPlayed} = route.params;
     const{minutesPlayed} = route.params;
     const{cameOn} = route.params;
     const{cameOff} = route.params;
     const{tries} = route.params;
     const{dropGoals} = route.params;
     const{conversion} = route.params;
     const{penalties} = route.params;
     const{points} = route.params;
     const{redCards} = route.params;


     const{img1} = route.params;
     const{name1} = route.params;
     const{matchesPlayed1} = route.params;
     const{minutesPlayed1} = route.params;
     const{cameOn1} = route.params;
     const{cameOff1} = route.params;
     const{tries1} = route.params;
     const{dropGoals1} = route.params;
     const{conversion1} = route.params;
     const{penalties1} = route.params;
     const{points1} = route.params;
     const{redCards1} = route.params;

     const pressHandler = () => {
          navigation.goBack();
     };


     return (
          <View style ={styles.container}>
               <View style = {styles.navigationContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
                    <Text style = {styles.button}>Back</Text>
                    </TouchableOpacity>

                    <View style = {styles.textOneContainer}>
                    <Text style = {styles.textOne1}>Player Details</Text>
                    </View>

                </View>


                <View style = {styles.main}>
                         <View>
                              <Text style = {styles.textOne}>{name}</Text>
                              <View style = {styles.box3}>
                                   <Image style = {styles.image} source = {{uri:img}}/> 
                              </View>
                              <View style = {styles.box1}>
                                   <View style = {styles.playerDetails}>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Matches Played</Text><Text style = {styles.statText2}>{matchesPlayed}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Minutes Played</Text><Text style = {styles.statText2}>{minutesPlayed}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>CameOn</Text><Text style = {styles.statText2}>{cameOn}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>CameOff</Text><Text style = {styles.statText2}>{cameOff}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Tries</Text><Text style = {styles.statText2}>{tries}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Drop Goals</Text><Text style = {styles.statText2}>{dropGoals}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Conversions</Text><Text style = {styles.statText2}>{conversion}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Penalties</Text><Text style = {styles.statText2}>{penalties}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Points</Text><Text style = {styles.statText2}>{points}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Red Cards</Text><Text style = {styles.statText2}>{redCards}</Text>
                                             </View>


                                   </View>
                                   
                              </View>
                                        
                         </View>

                         <View>
                              <Text style = {styles.textOne}>{name1}</Text> 

                              <View style = {styles.box3}>
                                   <Image style = {styles.image} source = {{uri:img1}}/>    
                              </View> 

                              <View style = {styles.box2}>
                              <View style = {styles.playerDetails}>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Matches Played</Text><Text style = {styles.statText2}>{matchesPlayed1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Minutes Played</Text><Text style = {styles.statText2}>{minutesPlayed1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>CameOn</Text><Text style = {styles.statText2}>{cameOn1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>CameOff</Text><Text style = {styles.statText2}>{cameOff1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Tries</Text><Text style = {styles.statText2}>{tries1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Drop Goals</Text><Text style = {styles.statText2}>{dropGoals1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Conversions</Text><Text style = {styles.statText2}>{conversion1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Penalties</Text><Text style = {styles.statText2}>{penalties1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Points</Text><Text style = {styles.statText2}>{points1}</Text>
                                             </View>
                                             <View style = {styles.stats}>
                                                  <Text style = {styles.statText1}>Red Cards</Text><Text style = {styles.statText2}>{redCards1}</Text>
                                             </View>


                                   </View>


                              </View>
                         </View>

                </View>
               
               

              
           
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          backgroundColor: "#0B1114",
          paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
     },
     main:{
          flex:1,
          flexDirection:'row',

     },
     navigationContainer:{
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
     textOne1: {
          fontFamily: "FiraSans regular",
          fontSize: 18,
          color: '#fff',
          fontWeight:'bold'
          
          //left:10,   
     },
     textOne:{
          marginTop:30,
          fontSize:18,
          color:'white',
          marginHorizontal:40
     },
     button: {
          color:'white',
          fontWeight:'bold',
          fontSize:18,
      },
          
     box1:{
          flex:1,
          marginTop:20,
          borderColor:'black',
          borderWidth:1,
          
     },
     box2:{
          flex:1,
          marginTop:20,
          //height:500,
          //backgroundColor:'green',
          borderColor:'black',
          borderWidth:1,
          
     },
     box3:{
          height:85,
          width:85,
          backgroundColor:'white',
          marginHorizontal:60,
          marginTop:20

     },
     image:{
          height:85,
          width:85,
     },
     playerDetails: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#0B1114",
          borderWidth:1,
          borderColor:"#65BCBF",
          // borderTopLeftRadius:40,
          // borderTopRightRadius:40,

     },
     stats:{
          //flex:1,
          height:40,
          width:180,
          marginRight:6,
          flexDirection:'row',
          padding:2,
          justifyContent:'space-between',
          alignItems:'center',
          backgroundColor:'#141E24',
          borderBottomColor:'#65BCBF',
          borderWidth:.5,
     },
     statText1:{
          color:'#fff',
          fontSize:15
     },
     statText2:{
          color:'#fff',
          fontSize:15
     },
})

