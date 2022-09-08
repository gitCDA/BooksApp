import { ActivityIndicator, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../../firebaseContext';
import Header from '../Components/Header';
import { styled } from '../theme/styleDetails';
import { Image } from '@rneui/base';

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

      }, 0 )

      console.log( rqArticles.data() ) ;

    }

    useEffect( () => {
      
    getArticle() ;
    
    }, [] )
    

    console.log( id )

  return (

    <View style={styled.details}>
 
      {/* <Text> {articles.nom} </Text>
      <Text> {articles.prix} </Text>
      <Text> {articles.description} </Text>
      <Text> {articles.état} </Text> */}

      { ( Load == true ) ? <ActivityIndicator/> :

          ( articles == null ) ? <NoArticle/>

          :
          
          <View>

            <Header/>

            <View style={styled.top}>
              
              <View style={styled.viewimagegch} >

                <Image style={styled.hautimagegch} source={ { uri : articles.image } } />

              </View>










              <View></View>

            </View>





            <View style={styled.bottom}>
            </View>


            <View>
              <Text> {id} </Text>
              <Text> {articles.nom} </Text>
            </View>
            
          </View>
        
      }

    </View>

  )
}

export default DetailsArticle