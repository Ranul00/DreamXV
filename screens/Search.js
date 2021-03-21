import React, { useState } from 'react'
import { StyleSheet, Text, View ,StatusBar,TouchableOpacity} from 'react-native'
import { SearchBar } from 'react-native-elements';

export default function Search({navigation}) {

     const[searchPlayer, setSearchPlayer] = useState({});

     const { search } = searchPlayer;

     const pressHandler = () => {
          navigation.goBack();
        };
   
     const updateSearch = (search) => {
             setSearchPlayer({ search });   
     };


     return (
          <View style = {styles.container}>
               <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
                    <Text style = {styles.button}>Back</Text>
               </TouchableOpacity>


               <View style = {styles.searchbar}>
                    <SearchBar
                         inputStyle={styles.inputStyle}
                         containerStyle={styles.containerStyle}
                         placeholderTextColor={'gray'}
                         placeholder={'Search'}
                         inputContainerStyle={styles.inputContainerStyle}
                         onChangeText={updateSearch}
                         value={search}
                    /> 

               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          backgroundColor:"#2C2C44",
          
     },
     searchbar:{
          marginTop:60,
          //justifyContent:'flex-end',
          height:70,
          //backgroundColor:'white',
          alignItems: 'center',
          justifyContent:'center'
          
      },
      inputStyle:{
          backgroundColor: '#d3dff5',
          height:40,
          borderRadius:15
      },
      containerStyle:{
          backgroundColor: '#d3dff5',
          borderRadius: 30,
          width:380, 
          height:50,
          borderColor:'#d3dff5'
      },
      inputContainerStyle:{
          backgroundColor: '#d3dff5',
          height:30
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
