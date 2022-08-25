import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {  Card, Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const MiniCards = ( {item} ) => {

  const navigation = useNavigation();

  const onPress= () => {
        
    // console.log("first", navigation)
     navigation.navigate('Details', {
      // item: item
      item
    })

    }

    return (

      <View style={styles.viewcard}>

        <TouchableOpacity
        onPress={onPress}
        >

        <ImageBackground style={styles.card}
          imageStyle={{ borderTopLeftRadius:10, borderTopRightRadius:10 }}
          source={ item.image }>
        </ImageBackground>


        <Text style={styles.textCard}>{item.titre.substring(0,10)}</Text>

        </TouchableOpacity>
        
      </View>

    )

}

export default MiniCards

const styles = StyleSheet.create({
  card:{
    height:105,
    width:155,
    marginHorizontal:5,
    borderRadius:15,
    // borderWidth:1,
    // justifyContent:"flex-end"
  },

  viewcard:{
    borderRadius:15
  },

  textCard:{
    height:25,
    fontSize:15,
    color:'rgba(255, 255, 255, 1)',
    marginHorizontal:5,
    textAlign:'center',
    padding:2,
    justifyContent:"flex-start",
    backgroundColor:'rgba(255, 55, 55, 0.85)',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  }
})