import axios from "axios"

// Variables de mon Api api.org
// const urlApi = 'https://newsapi.org/v2/everything'
// const apiKey = '3f6c406812734646ab893282688d4be0'

// Variables de mon Api gnews.io
const urlApi = 'https://gnews.io/api/v4/search'
const apiKey = 'fb77ce173f9bada54e25111777c1ddaf'

// Variables de mon Api gnews.io
// const urlApi = 'http://api.mediastack.com/v1/news'
// const apiKey = '1eaa7468acbdd5f933112aad311a75b1'

export const apiNews = async ( page ) => { 

  // console.log('api News')

  // Paramètres de mon Api
  const params = {
    // keywords : 'Martinique' ,
    q : 'Apple' ,
    // languages : 'fr',
    lang : 'fr',
    // date : '2022-08-25' ,
    from : '2022-08-25' ,
    // sort : 'popularity' ,
    sortBy : 'popularity' ,
    // access_key : apiKey ,
    token : apiKey ,
    page : page ,
    // limit : limit,
    max : 10,
    // pageSize : 10,
  }

  const {data} = await axios.get( urlApi, {params:params} )
  // const response = await axios.get( urlApi, {params:params} )
  
  console.log("apiNews", data.articles)
  
  return data.articles

 }