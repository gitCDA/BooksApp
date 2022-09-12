import { Text, View } from 'react-native'
import { styles } from '../../../theme/ecommerce/styles'
import React from 'react'
import Categories from '../Components/Categories'
import Articles from '../Components/Articles'

const Home = () => {
  return (
    <View style={ styles.content }>
      <Categories />
      <Articles />
    </View>
  )
}

export default Home