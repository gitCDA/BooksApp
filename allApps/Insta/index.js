import { View, Text } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Insta = () => {

    const navigation = useNavigation() ;

    const openApp = () => { 
      // console.log( "openApp", item )
      navigation.navigate( 'First' )
    }
  
    return (
      <View>

      <Icone name='md-arrow-back-circle' size={55} onPress={ openApp } />
      <Text>Instagrameuh</Text>

    </View>
  )
}

export default Insta