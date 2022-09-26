import { Text, View , FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removePanier } from '../../../redux/action'
import { removeOnePanier } from '../../../redux/action'
import { Button } from '@rneui/themed'
import { styles } from '../../../theme/ecommerce/styles'


  const PanierItem = ( { item } ) => {

    
    const dispatch = useDispatch() ;

    const removeOne = () => {
      console.log('fzepfhzeifhziehfe', item)
      dispatch( removeOnePanier( item ) ) ;
    }
    
    return(
      
      <View style={ styles.contentPanier }>

          <View>
          <Text style={ styles.nomPanier }>
            { item.nom }
          </Text>
          <Text style={ styles.prixPanier }>
            {/* Si un prix est dispo l'afficher */}
            { item?.prix } €
          </Text>
          </View>

          <View style={ styles.removeOnePanier }>
          <Button
            // containerStyle={ styles.removeOne}
            title='Supprimer'
            onPress={ removeOne }
          />
          </View>

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