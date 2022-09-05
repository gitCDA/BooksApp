import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../First/theme/style'
import { useNavigation } from '@react-navigation/native'

const ItemNews = ( { item } ) => {

    const navigation = useNavigation();

    const detailsNews = () => { 
        navigation.navigate( 'Details', { item } )
    }

  return (

    <TouchableOpacity
    onPress={ detailsNews }
     style={ styles.app }
    >

      <View>

        <View style={ styles.viewImageNews }>
        <Image source={ { uri : item.image } } style={ styles.imageNews }>
            
        </Image>
        </View>
        
        <Text style={ styles.textNews }>{ item.title }</Text>

      </View>

    </TouchableOpacity>

  )
}

export default ItemNews