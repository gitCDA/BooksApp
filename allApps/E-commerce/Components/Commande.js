import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { ListItem, Icon, Avatar } from '@rneui/themed'
import firestore from '@react-native-firebase/firestore'

const ItemCommande = ( { item } ) => {

    return (
    
    <ListItem bottomDivider>

        <Icon name='av-timer' />

        <ListItem.Content>

        <ListItem.Title> { item.total } €</ListItem.Title>

        </ListItem.Content>

        <ListItem.Chevron />

    </ListItem>
    
    ) ;

}


const Commande = () => {
    
    React.useEffect(() => {
      
        // Capture les 10 dernières modifs sur la table Commande
        firestore().collection("Commande").limit(10).onSnapshot( snapShot => {
    
            console.log( "Récup Boucle Commande", snapShot )
    
            if( !snapShot.empty ){
    
                snapShot.docs.forEach( commande => {
    
                    console.log(commande) ;

                    setDataCommande( [...dataCommande, {
                                                            id : commande.id,
                                                            ...commande.data(),
                                                        }])
    
                }) ; 
    
            }
    
        })
    
    }, [])

  const [dataCommande, setDataCommande] = useState( [ {id:1 , total:10}] ) ;

  return (

    <View>

      <FlatList

        data={ dataCommande }

        renderItem= { ( { item } ) => <ItemCommande item={item} /> }

        keyExtractor={ item => item.id }

      />

    </View>

  ) ;
}

export default Commande

const styles = StyleSheet.create({})