import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Connexion from './Public/Connexion';
import Private from './Private';
import { useDispatch, useSelector } from 'react-redux';
import Public from './Public';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Settings from './Screen/Settings' ;
import { FirebaseContext } from '../../firebaseContext' ;
import { addArticle, addCategorie } from '../../redux/action';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './Screen/Detail';
import Panier from './Screen/Panier';
import Icon from 'react-native-vector-icons/Feather';

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
      <Stack.Screen options={{ headerShown: false }} name='DetailsArticle' component={ Detail} />
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
  




  useEffect( () => {

    initCategories() ;
    initArticles() ;

  }, [])

  
  return (

    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="Acceuil" component={Acceuil} />
      <Tab.Screen name="Panier" component={ Panier } />
      <Tab.Screen name="Mon Compte" component={Settings} />
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