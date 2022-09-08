import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../../firebaseContext';

const DetailsArticle = ( {route} ) => {

    // Pour récupérer les données dans détails
    const {id} = route.params ;
    // const {articles} = route.params ;

    const [articles, setArticles] = useState() ;
    const [Load, setLoad] = useState( false ) ;
    const firebase = useContext( FirebaseContext ) ;



    const NoArticle = () => {
    
      return (<Text>Pas d'article</Text>)
    
    }
    


    const getArticle = async () => {

      setLoad( true ) ; 
      const rqArticles = await firebase.getArticleById(id) ;

      setTimeout( () => {

        setArticles( rqArticles.data() ) ;
        setLoad( false ) ;

      }, 500 )

      console.log( rqArticles.data() ) ;

    }

    useEffect( () => {
      
    getArticle() ;
    
    }, [] )
    

    console.log( id )

  return (

    <View>
 
      {/* <Text> {articles.nom} </Text>
      <Text> {articles.prix} </Text>
      <Text> {articles.description} </Text>
      <Text> {articles.état} </Text> */}

      { ( Load == true ) ? <ActivityIndicator/> :

          ( articles == null ) ? <NoArticle/>

          :
          
          <View>
          <Text> {id} </Text>
          <Text> {articles.nom} </Text>
          </View>
        
      }

    </View>

  )
}

export default DetailsArticle

const styles = StyleSheet.create({})