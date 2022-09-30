import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import firestore from '@react-native-firebase/firestore'
import moment from 'moment/moment'

import { removePanier } from '../../../redux/action'
import PanierItem from '../Components/PanierItem'
import { styles as ecommerceStyles } from '../../../theme/ecommerce/styles'

<PanierItem />

const Panier = () => {
  
  const [montantTotal , setMontantTotal] = React.useState(0) ;

  let total = 0 ;

  // Calculer la Somme des Prix dans le Panier
  const sommePrixPanier = () => {

    dataPanier.forEach( (element) => {

      total = total + element.prix ;

      console.log(total) ;

    }) ;

  }

  // Ajouter le panier dans la commande
  const addCommande = () => {

    // Création de la table Commande
    const commande = {
      etat : false,
      total : montantTotal,
      date : moment(new Date()).format(),
    } ;

    console.log('addCommande', commande) ;

    firestore().collection("Commande").add(commande) ;

  }

  const {dataPanier, dataUser} =  useSelector( state => state ) ;
  const dispatch = useDispatch() ;
  console.log('data :', dataPanier) ;

  const remove = () => {

    dispatch( removePanier() ) ;
    console.log( dataPanier ) ;

  }

  React.useEffect(() => {

      sommePrixPanier() ;

      setMontantTotal( total ) ;

  }, [dataPanier])
  

  return (
    <View style={ styles.container }>

      <FlatList

        data={dataPanier}
        
        renderItem = { ( { item } ) => <PanierItem item={item}/> }

        keyExtractor={ item => item.id }

      />

{/* Footer Panier */}
        <View style={ styles.bottom }>

          <View style={ styles.prix }>
            <Text style={ ecommerceStyles.detailPrix }> {montantTotal} € </Text>
          </View>

          <View style={ styles.acheter }>

            <Button
            onPress={addCommande}
            buttonStyle={ styles.buttonStyle }
            containerStyle={ styles.containerButtonStyle }> Acheter </Button>

          </View>
          
        </View>
{/* End Footer Panier */}

    </View>
  )
}

export default Panier

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'red',
    justifyContent:'space-between',
  },

  bottom:{
    height:100,
    backgroundColor:'white',
    flexDirection:'row',
  },

  prix:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
  },

  acheter:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
  },

  buttonStyle:{
    width:'45%',
    borderRadius:7.5,
    backgroundColor:'lime',
  },
  
  containerButtonStyle:{
    
  },
})