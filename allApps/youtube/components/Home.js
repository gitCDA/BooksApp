import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Tendance from './Tendance'
import Content from './Content'
import VideosContent from './VideosContent'



const Home = () => {
// const Home = ( {navigation} ) => {                code1
  return (
    <View style={ styles.app }>

    <View>
      {/* <Header navigation={navigation} />          code1   */}

      <Header />
    </View>

    <View style={ styles.tendances }>
      <Tendance/>
    </View>

    <View style={ styles.content }>
      <Content/>
    </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  app: { flex:1, },
  tendances: { flex:1,},
  content: { flex:2.75,},
})