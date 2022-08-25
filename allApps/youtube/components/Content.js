import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MiniCards from './cards/MiniCards'
import MaxiCards from './cards/MaxiCards'
import MaxiVideo from './cards/MaxiVideo'
import { categories } from '../constante/categories'
import { videos } from '../constante/videos'
import Icone from "react-native-vector-icons/AntDesign"


const Content = () => {

  const [getVideos , setVideos] = useState(videos) ;

  // const filtre = (id) => {
  //   videos.filter( item => item.id == id )
  // }

  // console.log(filtre)

  const filtreVideos = (id) => { 
  // Filtrer les vidéos selon la catégorie

    // console.log( id )
    setVideos ( videos.filter( item => item.categoriesId == id ) )
  }

  const filtreVideosà0 = () => { 
  // Réafficher toutes les vidéos
    setVideos ( videos )
  }

  
  // const ajouter = (getVideos) => {
  //   // Fonction nfn pour AJOUTER avec un bouton
  //       // raccourci = clg
  //       console.log(getVideos)

  //       if (getVideos!="") {
  //           setTask ([ ...getVideos,
  //               {id : getVideos.length + 1,
  //               categoriesId: ,
  //               titre:"bienvenue",
  //               description:"bla bla",
  //               image:require('../images/1.jpeg'),
  //               tendance:0,
  //               date:"12/02/2022",}
  //           ])
  //           // Remise à zéro du texte de l'input
  //           // setText("")
  //       }        
  // }

  return (
  <View style={styles.content}>

    <View style={styles.categorycontent}>
    <TouchableOpacity onPress={ filtreVideosà0 }>
      <Text style={styles.textcontent}>Catégories</Text>
    </TouchableOpacity>
    <Icone name='pluscircleo' size={25} color='black' />
    </View>

    <FlatList
      contentContainerStyle= { styles.flatlisttendances }

      data={categories}

      renderItem={ ({item}) =>
      <MaxiCards type='categories' item = { item } filtreVideos={filtreVideos} /> }

      keyExtractor={ (item) => item.id }

      horizontal
    />

    <FlatList
      contentContainerStyle= { styles.flatlisttendances2 } 

      // horizontal

      data={getVideos}

      renderItem={ ({item}) => <MaxiCards item = { item } /> }

      keyExtractor={(item) => item.id}
    />

  </View>
  )
}

export default Content

const styles = StyleSheet.create({

  content:{
    // flex:1,
    // backgroundColor:'rgba(55, 245, 39, 0.5)',
  },

  categorycontent:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    padding:10,
  },

  textcontent:{
    // textAlign:"center",
    // paddingHorizontal:10,
    color:'black',
    fontSize:15,
    fontWeight:'500',
    fontStyle:"italic",
    // marginVertical:5
  },

  // flatlisttendances:{
  //   flex:2,
  // },

  // flatlisttendances2:{
  //   flex:3,
  // },

})