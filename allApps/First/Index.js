import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { dataApp } from '../../datas/first'
import RenderItem from './components/RenderItem'
import { styles } from './theme/style'

const First = () => {
  return (

        <FlatList
            contentContainerStyle= { styles.flatlist }

            data={dataApp}

            renderItem={ ( {item} ) =>
            <RenderItem item = { item } /> }

            keyExtractor={ (item) => item.id }

            // horizontal
        />
        
  )
}

export default First