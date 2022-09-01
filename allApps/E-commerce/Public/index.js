import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const Public = () => {
  
  // Récupérer la variable nombre qui est dans le state
  const { nombre } = useSelector( state => state ) ;

  console.log(nombre)

  return (

    <View>

      <Text> Connectez-vous </Text>

    </View>

  )

}

export default Public