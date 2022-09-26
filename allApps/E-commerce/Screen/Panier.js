import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removePanier } from '../../../redux/action'
import PanierItem from '../Components/PanierItem'

<PanierItem />

const Panier = () => {

  const {dataPanier} =  useSelector( state => state ) ;
  const dispatch = useDispatch() ;
  console.log('data :', dataPanier) ;

  const remove = () => {

    dispatch( removePanier() )
    console.log( dataPanier )

  }

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
            <Text>Prix</Text>
          </View>

          <View style={ styles.acheter }>

            <Button
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