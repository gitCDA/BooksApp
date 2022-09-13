// Librairies Tiers en Haut
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Créations persos en Bas
import Connexion from './Connexion'
import Inscription from './Inscription'

const Stack = createNativeStackNavigator() ;

const Public = () => {
  return (
    
    <Stack.Navigator>
    
      <Stack.Screen options={{ headerShown: false }} name='Connexion' component={ Connexion }/>
      <Stack.Screen options={{ headerShown: false }} name='Inscription' component={ Inscription }/>
    
    </Stack.Navigator>

  )
}

export default Public