import { Text, View, Button } from 'react-native'
import React from 'react'
import { styles } from '../../First/theme/style'
import { useDispatch } from 'react-redux'
import { editLogin } from '../../../redux/action'

const Private = () => {
    
  const dispatch = useDispatch() ;
  
  const pressDeconnexion = () => {
    dispatch( editLogin( false ) ) ;
    console.log("Déconnexion") ;
   } ;

  return (

    <View>

      <Text>Private</Text>
      <Button onPress={ pressDeconnexion } title='Déconnexion' />

    </View>
  )
}

export default Private