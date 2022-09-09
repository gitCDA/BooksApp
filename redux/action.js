import { EDIT_LOGIN } from "./type";
import { EDIT_NOMBRE } from "./type";
import { ADD_CATEGORIE } from "./type";
import { ADD_ARTICLE } from "./type";

import { ADD_PANIER } from "./type";
import { REMOVE_PANIER } from "./type";
import { REMOVE_ONE_PANIER } from "./type";

export const editLogin = (login) => ( {

    type : EDIT_LOGIN ,
    payload : login ,

} )

export const editNombre = (nombre) => ( {

    type : EDIT_NOMBRE ,
    payload : nombre ,

} )

export const addCategorie = (categorie) => ( {

    type : ADD_CATEGORIE ,
    payload : categorie ,

} )

export const addArticle = (article) => ( {

    type : ADD_ARTICLE ,
    payload : article ,

} )


// Gestion de mon Panier
export const addPanier = (article) => ( {

    type : ADD_PANIER ,
    payload : article ,

} )

export const removePanier = () => ( {

    type : REMOVE_PANIER ,
    payload : [] ,

} )

export const removeOnePanier = ( panier ) => ( {

    type : REMOVE_ONE_PANIER ,
    payload : panier ,

} )