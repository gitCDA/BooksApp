import { EDIT_LOGIN } from "../type";

// Initialisation de la valeur du State login

const initStateLogin = true ;

export default function( state = initStateLogin, action ){

    switch( action.type ){
        
        case EDIT_LOGIN :{
            return action.payload ;
        }

        default :
                return state ;
    }

}