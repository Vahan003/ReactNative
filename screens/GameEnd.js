import React, {useState} from "react";
import { View, Text, Button} from "react-native";



const GameEnd = (props)=>{
  return (<View style={{width: "100%",alignItems: "center"}}>
  <Text style={{marginVertical: 10,color: "black", fontSize: 20}}>Game Over!</Text>
  <View style={{ marginVertical: 10}}>
  <Button title = "Try Again" onPress ={()=>props.setChange('START')}></Button>
  </View>
  </View>
  )
}

export default GameEnd;