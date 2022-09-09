import { ActivityIndicator, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../../firebaseContext';
import Header from '../Components/Header';
import { styled } from '../theme/styleDetails';
import { Image } from '@rneui/base';
import ArticleDetail from '../Components/ArticleDetail';

const Detail = ( {route} ) => {

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

      }, 0 )

      console.log( "greiperpger", articles ) ;
      // console.log( "greiperpger", rqArticles.data() ) ;

    }

    useEffect( () => {
      
    getArticle() ;
    
    }, [] )
    

    console.log( id )

  return (

    <View style={styled.details}>
 


      { ( Load == true ) ? <ActivityIndicator/> :

        ( articles == null ) ? <NoArticle/>

        :
        
        <ArticleDetail articles={articles}/>

      }

    </View>

  )
}

export default Detail