import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../First/theme/style'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const News = () => {

  const navigation = useNavigation() ;

  const openApp = () => { 
    // console.log( "openApp", item )
    navigation.navigate( 'First' )
  }

  return (
    <View>
      <Icone name='md-arrow-back-circle' size={55} onPress={ openApp } />
      <Text style={ styles.app }>News</Text>
    </View>
  )
}

export default News