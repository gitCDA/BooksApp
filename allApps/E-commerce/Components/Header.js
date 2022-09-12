import { Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Entypo'
// import firestore from '@react-native-firebase/firestore'
import { Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../theme/ecommerce/styles';

const Header = () => {

  const navigation = useNavigation() ;

  const Retour = () => {
    navigation.goBack() ;
  }

  return (

    <View style={styles.header}>

      <Icon2 name='back' size={25} color='black' 
      onPress={ Retour }/>

      {/* METTRE source = { { uri : } } et require quand l'image est stocké localement */}
      <Image
      style={styles.itemimageHeader}
      transition={true}
      transitionDuration={3500}
      source={ require('../../youtube/images/logo.jpg') }
      />
      
      <Icon name='watch' size={25} color='black' />

    </View>
  )
  
}

export default Header