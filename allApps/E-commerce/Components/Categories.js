import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../../theme/ecommerce/styles'

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

const Categories = () => {

  const { dataCategorie } = useSelector( state => state ) ;
  console.log( dataCategorie ) ;
    
  return (

    <View style={ styles.contentCategorie } >

      <Text style={ styles.titleCategorie } >Categories</Text>

      <FlatList

        data={ dataCategorie }

        renderItem = { ( {item} ) =>
        // <Text style={ styles.textflat } > { item.nom } </Text>

        <RenderCategories categorie={item} />

        }

        // keyExtractor = { item => item.id }
        keyExtractor = { (item, index) => 'key' + index}

        horizontal
        
      />

    </View>
  )
}

export default Categories