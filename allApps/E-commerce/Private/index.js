import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { editUser } from '../../../redux/action'
import { styles } from '../../../theme/ecommerce/styles'

const Index = () => {

  const dispatch = useDispatch() ;

  const navigation = useNavigation() ;
    
  const pressDéconnexion = () => {
    // Changer valeur State
    dispatch( editUser( false ) ) ;
    navigation.navigate( 'Public' ) ;
   } ;

  return (

    <View>
      
      <Button onPress={ pressDéconnexion } title='Déconnexion' />
    
    </View>

  )
}

export default Index