import React, { useState } from 'react'
import { StyleSheet, Text, View ,StatusBar,TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function Search({navigation}) {

     const[searchPlayer, setSearchPlayer] = useState({});

     useEffect(() => {
          fetch('http://192.168.8.104:5000/search').then(response => response.json().then(data =>{
               
          })
          );
     }, [])
     const { search } = searchPlayer;

     const pressHandler = () => {
          navigation.goBack();
        };
   
     const updateSearch = (search) => {
             setSearchPlayer({ search });   
     };


     return (
          <View style = {styles.container}>
               <View style = {styles.navigationContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
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
                    />
                    <TouchableOpacity style = {styles.btnSearch} >
                         <Text style = {styles.text}>Search</Text>
                    </TouchableOpacity>

               </View>

               <View style = {styles.listContainer}>

               </View>


               {/* <View style = {styles.searchbar}>
                    <SearchBar
                         inputStyle={styles.inputStyle}
                         containerStyle={styles.containerStyle}
                         placeholderTextColor={'gray'}
                         placeholder={'Search'}
                         inputContainerStyle={styles.inputContainerStyle}
                         onChangeText={updateSearch}
                         value={search}
                    /> 

               </View> */}
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
