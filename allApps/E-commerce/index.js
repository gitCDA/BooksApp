import { View, Text } from 'react-native'
import React from 'react'
import Connexion from './Public/Connexion'
import Private from './Private'
import { useSelector } from 'react-redux'

const Ecommerce = () => {

  // Récupérer la variable login qui est dans le state
  const { login } = useSelector( state => state) ;

  console.log(login)
  return (

    <View>

      <Text>E-commerce</Text>
      
      { !login ? <Connexion /> :

      <Private /> }

    </View>

  )

}

export default Ecommerce