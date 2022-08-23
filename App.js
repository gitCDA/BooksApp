import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './allApps/First';
import NewsScreen from './allApps/AppNews';
import Insta from './allApps/Insta';
import ActionVerite from './allApps/ActionVerite';
import Tuto from './allApps/TutoFlatList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex:1}}>

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="First"
        // Pour cacher le header qui est par défaut
        screenOptions={{headerShown: false}}>


        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="Insta" component={Insta} />
        <Stack.Screen name="ActionVerite" component={ActionVerite} />
        <Stack.Screen name="AppTuto" component={Tuto} />

      </Stack.Navigator>

    </NavigationContainer>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})