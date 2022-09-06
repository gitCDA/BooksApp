import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../First/theme/style'

const Details = ( { route } ) => {

    // Pour récupérer les données à partir de ItemNews
        const {item} = route.params;
        console.log( item )

  return (

    <View>
      
      <Image
          style={styles.imageNews2}
          source={ { uri : item.image } }
      />

      <View style={ styles.viewTextDetails1 }>
      <Text style={ styles.textNewsDetails }>{ item.title }</Text>
      <Text style={ styles.textNewsDetails }>{ item.publishedAt }</Text>
      </View>

      <Text style={ styles.textSourceDetails }>{ item.source }</Text>


      <Text style={ styles.textDescriptionDetails }>{ item.description }</Text>

    </View>

  )
}

export default Details