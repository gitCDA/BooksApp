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
        <TouchableOpacity style={ styles.touchArticle } >
            <Text style={ styles.textflat } >
                { articles.nom }
            </Text>
        </TouchableOpacity>
    )
    
}

const Articles = () => {

  const { dataArticle } = useSelector( state => state ) ;
  console.log( dataArticle )
    
  return (

    <View style={ styles.content } >

      <Text style={ styles.title } >Articles</Text>

      <FlatList

        data={ dataArticle }
        
        horizontal={false}

        numColumns = {2}

        renderItem = { ( {item} ) =>
        // <Text style={ styles.textflat } > { item.nom } </Text>

        <RenderArticles articles={item} />

        }

        // keyExtractor = { item => item.id }
        keyExtractor = { (item, index) => 'key' + index}
        
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
    
    touchArticle: {
        backgroundColor: 'orange',
        margin: 10,
        borderRadius: 10,
        justifyContent:'center',
        height: 200,
        // marginTop : 5,
    },

    textArticle: {
        fontSize : 15,
        color:"#fff",
        fontWeight:"500",
    }

})