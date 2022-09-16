import { Text, View } from 'react-native'
import { styles } from '../../../theme/ecommerce/styles'
import React from 'react'
import Categories from '../Components/Categories'
import Articles from '../Components/Articles'
import SearchBar from '../Components/SearchBar'

const Home = () => {
  return (
    <View style={ styles.content }>
      <SearchBar />
      <Articles />
      <Categories />
    </View>
  )
}

export default Home