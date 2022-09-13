import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirebaseContext } from '../../firebaseContext' ;
import { addArticle, addCategorie, editUser } from '../../redux/action';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import Detail from './Screen/Detail';
import Panier from './Screen/Panier';
import Home from './Screen/Home';
import Settings from './Screen/Settings' ;
import Public from './Public';
import Connexion from './Public/Connexion';
import Private from './Private';


// Bottom Tabs création de fct° au lieu de constantes
const Tab = createBottomTabNavigator(

  // { Panier: {
  //     tabBarIcon: () => {
  //       return (
  //         <Icon
  //           name="watch"
  //           size={24}
  //           color="black"
  //         />
  //       );
  //     },
  //   },
  // }
);

// On le réutilise comme dans App voir const Acceuil
const Stack = createNativeStackNavigator() ;

const Acceuil = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }} name='Home' component={ Home } />
      <Stack.Screen options={{ headerShown: false }} name='DetailsArticle' component={ Detail } />
    </Stack.Navigator>
  )
}

  const App = () => {
    
  const firebase = useContext( FirebaseContext ) ;
  const dispatch = useDispatch() ;




  const initCategories = async () => {

    // Récupère dans Firebase et le code continue dès que c'est fini
      const categories = await firebase.getCategories() ;

      
      if(!categories.empty){
        
        console.log("pas vide") ;
        
        categories.forEach( categorieData => {
          console.log(categorieData.id)

          const tempCategorie = {
            id: categorieData.id,
    // nom: categorieData.data().nom
    // à la suite plus simple destructuré pour récupérer toutes les données d'1 coup
            ...categorieData.data()
          }

          dispatch( addCategorie(tempCategorie) )

          console.log( tempCategorie )

        })
      
      }
      // console.log(categories.empty)
  }



  const initArticles = async () => {

      const articles = await firebase.getArticles() ;


      if(!articles.empty){

        console.log("pas vide") ;
        
        articles.forEach( articleData => {

          dispatch( addArticle(

            {id: articleData.id,
            ...articleData.data()}

          ))

          console.log(
            {id: articleData.id,
              ...articleData.data()}
          )

        })
      
      }
      // console.log(articles.empty)
  }
  

  const AuthStateChanged = ( user ) => {
    console.log('AuthStateChanged user', user) ;
    // Mets à jour l'user créer pdt l'inscription dans la session en cours (voir Private)
    dispatch( editUser( user ) ) ;
  }


  useEffect( () => {

    initCategories() ;
    initArticles() ;
    const subscriber = auth().onAuthStateChanged(AuthStateChanged);
    return subscriber; // unsubscribe on unmount

  }, [])

  
  return (

    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="Acceuil" component={Acceuil} options={{
          tabBarIcon: () => (
            <Icon name="home" size={25} />
          ), }} />

      <Tab.Screen name="Panier" component={ Panier } options={{
          tabBarIcon: () => (
            <Icon2 name="shopping-basket-add" size={25} />
          ), }} />

      <Tab.Screen name="Mon Compte" component={Settings} options={{
          tabBarIcon: () => (
            <Icon3 name="account" size={25} />
          ), }} />
    </Tab.Navigator>

  )

}

// const Ecommerce = () => {
  
//   // Récupérer la variable login qui est dans le state
//   const { login } = useSelector( state => state) ;
//   //   console.log(login)
  
  
//   // Bottom Tabs création de fct° au lieu de constantes
//   const Tab = createBottomTabNavigator();
//   // Fct° qui remplace l'importation
//   // const Home = () => {
//   //   return (
//   //     <View>
//   //       <Text>Home</Text>
//   //     </View>
//   //   )
//   // }

//     {/* <View>

//       <Text>E-commerce</Text>
      
//       {
        
//         !login ?
        
//         <Connexion />
        
//         :
        
//         <View>
//       <Private />
//       <Public />
//       </View>
      
//     }

//     </View> */}

// }
// export default Ecommerce

export default App