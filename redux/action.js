import { EDIT_LOGIN } from "./type";
import { EDIT_NOMBRE } from "./type";
import { ADD_CATEGORIE } from "./type";

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