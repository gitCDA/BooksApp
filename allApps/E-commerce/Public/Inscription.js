import { View, Text  } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Fontisto'

import { styles } from '../../../theme/ecommerce/styles'

const Connexion = () => {

  const navigation = useNavigation() ;
  
  const GoToConnexion = () => {
    navigation.navigate( 'Connexion' ) ;
   } ;

  return (

    <View>

      <Text>Connectez-vous</Text>

      <Input
        placeholder='INPUT WITH CUSTOM ICON'
        leftIcon={
          <Icon
            name='at'
            size={25}
            color='black'
          />
        }
      />

      <Button onPress={ GoToConnexion }
      title='Déjà Inscrit ? Connectez-vous' />

    </View>
  )
}

export default Connexion