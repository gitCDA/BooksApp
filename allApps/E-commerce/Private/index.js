import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Button } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { editUser } from '../../../redux/action'
import index from '../index'
import { styles } from '../../../theme/ecommerce/styles'

const Index = () => {

  const dispatch = useDispatch() ;

  const userConnecte = useContext( index ) ;
    
  const pressDéconnexion = () => {
    // Changer valeur State
    dispatch( editUser( false ) ) ;
    // navigation.navigate( 'Connexion' ) ;
  } ;

  return (

    <View>
      
      <Text></Text>

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