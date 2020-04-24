import React, {useState,useEffect} from "react";
import { View, Text, StyleSheet, Button,TouchableWithoutFeedback, Keyboard,Alert } from "react-native";
import Card from '../components/Card'
const generateNum = (min,max,exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.floor(Math.random()*(max-min)) + min;
    if(rand === exclude){
        return exclude;
    }
    else{
        return rand;
    }
}
const  GameScreen = props =>{
const [supremum, setSupremum] = useState({min: 1, max: 100})
const [currentGuess, setCurrentGuess] = useState(generateNum(supremum.min,supremum.max, props.choice))
const [win, setWin] = useState(false)
useEffect(()=>{
  if(currentGuess === props.choice){
      setWin(true)
     setTimeout(()=>{
        props.setChange('END')
     },2000) 
  }
},[currentGuess])

const tryGuess = (arg)=>{
    if(arg === "lower" && currentGuess > props.choice){
         setSupremum({...supremum, max: currentGuess})
         setCurrentGuess(generateNum(supremum.min,supremum.max, props.choice))
    } else if(arg === "greater" && currentGuess < props.choice){
        setSupremum({...supremum, min: currentGuess})
        setCurrentGuess(generateNum(supremum.min,supremum.max, props.choice))
    } else{
        Alert.alert("Don't Cheat!", "-_-  -_-  -_-",[{text: "SORRY! :(", style:"destructive"}])
        return
    }
}

return(<View style={styles.screen}>
        <Text style={{marginVertical:10 }}>Opponent's Guess</Text>
      <Card style={styles.selectedNum}>
           <Text style={{paddingRight: 5,color: "white", fontSize: 30}}> {currentGuess}</Text>
        </Card>
     { !win ?
    <Card style={styles.buttonContainer}>
        <Button title="LOWER  "  color={"#575fcf"} onPress={()=>tryGuess("lower")}/>
        <Button title="GREATER" color={"#ff3f34"} onPress={()=>tryGuess("greater")}/>
         </Card>:
    <Text style={{marginVertical: 10,color: "black", fontSize: 15}}>Great Game!</Text>
     }   
</View>)
}
const styles=StyleSheet.create({
  screen: {
      flex:1,
      padding: 10,
      alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    maxWidth: "80%",
    justifyContent: "space-between",

    padding: 15,
    marginVertical: 10
  },
  selectedNum:{
    maxWidth: "80%",
    padding: 19,
    alignItems: "center",
    justifyContent:"center"
}
})

export default GameScreen;