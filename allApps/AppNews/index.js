import { FlatList, StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../First/theme/style'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { news } from '../../datas/news'
import ItemNews from './components/ItemNews'
import { apiNews } from './function/api'
import RenderEmptyComponent from './components/RenderEmptyComponent'

const NewsScreen = () => {
    
    const navigation = useNavigation() ;
    
    const openApp = () => { 
        // console.log( "openApp", item )
        navigation.goBack()
        // navigation.navigate( 'First' )
    }
    
    const [getNews, setNews] = useState( [] ) ;
    
    // Gestion de la pagination entre les pages
    const [getPage, setPage] = useState( 1 ) ;

    // Variable pour le  waiting avant de recevoir les données
    const  [waiting, setWaiting] = useState( false ) ;
    
    // Pour charger les news sur la page
    const initNews = () => { 
            getNews : ([])
            ?
            setNews ( news )
            :
            ""
        }
        
    // Pour aller chercher les news dans l'api
    const loadNewsApi = async () => { 
            
        // Chargement de mon api
        const articles = await apiNews(getPage) ;
        setWaiting(true) ;
        setTimeout( () => {
                // 
                setNews( [...getNews , ...articles] ) ;
                setWaiting( false ) ;
                    }
                    , 5000 ) ;
        // console.log("apiNews")

    }

    // Chargement page suivante
    const nextPage = async () => { 
        
        setPage(
            // getPage > pageSize
            // ?
            getPage + 1
            // :
            // getPage = 1
            ) ;

        loadNewsApi() ;
        // console.log( getPage ) ;

    }

    // S'enclenche à chq ouverture de la page
    useEffect(() => { 

        setWaiting(true) ;

        loadNewsApi() ;
        
    }, [] )

  return (
    <View>

      <View style= { styles.header }>
        
        <Icone style= { styles.icone }
        name='md-arrow-back-circle' size={55} onPress={ openApp } />

        <Text style= { styles.textHeader }>Liste des News</Text>

      </View>

      <FlatList 
        contentContainerStyle = { styles.flatlist }
        
        data={getNews}
        
        renderItem={ ( {item} ) =>
            <ItemNews item = { item } />
        }

        keyExtractor={ (item, index) => 'key'+index}
        // keyExtractor={ (item) => item.id }

        ListHeaderComponent = { 
        <Button
            title="Next"
            onPress={ nextPage }
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        /> }

        ListEmptyComponent = {
            <RenderEmptyComponent waiting={waiting} /> }
        ListFooterComponent={ ( waiting && getNews.length > 0 ) && <ActivityIndicator/> }

        // horizontal
      />

    </View>
  )
}

export default NewsScreen