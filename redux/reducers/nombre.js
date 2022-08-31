import { EDIT_LOGIN } from "../type";
import { EDIT_NOMBRE } from "../type";

// Initialisation de la valeur du State nombre

const initStateNombre = 0 ;

// export default login
export default function( state = initStateNombre, action ){

    switch( action.type ){

        case EDIT_NOMBRE :{
            // return state + 1 ;
            return action.payload ;
        }

        default :
                return state ;
    }

}