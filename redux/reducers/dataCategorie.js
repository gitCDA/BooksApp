import { ADD_CATEGORIE } from "../type";

// Initialisation de la valeur du State dans le Store

const initStateCategories = [] ;

// export default dataCategorie
export default function ( state = initStateCategories , action ) {

    if ( action.type == ADD_CATEGORIE ) {
        
        // return nextState ;

        // Permet d'ajouter une caté avec le destructuring
        return [ ...state, action.payload ] ;
        // action.payload stocké dans le dispatch
        
    } else {
        
        return state ;

    }

    // Équivalent à au-dessus

    // switch( action.type == ADD_CATEGORIE ){

    //     case ADD_CATEGORIE :{
    //         return nextState ;
    //     }
    //     default :
    //             return state ;
    // }

}