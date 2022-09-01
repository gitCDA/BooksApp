import { Text, View, Button } from 'react-native'
import React from 'react'
import { styles } from '../../First/theme/style'
import { useDispatch } from 'react-redux'
import { editLogin } from '../../../redux/action'
import { editNombre } from '../../../redux/action';
import { useSelector } from 'react-redux';

const Private = () => {

  
   // Récupérer la variable nombre qui est dans le state
   const { nombre } = useSelector( state => state ) ;
    
   const dispatch = useDispatch() ;
  
   const pressDeconnexion = () => {
    dispatch( editLogin( false ) ) ;
    dispatch(editNombre( nombre - nombre )) ;
    console.log("Déconnexion") ;
   } ;
  
    const ajouter = () => {
        dispatch(editNombre( nombre + 1 )) ;
    } ;
   
   const voir = () => {
        ;
    } ;

  return (

    <View>

      <Text> Vous êtes connecté </Text>
      <Text> Nombre : { nombre } </Text>
      <Button onPress={ pressDeconnexion } title='Déconnexion' />
      <Button onPress={ ajouter } title='Ajouter' />
      <Button onPress={ voir } title='Voir' />

    </View>
  )
}

export default Private