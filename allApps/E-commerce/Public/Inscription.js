import { View, Text  } from 'react-native'
import React, {useContext, useState} from 'react'
import Firebase from '../../../firebaseContext/context'
import auth from '@react-native-firebase/auth';
import { Button, Input } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/Octicons'

import { styles } from '../../../theme/ecommerce/styles'

const Connexion = () => {

  const navigation = useNavigation() ;
  
  const GoToConnexion = () => {
    navigation.navigate( 'Connexion' ) ;
   } ;

  //                                      Équivalent à importer
  const [passwordShow, setPasswordShow] = React.useState( true ) ;
  const [email, setemail] = useState() ;
  const [motDePasse, setmotDePasse] = useState() ;

  // const firebase = useContext( Firebase ) ;

  const save = () => {
    console.log( 'first', email, motDePasse )

    auth()
    .createUserWithEmailAndPassword( email, motDePasse )
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      console.error("error firebase auth", error);
    });
  } ;

  return (

    <View>

      <Text>Inscrivez-vous</Text>

      <Input
        placeholder='Adresse Mail'
        onChangeText={ value => setemail( value ) }
        textContentType='emailAdress'
        leftIcon={
          <Icon
            name='at'
            size={25}
            color='black'
          />
        }
      />

      <Input
        placeholder='Mot de Passe'
        onChangeText={ value => setmotDePasse( value ) }
        secureTextEntry={ passwordShow }
        leftIcon={
          <Icon2
            name='lock-outline'
            size={25}
            color='black'
          />
        }
        rightIcon={
          <Icon3
            name= { passwordShow ? 'eye' : 'eye-closed' }
            size={25}
            color='black'
            onPress={ () => setPasswordShow( !passwordShow ) }
          />
        }
      />

      <Button
        containerStyle={{
          width: 205,
          alignSelf:'center',
          borderRadius:15,
        }}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        type="solid"
        titleStyle={{ color: 'rgba(78, 115, 289, 1)' }}
        onPress={ save }
        title="Je m'inscris" />

      <Button
        containerStyle={{
          width: 205,
          alignSelf:'center'
        }}
        type="clear"
        titleStyle={{ color: 'rgba(78, 115, 289, 1)' }}
        onPress={ GoToConnexion }
        title='Déjà Inscrit ? Connectez-vous' />

    </View>
  )
}

export default Connexion