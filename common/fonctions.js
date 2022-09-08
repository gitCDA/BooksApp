export const existItem = ( data = [], id = '' ) => {
    // retourne tous les éléments qui ont 1 id différent
    return data.find( item => item.id == id ) != undefined ;
}