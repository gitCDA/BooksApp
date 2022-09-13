import { View, Text, Button } from 'react-native' ;
import React from 'react' ;
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Input, Icon } from '@rneui/themed';
import { editUser } from '../../../redux/action' ;

const Connexion = () => {

  const navigation = useNavigation() ;

  const dispatch = useDispatch() ;
  
  const pressConnexion = () => {
    // Changer valeur State
    dispatch( editUser( true ) ) ;
    navigation.navigate( 'Private' ) ;
   } ;
  
  const GoToInscription = () => {
    navigation.navigate( 'Inscription' ) ;
   } ;

  return (

    <View>

      <Input>Connectez-vous</Input>
      <Button onPress={ pressConnexion } title='Connexion' />

      <Button onPress={ GoToInscription } title='Inscrivez-vous dès maintenant !' />

    </View>

  )
}

export default Connexion