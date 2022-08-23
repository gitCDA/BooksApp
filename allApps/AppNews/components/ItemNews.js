import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../First/theme/style'

const ItemNews = ( {item} ) => {
  return (

    <View style={ styles.app }>

        <View style={ styles.viewImageNews }>
        <Image source={ item.image } style={ styles.imageNews }>
            
        </Image>
        </View>
        
        <Text style={ styles.textNews }>{ item.titre }</Text>

    </View>
  )
}

export default ItemNews