import axios from "axios"

// Variables de mon Api api.org
// const urlApi = 'https://newsapi.org/v2/everything'
// const apiKey = 'd277b3f20548401c877c2cc6ec1dc050'

// Variables de mon Api gnews.io
const urlApi = 'https://gnews.io/api/v4/search'
const apiKey = 'ce07c42f1ff74d57d1be54c5c114cbbe'

export const apiNews = async ( page ) => { 

  // console.log('api News')

  // Paramètres de mon Api
  const params = {
    q : 'Martinique' ,
    lang : 'fr',
    from : '2022-08-24' ,
    sortBy : 'popularity' ,
    token : apiKey ,
    page : page ,
    max : 10,
  }

  const {data} = await axios.get( urlApi, {params:params} )
  // const response = await axios.get( urlApi, {params:params} )
  
  console.log("apiNews", data)
  
  return data.articles

 }