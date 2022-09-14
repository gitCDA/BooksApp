import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import { Image } from '@rneui/themed';

// const DATA = [];

const Item = ({ item }) => (
  <View style={styles.item}>

    <View>
    <Text style={styles.title}> { item.nom } </Text>
    <Text style={styles.title}> { item.prenom } </Text>
    </View>

{/* METTRE source = { { uri : } } et require quand l'image est stocké localement */}
    <Image style={styles.itemimage} source={ { uri : item.image } } />

  </View>
);

const TutoFireList = () => {
  const renderItem = ({ item }) => (
    <Item item={item} />
    // <Item title={item.title} />
  );

  const [data, setData] = useState( [] ) ;


  // onResult = () => {
  //   console.log('result') ;
    
  // }

  // onError = () => {
  //   console.log('error') ;

  // }

  console.log('data', data) ;

//    Se lance au chargement de mon composant ( voir , [] )
  useEffect( () => {

    // Capture ts les chgts dans Firebase
    firestore().collection( 'stagiaires' ).onSnapshot( capture => {
      // console.log(snapShot)

      let dataTemp = [] ;

      capture.forEach( document => {

          // Ajouter données reçues en live dans un tableau
          dataTemp.push( { id: document.id, ...document.data() } ) ;
          setData( dataTemp ) ;
          console.log( dataTemp ) ;
          // console.log( document.id, document.data() )

      })
        
    }) ;

  } , [] )


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lime',
    // paddingHorizontal: 25,
    // paddingVertical: 0.5,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius : 35,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
  },
  title: {
    fontSize: 25,
    color : 'black',
  },
  itemimage: {
    height : 95,
    aspectRatio : 1,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 0.5,
  },
});

export default TutoFireList;