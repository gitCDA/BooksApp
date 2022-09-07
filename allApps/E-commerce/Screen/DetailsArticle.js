import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../../firebaseContext';

const DetailsArticle = ( {route} ) => {

    // Pour récupérer les données dans détails
    const {id} = route.params ;
    // const {articles} = route.params ;

    const [articles, setArticles] = useState() ;
    const firebase = useContext( FirebaseContext ) ;

    const getArticle = async () => {

      const rqArticles = await firebase.getArticleById(id) ;
      console.log(rqArticles)

    }

    useEffect( () => {
      
    getArticle() ;
    
    }, [] )
    

    console.log( id )

  return (

    <View>
 
      <Text> {id} </Text>
      {/* <Text> {articles.nom} </Text>
      <Text> {articles.prix} </Text>
      <Text> {articles.description} </Text>

      <Text> {articles.état} </Text> */}

      <Text>jfpzerhgipzhgpm</Text>

    </View>

  )
}

export default DetailsArticle

const styles = StyleSheet.create({})