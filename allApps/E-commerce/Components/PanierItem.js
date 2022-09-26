import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Button, Avatar } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { removeOnePanier } from '../../../redux/action'


const PanierItem = ( { item } ) => {

    
    const dispatch = useDispatch() ;
  
    const removeOne = () => {
      console.log('fzepfhzeifhziehfe', item)
      dispatch( removeOnePanier( item ) ) ;
    }
    
    return(
      
      <View style={ styles.contentPanier }>

        <ListItem.Swipeable

            rightContent={(removeOnePanier) => (
                <Button
                title="Delete"
                onPress={() => removeOnePanier( item )}
                buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                // icon={{ name: 'delete', color: 'white' }}
                />
            )}
        >
            
            <Avatar title={item.nom[0]} source={{ uri: item.image }} />
            
            <ListItem.Content>
                <ListItem.Title> {item.nom} </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
            
        </ListItem.Swipeable>
  
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

export default PanierItem

const styles = StyleSheet.create({})