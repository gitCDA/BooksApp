import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import { existItem } from "../../common/fonctions";

// Initialisation de la valeur du State dans le Store

const initStatePanier = [] ;

export default function ( state = initStatePanier , action ) {

    if ( action.type == ADD_PANIER ) { // Ajouter un article au panier
        
        return !existItem( state, action.payload.id ) ? [ ...state, action.payload ] : state ;
        
    } else if ( action.type == REMOVE_PANIER ) { // Vider mon Panier
        
        return action.payload ;
        // return [] ;

    } else if ( action.type == REMOVE_ONE_PANIER ) { // Supprimer 1 élément de mon Panier
        
        // 1- Rechercher la posit° de l'élément
        // 2- Supprimer l'élément dans le tableau
        
        console.log('action.payload.id', action.payload ) ;
        return state.filter( item => item != action.payload ) ;
        // return state.splice( action.payload, 1 ) ;

    } else {
        
        return state ;

    }

}