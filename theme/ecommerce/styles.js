import { StyleSheet, Dimensions } from "react-native"

import { colors } from "./colors"

const {hauteur} = Dimensions.get('window').height ;
const {largeur} = Dimensions.get('window').width ;

export const styles = StyleSheet.create({

/******** Home */
    content:{
        flex:1,
        backgroundColor:'rgba(255,255,255,1)',
        paddingTop: 10,
        paddingHorizontal:10,
    },
/******** Fin Home */
    



/********* Catégories */
    contentCategorie: {
        flex:2,
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
        backgroundColor: 'rgba(25,25,25,0.8)',
        borderWidth:1.5,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        justifyContent:'center',
        alignItems:'center',
        height: ( Dimensions.get('window').height * 0.115 ),
        aspectRatio:1,
        marginLeft: 7.5,
    },
    
    imageArticleIcone: {
        height: ( Dimensions.get('window').height * 0.05 ),
        aspectRatio:1,
    },
    
    touchCategorie2: {
        height: ( Dimensions.get('window').height * 0.04 ),
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
        height: ( Dimensions.get('window').height * 0.075 ),
        // justifyContent:'center',
        // alignItems:'center',
        margin: 7.5,
    },
    
    touchCategorieArticle2: {
        height: ( Dimensions.get('window').height * 0.175 ),
    },
/**********Fin Catégorie */




/********** Articles */

contentArticle: {
    flex:9,
    alignItems:'center',
},

titleArticle: {
    fontSize : 20,
    fontWeight : '500',
},

textArticle: {
    textAlign:'center',
    backgroundColor: 'rgba(200,135,25,1)',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    color:"#fff",
},

touchArticle: {
    borderRadius: 10,
    marginHorizontal: 10,
    height: ( Dimensions.get('window').height * 0.15 ),
    aspectRatio:1.5,
    marginTop:15,
    marginBottom:35,
    backgroundColor:'red',
},

touchArticle2: {
    height: ( Dimensions.get('window').height * 0.05 ),
},

imageArticle: {
    height:'100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
},
/********** Fin Articles */




/*********** SearchBar */
contentSearchBar:{
    flex:1,
    alignItems:'center',
    marginHorizontal:10,
},

SearchBar:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width:'100%',
    aspectRatio:7,
    
},

iconeSearchBar:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:0.5,
    backgroundColor:'rgba(240,241,242,0.5)',
    borderRadius:7.5,
    paddingLeft:10,
    // height:'75%',
},

iconeSearchBar2:{
    flexDirection: 'row',
},

inputSearchBar:{
    width:'75%',
    aspectRatio:5,
},

imageDuLogoView:{
    alignItems:'center',
},

imageDuLogo:{
    width:'95%',
    aspectRatio:3.5,
    borderRadius:10,
    marginTop:7.5,
    opacity:0.75,
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
    // marginTop:0.5,
},

itemimageHeaderDetail:{
    height:'100%',
    aspectRatio: 4.5,
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