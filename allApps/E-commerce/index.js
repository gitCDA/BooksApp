import { View, Text } from 'react-native'
import React from 'react'
import Connexion from './Public/Connexion'
import Private from './Private'
import { useSelector } from 'react-redux'
import Public from './Public'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screen/Home'
import Settings from './Screen/Settings'

const Ecommerce = () => {
  
  // Récupérer la variable login qui est dans le state
  const { login } = useSelector( state => state) ;
  //   console.log(login)
  
  
  // Bottom Tabs création de fct° au lieu de constantes
  const Tab = createBottomTabNavigator();
  // Fct° qui remplace l'importation
  // const Home = () => {
  //   return (
  //     <View>
  //       <Text>Home</Text>
  //     </View>
  //   )
  // }

  return (

    <Tab.Navigator screenOptions={{headerShown: false}} >
    <Tab.Screen name="Acceuil" component={Home} />
    <Tab.Screen name="Mon Compte" component={Settings} />

    {/* <View>

      <Text>E-commerce</Text>
      
      {
        
        !login ?
        
        <Connexion />
        
        :
        
        <View>
      <Private />
      <Public />
      </View>
      
    }

    </View> */}

    </Tab.Navigator>
    
  )

}

export default Ecommerce