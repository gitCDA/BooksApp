import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './allApps/First';
import NewsScreen from './allApps/AppNews';
import Insta from './allApps/Insta';
import ActionVerite from './allApps/ActionVerite';
import Tuto from './allApps/TutoFlatList';
import TutoFireList from './allApps/TutoFireList';
import Details from './allApps/AppNews/components/Details';
import DetailsYoutube from './allApps/youtube/components/DetailsYoutube';
import Home from './allApps/youtube/components/Home';
import Ecommerce from './allApps/E-commerce';
// Importations Redux
import store from './redux/store';
import { Provider } from 'react-redux';

import auth from '@react-native-firebase/auth';
import Header from './allApps/E-commerce/Components/Header';


const Stack = createNativeStackNavigator();


const App = () => {


  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });


  return (

    <View style={{flex:1}}>
    
    {/* Provider fournit les données qui sont dans le store du reducer pour 
    avoir accès aux données tout le temps */}
    <Provider store={store}>

      <NavigationContainer>
          
        <Stack.Navigator initialRouteName="First"
          // Pour cacher le header qui est par défaut
          >


          <Stack.Screen name="First" component={First} />

          {/* News app Screen */}
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Insta" component={Insta} />
          <Stack.Screen name="AppTuto" component={Tuto} />
          <Stack.Screen name="AppTutoFireList" component={TutoFireList} />

          <Stack.Screen name="AppEcommerce" options={{headerShown: false}} component={Ecommerce} />

          <Stack.Screen name="ActionVerite" component={ActionVerite} />

          {/* YOUTUBE */}
          <Stack.Screen name="DetailsYoutube" options={{headerShown: false}} component={DetailsYoutube} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />

        </Stack.Navigator>

      </NavigationContainer>

    </Provider>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})