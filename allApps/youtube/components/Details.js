import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import  Icone from "react-native-vector-icons/Feather"
import  Icone2 from "react-native-vector-icons/Ionicons"
import  Icone3 from "react-native-vector-icons/Octicons"
import  Icone4 from "react-native-vector-icons/SimpleLineIcons"
import  Icone5 from "react-native-vector-icons/Entypo"
import Header from './Header'

const Details = ( { route } ) => {

  // Pour récupérer les données à partir de Home
  const { item } = route.params;
  console.log( item )

  return (
    <View>

      <Header></Header>
      
      <Image
        style={styles.image}
        source={ item.image }
      />

      {/* Texte et icônes */}
      <View style={styles.viewtext}>
        <Text style={styles.text}>{ item.titre }</Text>
        <Icone4 name='arrow-down' size={15} color='black' />
      </View>

      <View style={styles.text2}>
        <Text>Nombre de vues</Text>
        <Icone5 style={styles.iconetext} name='dot-single' size={15} />
        <Text>{ item.date }</Text>
      </View>

      <View style={styles.icones}>
        
        <View style={styles.viewicones}>
          <Icone name='thumbs-up' size={25} color='black' />
          <Text style={{ paddingTop:5, color:'black', fontSize:15 }}>I ka working</Text>
        </View>

        <View style={styles.viewicones}>
          <Icone name='thumbs-down' size={25} color='black' />
          <Text style={{ paddingTop:5, color:'black' }}>I pa ka working</Text>
        </View>

        <View style={styles.viewicones}>
          <Icone2 style={styles.icone2} name='ios-arrow-redo-outline' size={35} color='black' />
          <Text style={{ color:'black' }}>Partager</Text>
        </View>

        <View style={styles.viewicones}>
          <Icone3 name='diff-added' size={25} color='black' />
          <Text style={{ paddingTop:5, color:'black' }}>Enregistrer</Text>
        </View>

      </View>

      {/* Chaîne Youtube */}
      <View style={styles.viewchannel}>

        <View style={styles.photochannel}>
          <Image
            style={{ borderRadius:55, height:35, width:35, }}
            source={ item.image }>
          </Image>
          <View style={styles.channel}>
          <Text style={styles.userchannel}>Nom de l'utilisateur</Text>
          <Text>Nombre d'abonnés</Text>
          </View>
        </View>

        <Text style={styles.channel2}>S'ABONNER</Text>
      </View>

      {/* Commentaires */}
      <View style={styles.comms}>
        <Text>Commentaires</Text>
        <View style={styles.iconecomms}>
        <Icone4 name='arrow-up' size={10} color='black' />
        <Icone4 name='arrow-down' size={10} color='black' />
        </View>
      </View>

      <View style={styles.comms2}>

        <View style={styles.commentateur}>
          <ImageBackground
            imageStyle={{ borderRadius:55, height:35, width:35, }}
            source={ item.image }>
          </ImageBackground>
        </View>

        <Text style={styles.textcommentateur}>Laboris deserunt cupidatat ipsum sit fugiat ipsum quis adipisicing enim Lorem.</Text>
      
      </View>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  image:{
    height:'55%',
    width:'100%',
  },

  viewtext:{
    paddingTop:10,
    flexDirection:'row',
    paddingHorizontal:15,
    justifyContent:'space-between',
  },

  text:{
    fontSize:20,
    fontWeight:'400',
    color:'black',
  },

  text2:{
    paddingHorizontal:15,
    flexDirection:'row',
  },

  iconetext:{
    marginTop:2.5
  },

  icones:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:30,
    alignContent:'flex-start',
    paddingVertical:15,
  },

  viewicones:{
    justifyContent:'center',
    alignItems:'center',
  },

  icone2:{
    marginTop:-7.5,
  },

  viewchannel:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    height:55
  },

  photochannel:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  channel:{
    fontSize:15,
    fontWeight:'500',
    color:'black',
    padding:10,
  },

  userchannel:{
    fontSize:15,
    fontWeight:'500',
    color:'black',
  },

  channel2:{
    fontSize:15,
    fontWeight:'500',
    color:'red',
    alignItems:'center',
  },

  comms:{
    fontSize:15,
    paddingHorizontal:15,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:5,
  },

  comms2:{
    flexDirection:'row',
    paddingHorizontal:15,
    paddingTop:10,
    alignItems:'center',
  },

  commentateur:{
    borderRadius:55,
    height:30,
    width:30,
  },

  textcommentateur:{
    paddingHorizontal:15,
  },
})