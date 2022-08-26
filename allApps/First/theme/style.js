import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const styles = StyleSheet.create({

    content: {
      backgroundColor: colors.primary,
      padding:10,
      margin:10,
      borderRadius:5,
      // alignItems:'center',
    },
  
    titre: {
      color: colors.textPrimary,
      fontSize:25,
      fontWeight:'700',
      alignSelf:'center'
    },
  
    app: {
      paddingHorizontal:15,
      marginBottom:15,
      marginHorizontal:10,
      backgroundColor : 'rgba(70, 155, 245, 0.75)',
      borderRadius : 15,
      flexDirection : 'row',
      height : 85,
    },
  
    flatlist: {
      paddingBottom : '12.5%',
    },
  
    header: {
        flexDirection : 'row',
        alignItems : 'center',
        // justifyContent : 'center',
    },
  
    textHeader: {
        fontSize : 25,
    },
  
    icone: {
    //   backgroundColor : 'red',
      width : '15%',
    },
  
    viewImageNews: {
      justifyContent : 'center',
    },
  
    imageNews: {
      height : 75,
    //   width : 75,
      aspectRatio : 1,
    //   marginTop : 15,
      borderRadius : 55,
      borderWidth : 0.85,
      borderColor : 'black'
    },
  
    imageNews2: {
      height : '75%',
      width : '100%',
      // aspectRatio : 1,
    //   marginTop : 15,
      borderWidth : 0.85,
      borderColor : 'black'
    },
  
    textNews: {
      paddingHorizontal:15,
      color : 'rgba( 255, 255, 255, 1)',
      width : '85%',
    },
  
    textNewsDetails: {
      paddingHorizontal:15,
      color : 'black',
      width : '85%',
      fontSize: 25,
    },
  
    textDescriptionDetails: {
      paddingHorizontal:15,
      color : 'black',
      width : '85%',
      fontSize: 15,
    },
    
  })