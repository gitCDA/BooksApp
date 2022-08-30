import { View, Text } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Insta = () => {

  // Récupérer la variable login qui est dans le state
  const { login } = useSelector( state => state )
  // const login = useSelector( state => state.login )

  const navigation = useNavigation() ;

  const openApp = () => { 
    // console.log( "openApp", item )
    navigation.navigate( 'First' )
  }

  return (
    <View>
    <Icone name='md-arrow-back-circle' size={55} onPress={ openApp } />

    <View>

      { login ? <Text>Est connecté</Text> :
                <Text>N'est pas connecté</Text> }
    </View>

    </View>
  )
}

export default Insta