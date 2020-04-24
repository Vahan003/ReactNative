import React, {useState} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Header from './components/Header'
import GameStart from './screens/GameStart'
import GameScreen  from './screens/GameScreen';
import GameEnd  from './screens/GameEnd';

export default function App() {
  const [changeScreen,setChangeScreen ]= useState('START')
  const [choice,setChoice ]= useState()
  return (
    <View style= {styles.screen}>
     <Header title = "Guess a number"/>
    {changeScreen === 'START' && <GameStart setChange={setChangeScreen} setChoice={setChoice} />}
    {changeScreen === 'GAME' && <GameScreen choice={choice} setChange={setChangeScreen}/> }
    {changeScreen === 'END' && <GameEnd setChange={setChangeScreen}/>}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})


