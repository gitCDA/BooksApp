import axios from "axios"

// Variables de mon Api
const urlApi = 'https://newsapi.org/v2/everything'
const apiKey = 'd277b3f20548401c877c2cc6ec1dc050'

export const apiNews = async ( page ) => { 

  // console.log('api News')

  // Paramètres de mon Api
  const params = {
    q : 'Apple' ,
    from : '2022-08-24' ,
    sortBy : 'popularity' ,
    apiKey : apiKey ,
    page : page ,
    pageSize : 10,
  }

  const {data} = await axios.get( urlApi, {params:params} )
  // const response = await axios.get( urlApi, {params:params} )
  
  console.log("apiNews", data)
  
  return data.articles

 }