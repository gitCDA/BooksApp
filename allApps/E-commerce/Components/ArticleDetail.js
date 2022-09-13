import HeaderDetail from './HeaderDetail'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../../firebaseContext';
import { Image } from '@rneui/base';
import { useDispatch } from 'react-redux';
import { addPanier } from '../../../redux/action';
import { styles } from '../../../theme/ecommerce/styles';

const ArticleDetail = ( {articles} ) => {

    const dispatch = useDispatch() ;

    const ajouter = () => {

        dispatch( addPanier( articles ) ) ;
        console.log( articles ) ;

    }

  return (

    <View>
    <HeaderDetail/>


    <View style={styles.topDetails}>
      
      <View style={styles.viewimagegchDetails} >

        <Image style={styles.hautimagegchDetails}
        source={ { uri : articles.image } }
        // PlaceholderContent={<ActivityIndicator/>}
        />
        <Button
        title='Ajouter au panier'
        onPress={ ajouter }
        />

      </View>


      <View>

      </View>


    </View>





    <View style={styles.bottomDetails}>
    </View>

    
    <View>
      <Text> { articles.id } </Text>
      <Text> { articles.nom } </Text>
    </View>
   
    
  </View>
  )

}


export default ArticleDetail