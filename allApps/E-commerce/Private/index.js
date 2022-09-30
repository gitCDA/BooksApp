import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Button } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { editUser } from '../../../redux/action'
import Commande from '../Components/Commande'
// import { useNavigation } from '@react-navigation/native'

const Index = () => {

  const dispatch = useDispatch() ;
  // const userConnecte = useContext( index ) ;
    
  const pressDéconnexion = () => {
    dispatch( editUser( false ) ) ;
    // auth()
    // .signOut()
    // .then(() => console.log('User signed out!'));
    // Changer valeur State
    // navigation.navigate( 'Connexion' ) ;
  } ;

  return (

    <View>
      
      <Commande />

      <Button
        containerStyle={{
          width: 200,
          alignSelf:'center',
        }}
        type="clear"
        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
        onPress={ pressDéconnexion } title='Déconnexion' />
    
    </View>

  )
}

export default Index