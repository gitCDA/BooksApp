import { View, Text } from 'react-native' ;
import React from 'react' ;
import { Button } from '@rneui/themed';
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
      <Button
        containerStyle={{
          width: 200,
          alignSelf:'center',
          borderRadius:15,
        }}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        type="clear"
        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
        onPress={ pressConnexion } title='Connexion' />

      <Button
        containerStyle={{
          width: 200,
          alignSelf:'center',
        }}
        type="clear"
        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
        onPress={ GoToInscription } title='Inscrivez-vous dès maintenant !' />

    </View>

  )
}

export default Connexion