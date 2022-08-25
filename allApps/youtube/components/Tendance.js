import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MiniCards from './cards/MiniCards'
import { videos } from '../constante/videos'
import  Icone from "react-native-vector-icons/FontAwesome"

const Tendance = () => {
  return (

    <View style={styles.tendances}>
      
      <View style={styles.tendances2}>
      <Text style={styles.tendanceText}>Tendances sur</Text>
      <Icone name='youtube' size={27.5} color='black' />
      </View>

      <FlatList
      
      contentContainerStyle= { styles.flatlisttendances}

      horizontal
      
      data={ videos.filter( item => item.tendance==true ) }
      
      // data={videos} pour prendre toutes les videos

      renderItem={ ({item}) => <MiniCards item = { item } />}

      keyExtractor={(item) => item.id}

      />
      
    </View>

  )
}

export default Tendance

const styles = StyleSheet.create({

  tendances:{
    flex:1,
    // backgroundColor:'rgba(210, 2, 119, 0.2)',
    // alignItems:'center',
  },
  
  tendances2:{
    flexDirection:"row",
    paddingVertical:10,
    paddingHorizontal:5,
  },
  
  flatlisttendances:{
    paddingHorizontal:5,
    borderRadius:15
  },
  
  tendanceText:{
    // textAlign:'center',
    fontSize:14,
    color:'black',
    fontStyle:'italic',
    fontWeight:'500',
    margin:5,
  },

})