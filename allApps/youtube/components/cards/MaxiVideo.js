import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MaxiVideo = ({item}) => {
  return (
    <View>
      <Text style={styles.block}>{item.titre}</Text>
    </View>
  )
}

export default MaxiVideo

const styles = StyleSheet.create({
    block:{
        height:205,
        backgroundColor:'rgba(108, 223, 244, 0.8)',
        margin:20,
        borderRadius:10
    }
})