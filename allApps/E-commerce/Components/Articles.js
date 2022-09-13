import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Detail from '../Screen/Detail'
import { styles } from '../../../theme/ecommerce/styles'


// const data = [ 
//     { id:1, nom:"cat1" },
//     { id:2, nom:"cat2" },
//     { id:3, nom:"cat3" },
//     { id:4, nom:"cat4" },
// ]

const RenderArticles = ( {articles} ) => {

    const navigation = useNavigation() ;

    const AllerVersDetails = () => {
        navigation.navigate( 'DetailsArticle', { id: articles.id } )
    }
    
    return (
        <TouchableOpacity
        style={ styles.touchArticle }
        onPress={ AllerVersDetails }
        >
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

    <View>

      <Text style={ styles.titleArticle } >Articles</Text>

      <View style={ styles.contentArticle }>

        <FlatList

          data={ dataArticle }

          horizontal={false}

          numColumns = {2}

          renderItem = { ( {item} ) =>
          // <Text style={ styles.textflat } > { item.nom } </Text>
          <RenderArticles articles={item} />
          }

          showsHorizontalScrollIndicator={false}
          
          // keyExtractor = { item => item.id }
          keyExtractor = { (item, index) => 'key' + index}
          
        />

      </View>

    </View>
  )
}

export default Articles