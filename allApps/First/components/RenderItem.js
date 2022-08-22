import { Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/style'

const RenderItem = ( {item} ) => {
  return (
    <View style={ styles.content }>
      <Text style={ styles.titre }> {item.titre} </Text>
    </View>
  )
}

export default RenderItem