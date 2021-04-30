import React , { useState } from "react";
import axios from 'axios';
import { StyleSheet, View, Text, StatusBar,FlatList,TouchableOpacity,TouchableWithoutFeedback,Keyboard} from "react-native";
import { TextInput } from 'react-native-gesture-handler';



export default function CompareTwo({ route, navigation }) {

  // const{data} = route.params;
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

  const playerOne = {
    img:img,
    name:name,
    matchesPlayed:matchesPlayed,
    minutesPlayed:minutesPlayed,
    cameOn:cameOn,
    cameOff:cameOff,
    tries:tries,
    dropGoals:dropGoals,
    conversion:conversion,
    penalties:penalties,
    points:points,
    redCards:redCards 
  }

  var playerTwo = {
    img1:"",
    name1:"",
    matchesPlayed1:"",
    minutesPlayed1:"",
    cameOn1:"",
    cameOff1:"",
    tries1:"",
    dropGoals1:"",
    conversion1:"",
    penalties1:"",
    points1:"",
    redCards1:"" 
  }

  

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


  const pressHandler = () => {
    navigation.goBack();
  };

  const goToPlayerDetails = () => {
    navigation.navigate("PlayerDetails",playerOne);
  };

  const goToPlayerDetails1 = () => {
    navigation.navigate("PlayerDetails",playerTwo);
  };

  const setObject = (item) => {
    playerTwo = {
      img1:item.img,
      name1:item.name,
      matchesPlayed1:item.matchesPlayed,
      minutesPlayed1:item.minutesPlayed,
      cameOn1:item.cameOn,
      cameOff1:item.cameOff,
      tries1:item.tries,
      dropGoals1:item.dropGoals,
      conversion1:item.conversion,
      penalties1:item.penalties,
      points1:item.points,
      redCards1:item.redCards 
    }

  };

  
//   const goToSearchTwo = () => {
//     navigation.navigate("CompareTwo");
//   };

  // const [player, setplayer] = useState([
  //   {name: 'Select Player', key: '1'},
  //   {name: 'Select Player', key: '2'},
  // ]
  // )

  // const [playerDetails, setPlayerDetails] = useState([
  //   {detail: 'No Players', key: '1'},
  //   {detail: 'No Players', key: '2'},
  // ])

  // const [playerImage, setPlayerImage] = useState([
  //   {image: 'Player Image', key: '1'},
  //   {image: 'Player Image', key: '2'},
  // ])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>

        <View style = {styles.navigationContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
              <Text style = {styles.button}>Back</Text>
            </TouchableOpacity>

            <View style = {styles.textOneContainer}>
              <Text style = {styles.textOne}>Compare</Text>
            </View>

        </View>

      <View style = {styles.main}>

          <View style = {styles.partOne}>
              <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Select Player Two</Text>
              </View>
          </View>

          <View style = {styles.list}>
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
                                <Text style = {styles.text1}>Search</Text>
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


          <View style = {styles.nextBtn}>
            <TouchableOpacity style = {styles.btnContainer} onPress = {() => {goToPlayerDetails(); goToPlayerDetails1();}}>
              <Text style = {styles.text1}>Compare</Text>
            </TouchableOpacity>

          </View>
          
      </View>

     
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B1114",
    flex: 1,
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
main:{
  flex:1
},

text:{
  fontSize:20,
  color:'#fff'
},
text1:{
  fontSize:20,
  color:'#fff'
},
listContainer: {
  flex:1,
  alignItems:'center',
  marginTop:30,
  //paddingTop: 0,
  
}, 
itemContainer: {
  borderWidth:1,
  borderBottomColor: "#65BCBF",
  alignItems:'center',
  justifyContent:'center',
  backgroundColor: "#141E24",
  width:350,
  height:50
},
item: {
  fontFamily: "FiraSans regular",
  fontSize: 15,
  color: "white",
  padding:11,
  marginHorizontal: 10
  
},

searchContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  top:20,
  marginHorizontal:10,
  

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
btnSearch:{
  justifyContent:'center',
  alignItems:'center',
  width:90,
  height:40,
  borderColor:'#fff',
  borderWidth:1,
},
partOne:{
  alignItems:'center',
  marginTop:40
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
list:{
  
  backgroundColor: "#0B1114",
  height:500,
  
  marginTop:25
},
textContainer: {
    paddingTop:0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#0B1114",
    borderColor:'white',
    borderWidth:1,
    height:50,
    width:250
  },
  text: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    color: "white",
    
  },
  btnContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:40,
    borderColor:'white',
    borderWidth:1
    
  },
  nextBtn:{
    marginTop:10,
    marginLeft:280,
    justifyContent:'center'
  },
  
  
 
 
});
