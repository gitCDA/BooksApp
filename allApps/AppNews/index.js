import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../First/theme/style'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { news } from '../../datas/news'
import ItemNews from './components/ItemNews'
import { apiNews } from './function/api'

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
    
    // Pour charger les news sur la page
    const initNews = () => { 
        {
            getNews : ([])
            ?
            setNews ( news )
            :
            ""
        }
        }
        
    // Pour aller chercher les news dans l'api
    const initNewsApi = async () => { 
            
        // Chargement de mon api
        const articles = await apiNews(getPage) ;
        setNews( articles ) ;
        // console.log("apiNews")

    }

    // Chargement page suivante
    const nextPage = async () => { 
        
        setPage(
            // {
            // getPage : 10
            // ?
            getPage + 1
            // :
            // getPage = 2
            // }
            ) ;

        const articles = await apiNews(getPage) ;
        setNews( articles ) ;
        console.log( getPage ) ;

    }

    // S'enclenche à chq ouverture de la page
    useEffect(() => { 

        initNewsApi() ;
        
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

        ListHeaderComponent = { 
        <Button
            title="Next"
            onPress={ nextPage }
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        /> }

        ListEmptyComponent = {
            <Text> Il n'y a pas d'actus à voir </Text>
        }

        data={getNews}
        
        renderItem={ ( {item} ) =>
            <ItemNews item = { item } />
        }

        keyExtractor={ (item) => item.id }

        // horizontal
      />

    </View>
  )
}

export default NewsScreen