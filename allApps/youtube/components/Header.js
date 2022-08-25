import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import  Icone from "react-native-vector-icons/Entypo"
import Icone2 from "react-native-vector-icons/Fontisto"
import { useNavigation } from '@react-navigation/native';
import { Input } from '@rneui/themed';

const Header = () => {
// const Header = ( {navigation} ) => {          code1
    
    const navigation = useNavigation();

    const goto = () => {
        
        // console.log("first", navigation)
        navigation.navigate('Home')
    
    }

  return (
    
    <View style={styles.header}>

        <TouchableOpacity style={styles.viewheader} onPress={ goto }>
            <Icone name='youtube' size={35} color='white' />
            <Text style={styles.textheader}>Youtube</Text>
        </TouchableOpacity>

        <Icone2 name='search' size={25} color='white'
         style={styles.icone2}
        //  onPress={ }
         />

        {/* <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        /> */}

    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:55,
        backgroundColor:'rgba(255, 55, 55, 1)',
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
    },

    viewheader:{
        flexDirection:"row",
        padding:5,
    },

    icone2:{
        flexDirection:"row",
        padding:10,
    },

    textheader:{
        flexDirection:"row",
        padding:5,
        fontSize:20,
        fontStyle:"italic",
        color:'white'
    },
    
})