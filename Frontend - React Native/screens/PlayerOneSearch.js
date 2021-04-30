import React, { useState } from 'react'
import axios from 'axios';
import { StyleSheet, Text, View ,StatusBar,TouchableOpacity,FlatList} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function Search({navigation}) {

     const playerOne = {
          img:"",
          matchesPlayed:"",
          minutesPlayed:"",
          cameOn:"",
          cameOff:"",
          tries:"",
          dropGoals:"",
          conversion:"",
          penalties:"",
          points:"",
          redCards:"" 
     }

     const setObject = (item) => {
          playerOne = {
               img:item.img,
               matchesPlayed:item.matchesPlayed,
               minutesPlayed:item.minutesPlayed,
               cameOn:item.cameOn,
               cameOff:item.cameOff,
               tries:item.tries,
               dropGoals:item.dropGoals,
               conversion:item.conversion,
               penalties:item.penalties,
               points:item.points,
               redCards:item.redCards 
          }
     }

     const goToCompare = () => {
          navigation.navigate("Compare",playerOne);
     };

     const[player, setPlayer] = useState([]);
    
     var text = "";


     const updateSearch = () => {
          const url = 'http://192.168.8.104:5000/search';
          const config = {
               params: {
                 name: text
               }
             };

          axios.get(url,config).then(response => {
               /* do thing as you wish*/
               setPlayer(response.data);
          }).catch(() => {
               /*error handlings as you wish*/
               console.log('API crashed');
          });
     };
   
     


     return (
          <View style = {styles.container}>
               <View style = {styles.navigationContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={goToCompare}>
                         <Text style = {styles.button}>Back</Text>
                    </TouchableOpacity>

                    <View style = {styles.textOneContainer}>
                         <Text style = {styles.textOne}>Search</Text>
                    </View>
               </View>

               <View style = {styles.searchContainer}>
                    <TextInput
                         style={styles.textinput}
                         placeholder="Enter Player Name"
                         placeholderTextColor="gray"
                         onChangeText={(value) => {
                              text = value;
                         }}
                    />
                    <TouchableOpacity style = {styles.btnSearch} onPress = {updateSearch} >
                         <Text style = {styles.text}>Search</Text>
                    </TouchableOpacity>

               </View>

               <View>
                    <FlatList
                         data = {player}
                         numColumns = {1}
                         keyExtractor = {item => `${item.name} - ${item.team}`}
                         renderItem = {({item}) => {
                                   return(
                                        <View style = {styles.listContainer}>
                                             <TouchableOpacity style = {styles.itemContainer} onPress = {() => {setObject(item)}}>
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
     container:{
          flex:1,
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
      textinput: {
          color: "white",
          fontSize:20,
          width: 250,
          height: 40,
          marginBottom: 30,
          borderBottomColor: "#f8f8f8",
          borderBottomWidth: 1,
      },
      searchContainer:{
           flexDirection:'row',
           justifyContent:'space-between',
           top:20,
           marginHorizontal:10

      },
      text:{
           fontSize:20,
           color:'#fff'
      },
      btnSearch:{
           justifyContent:'center',
           alignItems:'center',
           width:90,
           height:40,
           borderColor:'#fff',
           borderWidth:1,
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


     // searchbar:{
     //      marginTop:60,
     //      //justifyContent:'flex-end',
     //      height:70,
     //      //backgroundColor:'white',
     //      alignItems: 'center',
     //      justifyContent:'center'
          
     //  },
     //  inputStyle:{
     //      backgroundColor: '#d3dff5',
     //      height:40,
     //      borderRadius:15
     //  },
     //  containerStyle:{
     //      backgroundColor: '#d3dff5',
     //      borderRadius: 30,
     //      width:380, 
     //      height:50,
     //      borderColor:'#d3dff5'
     //  },
     //  inputContainerStyle:{
     //      backgroundColor: '#d3dff5',
     //      height:30
     //  },
     
})
