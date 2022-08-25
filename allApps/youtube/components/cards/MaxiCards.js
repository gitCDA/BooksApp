import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Image } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import  Icone from "react-native-vector-icons/Entypo"
import Icone2 from "react-native-vector-icons/Fontisto"
import { videos } from '../../constante/videos';
import { categories } from '../../constante/categories';

const MaxiCards = ( {item, type, route, filtreVideos} ) => {
  
  const navigation = useNavigation();
  
  // Envoyer les données dans Détails
  const onPress= () => {
    // console.log("first", navigation)

     navigation.navigate('Details', { item: item })

  }

  // Filtrer les vidéos selon la catégorie
  const onPress1= () => {
    filtreVideos(item.id)
  }

  return (
    
    <View>

  {/* Si la props type="categories" alors voir 1 */}
      
      {

      (type=="categories") ?

      // 1
      <View style={styles.viewCategory}>
        <Button
          containerStyle={styles.buttonCategory}
          onPress={ onPress1 }
          titleStyle={styles.titleStyle}
          title={item.titre.substring(0,10)}
          color='rgba(255, 25, 15, 1)'
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
            
      :

      // 2
      <View style={styles.card}>
        <Image
          containerStyle={styles.videoscategory}
          source={ item.image }
          onPress={ onPress }
        />
        <Text style={styles.block}>{item.titre}</Text>
      </View>

      }

    </View>

  )
}

export default MaxiCards

const styles = StyleSheet.create({

  viewCategory:{
    paddingHorizontal:10,
    paddingBottom:10,
  },

  buttonCategory:{
    borderRadius:7.5,
    width:105,
    marginBottom:5,
    justifyContent:'center',
  },

  videoscategory:{
    borderTopLeftRadius:7.5,
    borderTopRightRadius:7.5,
    width:'100%',
    height:195,
  },

  titleStyle:{
    fontWeight: 'bold',
    fontSize: 15,
    height:25,
  },

  block:{
    height:20,
    width:'100%',
    paddingLeft:5,
    borderBottomLeftRadius:7.5,
    borderBottomRightRadius:7.5,
    backgroundColor:'rgba(108, 223, 244, 0.85)',
    // margin:15,
    // borderRadius:10,
  },

  card:{
    paddingBottom:10,
    paddingHorizontal:10,
  }

})