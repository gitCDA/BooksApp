import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removePanier } from '../../../redux/action'
import { removeOnePanier } from '../../../redux/action'
import { Button } from '@rneui/themed'


  const PanierItem = ( { item } ) => {

    
    const dispatch = useDispatch() ;
    const removeOne = () => {
      dispatch( removeOnePanier( item ) ) ;
    }
    
    return(
      
      <View style={ styles.contentPanier }>

          <Text style={ styles.nom }>
            { item.nom }
          </Text>

          <Text style={ styles.prix }>
            { item?.prix } €
          </Text>

          <Button
            containerStyle={ styles.removeOne}
            title='Supprimer'
            onPress={ removeOne }
          />

        </View>

)

}

const Panier = () => {
  const {dataPanier} =  useSelector( state => state ) ;
  const dispatch = useDispatch() ;
  console.log('data :', dataPanier) ;

  const remove = () => {

    dispatch( removePanier() )
    console.log( dataPanier )

  }

  return (
    
    <View>
      
      <FlatList

        data={dataPanier}
        
        renderItem = { ( { item } ) => <PanierItem item={item}/> }

        keyExtractor={ item => item.id }

      />

      <Button
        title='Vider le panier'
        onPress={ remove }
      />
    
    </View>

  )

}

export default Panier

const styles = StyleSheet.create({

  contentPanier: {
    width:'95%',
    height:100,
    backgroundColor:'red',
    margin:10,
    padding:5,
    borderRadius:10,
    justifyContent:'space-between',
    // alignItems:'center',
  },

  nom: {
    color:'white',
    fontSize:25,
  },

  prix: {
    color:'black',
  },

  removeOne: {
    // height:35,
    width: 155,
    backgroundColor:'green'

  },
})