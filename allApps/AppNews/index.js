import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from '../First/theme/style'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { news } from '../../datas/news'
import ItemNews from './components/ItemNews'

const NewsScreen = () => {

  const navigation = useNavigation() ;

  const openApp = () => { 
    // console.log( "openApp", item )
    // navigation.goBack()
    navigation.navigate( 'First' )
  }

  return (
    <View>
      <Icone name='md-arrow-back-circle' size={55} onPress={ openApp } />
      

      <FlatList 
        contentContainerStyle= { styles.flatlist }

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