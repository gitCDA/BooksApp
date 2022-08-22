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
      paddingHorizontal:25,
      paddingVertical:55,
      
    },
    
  })