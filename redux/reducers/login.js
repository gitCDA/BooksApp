import { EDIT_LOGIN } from "../type";
import { EDIT_NOMBRE } from "../type";

// Initialisation de la valeur du State login

const initStateLogin = false ;

// export default login
export default function( state = initStateLogin, action ){

    switch( action.type ){
        
        case EDIT_LOGIN :{
            return action.payload ;
        }

        default :
                return state ;
    }

}