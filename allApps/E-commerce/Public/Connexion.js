import { View, Text, Button } from 'react-native' ;
import React from 'react' ;
import { useDispatch } from 'react-redux';
import { editLogin } from '../../../redux/action' ;

const Connexion = () => {

  const dispatch = useDispatch() ;
  
  const pressConnexion = () => {
    // Changer valeur State
    dispatch( editLogin( true ) ) ;
    console.log("connexion") ;
   } ;

  return (

    <View>

      <Text>Connectez-vous</Text>
      <Button onPress={ pressConnexion } title='Connexion' />

    </View>

  )
}

export default Connexion