export const existItem = ( data = [], id = '' ) => {

    // existItem est différent d'undefined donc vrai
    return data.find( item => item.id ==id ) != undefined ;

}