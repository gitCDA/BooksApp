import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icone from 'react-native-vector-icons/Ionicons'


const ActionVerite = () => {

    const navigation = useNavigation() ;

    const openApp = () => { 
      // console.log( "openApp", item )
      navigation.navigate( 'First' )
    }
  
    return (
      <View>

        <Icone name='md-arrow-back-circle' size={55} onPress={ openApp } />
        <Text>ActionVerite</Text>

    </View>
  )
}

export default ActionVerite