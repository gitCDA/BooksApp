import { EDIT_USER } from "../type";

// Initialisation de la valeur du State dans le Store

const initStateUser = null ;

export default function ( state = initStateUser , action ) {

    if ( action.type == EDIT_USER ) {
        
        return action.payload ;
        
    } else {
        
        return state ;

    }

}