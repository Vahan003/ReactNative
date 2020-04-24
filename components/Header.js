import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Header = ({title})=> {
 return (
     <View style={styles.header}>
         <Text style={styles.titleText}>{title}</Text>
     </View>
 );
}


const styles = StyleSheet.create({
   header:{
     width: "100%",
     height: 90,
     paddingTop: 36,
     backgroundColor: '#ff5e57',
     alignItems: "center",
     justifyContent: "center"
   },
   titleText: {
     color: "#1e272e",
     fontSize: 20
   }
})

export default Header;