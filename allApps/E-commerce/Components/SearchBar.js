import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../../theme/ecommerce/styles'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon2 from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore'
import { Image } from '@rneui/themed'

const SearchBar = () => {
  
const [logo, setLogo] = useState([]) ;
console.log( '258', logo ) ;
  
  useEffect( () => {
    
    firestore().collection('Illustrations')
    .onSnapshot(
      capture => {
        let imageLogo = [] ;
        capture.forEach( document => {
        imageLogo = { id: document.id, ...document.data() }  ;
        setLogo( imageLogo ) ;
        console.log( '12345', imageLogo ) ;
        })
      }
      ) ;
      
    }, [] ) ;
    
  return (
    
    <View style={styles.contentSearchBar}>
        
      <View style={ styles.iconeSearchBar}>
        <Icon name="search" size={20} color="#000" />
          <TextInput
            style={styles.inputSearchBar}
            placeholder="Search for product"
            keyboardType='default'
            // onChangeText={onChangeNumber}
            // value={number}
            />
      </View>
      <View style={ styles.iconeSearchBar2}>
        <Icon2 name="align-center" size={27.5} color="#000" />
      </View>

      { console.log('rrrd',  logo.image) }
    
      <Image containerStyle={ styles.imageDuLogo } source={ { uri : logo.image } } />

    </View>
  )
}

export default SearchBar