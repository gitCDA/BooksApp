import { StyleSheet } from "react-native"

import { colors } from "./colors"

export const styles = StyleSheet.create({

/******** Home */
    content:{
        flex : 1,
        backgroundColor : colors.BgColorPrimary,
        // margin : 10,
        paddingTop: 10,
        paddingHorizontal:10,
    },
/******** Fin Home */
    



/********* Catégories */
    // contentCategorie: {
    //     flex : 1,
    //     width : '100%',
    // },
    
    titleCategorie: {
        fontSize : 25,
        fontWeight : '500',
    },
    
    textCategorie: {
        color:"#fff",
        width : 105,
        textAlign:'center',
    },
    
    touchCategorie: {
        backgroundColor: 'blue',
        borderRadius: 25,
        justifyContent:'center',
        height: 35,
        margin: 7.5,
    },
/**********Fin Catégorie */




/********** Articles */
contentArticle: {
},

titleArticle: {
    fontSize : 25,
    fontWeight : '500',
},

textArticle: {
    color:"#fff",
},

touchArticle: {
    height: 200,
    width : 150,
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 15,
    marginTop : 15,
},
/********** Fin Articles */




/*********** Header */
header:{
    height:55,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    paddingHorizontal:15,
    marginTop:0.5,
},

itemimageHeader:{
    flex:1,
    height:'100%',
    aspectRatio: 4.5,
},
/*********** Fin Header */




/*********** Panier */
contentPanier: {
    width:'95%',
    height:100,
    backgroundColor:'red',
    margin:10,
    padding:15,
    borderRadius:10,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
  },

  nomPanier: {
    color:'white',
    fontSize:25,
  },

  prixPanier: {
    color:'black',
  },

  removeOnePanier: {
    // height:35,
    width:'35%',

  },
/*********** Fin Panier */




/*********** Details */
details:{
    flex:1,
    // backgroundColor:'green',
},

topDetailsDetails:{
    // flex:1,
},

viewimagegchDetails:{
    height:255,
    width:255,
},

hautimagegchDetails:{
    height:95,
    width:200,
    // backgroundColor:'red',
},

bottomDetails:{
    // flex:1.5,
    backgroundColor:'blue',
},
/*********** Fin Details */






/*********** Settings */

/*********** Fin Settings */
})