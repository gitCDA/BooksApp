import { ADD_CATEGORIE } from "../type";
import { existItem } from "../../common/fonctions";

// Initialisation de la valeur du State dans le Store

const initStateCategories = [] ;

// export default dataCategorie
export default function ( state = initStateCategories , action ) {

    if ( action.type == ADD_CATEGORIE ) {
        
        // return State actualisé ;

        return !existItem( state, action.payload.id ) ? [ ...state, action.payload ] : state ;

        // if( state.find( item => item.id == action.payload.id ) == undefined ) {
        // console.log( state.find( item => item.id == action.payload.id ) )

        //     // Permet d'ajouter une caté avec le destructuring
        //     return [ ...state, action.payload ] ;
        //     // action.payload stocké dans le dispatch

        // }else{

        //     return state
            
        // }
        
    } else {
        
        // retourne State initial
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