import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

// Composant permettant d'enclencher l'Activity Indicator

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
        // height:'100%',
        backgroundColor:'red',
        // textAlign:'center',
    },

    view:{
        // flex : 1,
        // height:570,
        // alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'red',
    }
})