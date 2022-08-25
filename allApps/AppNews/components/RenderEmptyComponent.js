import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const RenderEmptyComponent = ( { waiting } ) => {
  return (
    <View style={styles.view}>
      {
        waiting
        ?
        <ActivityIndicator/>
        :
        <Text style={styles.content}> Il n'y a pas d'actus à voir </Text>
      } 
    </View>
  )
}

export default RenderEmptyComponent

const styles = StyleSheet.create({
    content:{
        height:'100%',
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:'red'
    },

    view:{
        flex:1,
    }
})