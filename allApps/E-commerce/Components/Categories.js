import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../../theme/ecommerce/styles'
import { Icon } from 'react-native-vector-icons/Icon'
import { Icon2 } from 'react-native-vector-icons/Icon'
import { Icon3 } from 'react-native-vector-icons/Icon'
import { Icon4 } from 'react-native-vector-icons/Icon'

// const data = [ 
//     { id:1, nom:"cat1" },
//     { id:2, nom:"cat2" },
//     { id:3, nom:"cat3" },
//     { id:4, nom:"cat4" },
// ]


const RenderCategories = ( {categorie} ) => {
    
    return (
        <TouchableOpacity style={ styles.touchCategorie } >
          <Text style={ styles.textCategorie } >
              { categorie.nom }
          </Text>
        </TouchableOpacity>
    )
    
}



const RenderArticles = ( {article} ) => {
    
    return (
        <TouchableOpacity style={ styles.touchCategorieArticle } >
            <Text style={ styles.textCategorieArticle } >
                { article.nom }
            </Text>
        </TouchableOpacity>
    )
    
}

const Categories = () => {

  const { dataCategorie } = useSelector( state => state ) ;
  console.log( dataCategorie ) ;

  const { dataArticle } = useSelector( state => state ) ;
    
  return (

    <View style={ styles.contentCategorie } >

      <Text style={ styles.titleCategorie } >Categories</Text>

      <FlatList

        data={ dataCategorie }

        style={ styles.touchCategorie2 }

        renderItem = { ( {item} ) =>
        // <Text style={ styles.textflat } > { item.nom } </Text>

        <RenderCategories categorie={item} /> }

        // keyExtractor = { item => item.id }
        keyExtractor = { (item, index) => 'key' + index}

        horizontal
        
      />

      <Text style={ styles.titleCategorieArticle } >Categories</Text>

      <FlatList 

        data={ dataArticle }

        style={ styles.touchCategorieArticle2 }

        renderItem = { ( {item} ) =>

        <RenderArticles article={item} /> }

        keyExtractor = { (item, index) => 'key' + index}
      />

    </View>
  )
}

export default Categories