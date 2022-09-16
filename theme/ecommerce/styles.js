import { get } from "immer/dist/internal"
import { StyleSheet, Dimensions } from "react-native"

import { colors } from "./colors"

const {hauteur} = Dimensions.get('window').height ;
const {largeur} = Dimensions.get('window').width ;

export const styles = StyleSheet.create({

/******** Home */
    content:{
        flex:1,
        paddingTop: 10,
        paddingHorizontal:10,
    },
/******** Fin Home */
    



/********* Catégories */
    contentCategorie: {
        flex:4,
        // backgroundColor:'green',
    },
    
    titleCategorie: {
        fontSize : 15,
        fontWeight : '500',
    },
    
    textCategorie: {
        color:"#fff",
        textAlign:'center',
    },
    
    touchCategorie: {
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        height: 85,
        aspectRatio:1,
        margin: 7.5,
    },
    
    titleCategorieArticle: {
        fontSize : 15,
        fontWeight : '500',
    },
    
    textCategorieArticle: {
        color:"#fff",
        textAlign:'center',
    },
    
    touchCategorieArticle: {
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        // height: 55,
        margin: 7.5,
    },
/**********Fin Catégorie */




/********** Articles */
titleArticle: {
    fontSize : 20,
    fontWeight : '500',
},

textArticle: {
    color:"#fff",
    alignSelf:'auto',
},

touchArticle: {
    backgroundColor: 'orange',
    borderRadius: 10,
    marginHorizontal: 10,
    // height:'70%',
    width:55,
    marginTop : 7.5,
},

contentArticle: {
    flex:2,
    alignItems:'center',
    marginBottom:7.5,
    backgroundColor:'blue',
},

imageArticle: {
    height:'90%',
    width:'100%',
    borderRadius:10,
},
/********** Fin Articles */




/*********** SearchBar */
contentSearchBar:{
    flex:2,
    marginTop:7.5,
    justifyContent:'space-between',
    marginBottom:7.5,
    backgroundColor:'red',
},

SearchBar:{
    backgroundColor:'red',
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:'rgba(240,241,242,1)',
    alignItems: 'center',
    marginHorizontal:10,
},

iconeSearchBar:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:1,
    backgroundColor:'rgba(240,241,242,1)',
    borderRadius:5,
    paddingLeft:10,
    // height:'85%',
},

iconeSearchBar2:{
    flexDirection: 'row',
    alignSelf: 'center',
},

inputSearchBar:{
    // width:'90%',
},

imageDuLogoView:{
    
},

imageDuLogo:{
    height:'55%',
    width:'95%',
    borderRadius:10,
    alignSelf:'center',
    marginTop:15,
},
/*********** Fin SearchBar */




/*********** Header */
header:{
    // height:55,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    // marginTop:0.5,
    // backgroundColor:'lime'
},

itemimageHeader:{
    // flex:1,
    // height:'100%',
    // aspectRatio: 4.5,
},
/*********** Fin Header */




/*********** HeaderDetail */
headerDetail:{
    height:55,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    paddingHorizontal:15,
    marginTop:0.5,
},

itemimageHeaderDetail:{
    flex:1,
    height:'100%',
    aspectRatio: 4.5,
    // resizeMode
},
/*********** Fin HeaderDetail */




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