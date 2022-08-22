import { Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/style'
import { useNavigation } from '@react-navigation/native'

const RenderItem = ( {item} ) => {

  const navigation = useNavigation() ;

  const openApp = () => { 
    // console.log( "openApp", item )
    navigation.navigate( item.nomApp )
  }

  return (
    <TouchableOpacity style={ styles.content }
      onPress={ openApp } >

      <Text style={ styles.titre }> {item.titre} </Text>

    </TouchableOpacity>
  )
}

export default RenderItem