import { Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
// import firestore from '@react-native-firebase/firestore';
import { Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../theme/ecommerce/styles';

const HeaderDetail = () => {

  const navigation = useNavigation() ;

  const Retour = () => {
    navigation.goBack() ;
  }

  return (

    <View style={styles.headerDetail}>

      <Icon2 name='arrow-back-circle-outline' size={35} color='black' 
      onPress={ Retour }/>

      {/* METTRE source = { { uri : } } et require quand l'image est stocké localement */}
      <Image
      style={styles.itemimageHeaderDetail}
      transition={true}
      transitionDuration={3500}
      resizeMode= 'center'
      source={ require('../../youtube/images/logo.jpg') }
      />
      
      <Icon name='dots-three-horizontal' size={25} color='black' />

    </View>
  )
  
}

export default HeaderDetail