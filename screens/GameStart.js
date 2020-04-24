import React, {useState} from "react";
import { View, Text, StyleSheet, Button,TouchableWithoutFeedback, Keyboard,Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
const GameStart = ({setChange,setChoice}) => {
const [enteredValue,setEnteredValue] = useState('')
const [confirmed,setConfirmed] = useState(false)
const [selectedNumber,setSelectedNumber] = useState()
const numberInputHandler = inputText =>{
    setEnteredValue(inputText.replace(/[^0-9]/g, ""))
}
const onReset = ()=>{
    setEnteredValue("")
    setConfirmed(false)
}
const onConfirm = ()=> {
    if(enteredValue !== ''){
    setConfirmed(true)
    setEnteredValue("")
    setSelectedNumber(parseInt(enteredValue))
    Keyboard.dismiss()
    }
    else{
        Alert.alert('Choose number please!',
                    'Number has to be a number between 1 and 99',
                    [{text:"OK", style: "destructive"}])
         setConfirmed(false)
    }
}
  
  return (
      <TouchableWithoutFeedback onPress={()=>{
          Keyboard.dismiss()
      }}>
    <View style={styles.screen}>
      <Text style={styles.title}>{"Start a new game"}</Text>
      <Card style={styles.inputContainer}>
        <Text>{"Select a number!"}</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText= {numberInputHandler}
          value={enteredValue}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={"Reset"} color={"#575fcf"} onPress={onReset} />
          </View>
          <View style={styles.button}>
            <Button title={"Confirm"} color={"#ff3f34"} onPress={onConfirm} />
          </View>
        </View>
      </Card>
    {
    confirmed ? 
    <View style={{width: "100%",alignItems: "center"}}>
        <Text style={{marginVertical: 10}}>Selected number is</Text>
            <Card style={styles.selectedNum}>
                <Text style={{paddingRight: 5,color: "white", fontSize: 30}}> {selectedNumber}</Text>
           </Card>
           <View style={{ marginVertical: 10}}>
        <Button title={"START"} color={"#575fcf"}  onPress={()=>{setChoice(selectedNumber); setChange("GAME")}}/>
            </View>
        </View>
    :null
    }
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  inputContainer: {
    width: 300,
    padding: 20,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: "40%"
  },
  input: {
    fontSize: 20,
    width: "25%",
    textAlign: "center"
  },
  selectedNum:{
      padding: 19,
      alignItems: "center",
      justifyContent:"center"
  }
});

export default GameStart;
