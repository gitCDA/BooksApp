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
import { addCategorie } from '../../redux/action';

// Bottom Tabs création de fct° au lieu de constantes
const Tab = createBottomTabNavigator();

  const App = () => {
    
  const firebase = useContext( FirebaseContext ) ;

  const dispatch = useDispatch() ;


  const initCategories = async () => {

    const categories = await firebase.getCategories() ;


    if(!categories.empty){

      console.log("pas vide") ;
      
      categories.forEach( categorieData => {

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
  

  useEffect( () => {

    initCategories() ;

  }, [])

  
  return (

    <Tab.Navigator screenOptions={{headerShown: false}} >
    <Tab.Screen name="Acceuil" component={Home} />
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