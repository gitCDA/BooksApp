import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../../theme/ecommerce/styles'
import { Image } from '@rneui/base'


// const data = [ 
//     { id:1, nom:"cat1" },
//     { id:2, nom:"cat2" },
//     { id:3, nom:"cat3" },
//     { id:4, nom:"cat4" },
// ]

const RenderArticles = ( {articles} ) => {

    const navigation = useNavigation() ;

    const AllerVersDetails = () => {
        navigation.navigate( 'Detail', { id: articles.id } )
    }
    
    return (
        <TouchableOpacity
          style={ styles.touchArticle }
          onPress={ AllerVersDetails }
        >

          <Image
            style={ styles.imageArticle }
            source={ { uri : articles.image } }
          />
          <Text style={ styles.textArticle } >
              { articles.nom }
          </Text>
            
        </TouchableOpacity>
    )
    
}

const Articles = () => {

//   Récupère les datas dans le state
  const { dataArticle } = useSelector( state => state ) ;
  console.log( dataArticle )
    
  return (

    <View style={ styles.contentArticle }>

      <Text style={ styles.titleArticle } >Articles</Text>

      <View>

        <FlatList

          data={ dataArticle }

          horizontal={true}
          // numColumns = {2}
          // showsHorizontalScrollIndicator={false}

          renderItem = { ( {item} ) =>
          // <Text style={ styles.textflat } > { item.nom } </Text>
          <RenderArticles articles={item} />
          }

          
          // keyExtractor = { item => item.id }
          keyExtractor = { (item, index) => 'key' + index}
          
        />

      </View>

    </View>
  )
}

export default Articles