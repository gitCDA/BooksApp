import { ADD_ARTICLE } from "../type";
import { existItem } from "../../common/fonctions";

// Initialisation de la valeur du State dans le Store

const initStateArticles = [] ;

// export default dataArticle
export default function ( state = initStateArticles , action ) {

    if ( action.type == ADD_ARTICLE ) {
        
        // Voir détails dans dataCategorie
        return !existItem( state, action.payload.id ) ? [ ...state, action.payload ] : state ;
        
    } else {
        
        return state ;

    }

}