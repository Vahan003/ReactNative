import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = props =>{
return <View style = {{...props.style, ...styles.card}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
    shadowColor: "black",
    shadowOffset: {
       width: 0,
       height: 2
   },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "#ff5e57",
    borderRadius: 10,
    elevation: 8,
  }
})

export default Card;