import Header from './Header'
import { styled } from '../theme/styleDetails';
import { ActivityIndicator, Button, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../../firebaseContext';
import { Image } from '@rneui/base';
import { useDispatch } from 'react-redux';
import { addPanier } from '../../../redux/action';

const ArticleDetail = ( {articles} ) => {

    const dispatch = useDispatch() ;

    const ajouter = () => {

        dispatch( addPanier( articles ) ) ;
        console.log( articles ) ;

    }

  return (

    <View>
    <Header/>


    <View style={styled.top}>
      
      <View style={styled.viewimagegch} >

        <Image style={styled.hautimagegch} source={ { uri : articles.image } } />
        <Button
        title='Ajouter au panier'
        onPress={ ajouter }
        />

      </View>


      <View>

      </View>


    </View>





    <View style={styled.bottom}>
    </View>

    
    <View>
      <Text> {id} </Text>
      <Text> {articles.nom} </Text>
    </View>
   
    
  </View>
  )

}


export default ArticleDetail