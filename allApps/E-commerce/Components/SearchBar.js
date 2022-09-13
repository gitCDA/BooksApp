import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from '../../../theme/ecommerce/styles'
import Icon from 'react-native-vector-icons/Fontisto'

const SearchBar = () => {
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

        <View style={ styles.carrousselSearchBar}>

        </View>

    </View>
  )
}

export default SearchBar