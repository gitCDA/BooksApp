import { ADD_ARTICLE } from "../type";

// Initialisation de la valeur du State dans le Store

const initStateArticles = [] ;

// export default dataArticle
export default function ( state = initStateArticles , action ) {

    if ( action.type == ADD_ARTICLE ) {
        
        // return nextState ;

        if ( state.find( item => item.id == action.payload.id ) == undefined ) {
        // Permet d'ajouter une caté avec le destructuring
        return [ ...state, action.payload ] ;
        // action.payload stocké dans le dispatch
        } else {

            return state

        }
        
    } else {
        
        return state ;

    }

}