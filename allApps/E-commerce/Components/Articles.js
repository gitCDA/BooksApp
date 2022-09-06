import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


// const data = [ 
//     { id:1, nom:"cat1" },
//     { id:2, nom:"cat2" },
//     { id:3, nom:"cat3" },
//     { id:4, nom:"cat4" },
// ]


const RenderArticles = ( {articles} ) => {
    
    return (
        <TouchableOpacity style={ styles.touchArticles } >
            <Text style={ styles.textflat } >
                { articles.nom }
            </Text>
        </TouchableOpacity>
    )
    
}

const Articles = () => {

  const { dataCategorie } = useSelector( state => state ) ;
  console.log( dataCategorie )
    
  return (

    <View style={ styles.content } >

      <Text style={ styles.title } >Articles</Text>

      <FlatList

        data={ dataCategorie }

        renderItem = { ( {item} ) =>
        // <Text style={ styles.textflat } > { item.nom } </Text>

        <RenderArticles articles={item} />

        }

        // keyExtractor = { item => item.id }
        keyExtractor = { (item, index) => 'key' + index}

        horizontal
        
      />

    </View>
  )
}

export default Articles

const styles = StyleSheet.create({

    content: {
        // flex : 1,
        // height : 100,
        width : '100%',
    },
    
    title: {
        fontSize : 25,
        fontWeight : '500',
        marginBottom: 5,
    },
    
    textflat: {
        // backgroundColor : 'red',
        color:"#fff",
        marginLeft : 5,
        width : 105,
        textAlign:'center',
        borderRadius: 25,
        alignSelf : 'center'
    },
    
    touchCategorie: {
        backgroundColor: 'blue',
        marginRight: 10,
        borderRadius: 25,
        justifyContent:'center',
        height: 35,
        // marginTop : 5,
    },

    textCategorie: {
        fontSize : 15,
        color:"#fff",
        fontWeight:"500",
    }

})