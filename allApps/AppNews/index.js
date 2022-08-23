import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { styles } from '../First/theme/style'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { news } from '../../datas/news'
import ItemNews from './components/ItemNews'
import { useState } from 'react'

const NewsScreen = () => {
    
    const navigation = useNavigation() ;
    
    const openApp = () => { 
        // console.log( "openApp", item )
        navigation.goBack()
        // navigation.navigate( 'First' )
    }
    
    const [getNews, setNews] = useState( [] ) ;
    
    const initNews = () => { 
        setNews ( [] )
    }

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
            onPress={ initNews }
            title="Init News"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        /> }

        ListEmptyComponent = {
            <Text> Il n'y a pas d'actus à voir </Text>
        }

        data={news}
        
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