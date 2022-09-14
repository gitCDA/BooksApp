import { View, Text } from 'react-native' ;
import React from 'react' ;
import { Button } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Fontisto'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/Octicons'
import auth from '@react-native-firebase/auth';
import { editUser } from '../../../redux/action';

const Connexion = () => {

  const navigation = useNavigation() ;

  const dispatch = useDispatch() ;
  
  // const pressConnexion = () => {
  //   // Le dispatch active editUser qui change la valeur de dataUser qui devient true
  //   dispatch( editUser( true ) ) ;
  //  } ;
  
  const pressConnexion = () => {
    auth()
    .signInWithEmailAndPassword( email, motDePasse )
    .then(() => {
      console.log('User account created & signed in!');
      dispatch( editUser( true ) ) ;
    })
    .catch(error => {
      console.error(error);
    })
  } ;
  
  const GoToInscription = () => {
    navigation.navigate( 'Inscription' ) ;
   } ;

  //                                      Équivalent à importer
  const [passwordShow, setPasswordShow] = React.useState( true ) ;
  const [email, setemail] = React.useState() ;
  const [motDePasse, setmotDePasse] = React.useState() ;

  return (

    <View>

      <Text>Connectez-vous</Text>

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
          width: 200,
          alignSelf:'center',
          borderRadius:15,
        }}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        type="clear"
        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
        onPress={ pressConnexion } title='Connexion' />

      <Button
        containerStyle={{
          width: 200,
          alignSelf:'center',
        }}
        type="clear"
        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
        onPress={ GoToInscription } title='Inscrivez-vous dès maintenant !' />

    </View>

  )
}

export default Connexion