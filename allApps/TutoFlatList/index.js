import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Icone from 'react-native-vector-icons/Ionicons'
import { styles } from '../First/theme/style'
import { useNavigation } from '@react-navigation/native'

const Tuto = () => {

    const navigation = useNavigation();
        
    const openApp = () => { 
        navigation.goBack()
    }

//   getNombres c'est le tableau en l'état
  const [getNombres, setNombres] = useState( [1,2,3,4,5,6,7,8,9,10] )

// Ajouter des nombres en fct° des précédents
  const AddNombres = (  ) => { 

    const tempNombres = [ ...getNombres, getNombres.length + 1 ]
    setNombres( tempNombres )

  }

  return (

    <View>

    <View style= { styles.header }>
        
    <Icone style= { styles.icone }
    name='md-arrow-back-circle' size={55} onPress={ openApp } />

  </View>

    <FlatList
        
        ListHeaderComponent={ <Button
            title='Add'
            onPress={ AddNombres }
        />}
        data={ getNombres }
        
        renderItem = { ( {item} ) =>
        <Text> {item} </Text> }

        // Attribut une clé à chq éléments du tableau
        keyExtractor = { item => item }

        // onEndReached = { AddNombres }

        // onEndReachedThreshold = {0.2}
    
    />

    </View>

  )
}

export default Tuto