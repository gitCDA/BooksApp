import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import { existItem } from "../../common/fonctions";

// Initialisation de la valeur du State dans le Store

const initStatePanier = [] ;

export default function ( state = initStatePanier , action ) {

    switch ( action.type ) {
        case ADD_PANIER: // Ajouter un article au panier

            console.log("action.payload", action.payload.id) ;
            // Vérification que l'élément existe ou pas pour savoir si on crée ou on incrémente après le else
                if( !existItem( state, action.payload.id ) ){

                    const item ={ ...action.payload, quantite: 1 };
                    console.log('opul', item) ;
                    return [ ...state, item ] ;
                
                }else{

                    // Trouver le produit avec son id  pour avoir la valeur "quantite"
                    const findItem = state.find( item => item.id == action.payload.id ) ;

                    // Trouver l'index du produit
                    const indexItem = state.findIndex( item => item.id == action.payload.id ) ;
                    
                    // Incrémentation
                    const newItem = { ...findItem, quantite: quantite + 1 } ;
                    console.log("indexopoulos", newItem) ;

                    // Pour mettre le tableau "state" à jour on crée une valeur qui peut changer
                    let newState = state ;

                    newState[ indexItem ] = newItem ; // array[i];

                    return newState ;
                    // return [ ...state, newItem ];

                }
            
            // return !existItem( state, action.payload.id ) ? [ ...state, action.payload ] : state ;
        
            break;

        case REMOVE_PANIER: // Vider mon Panier

            return action.payload ;
            // return [] ;

            break;

        case REMOVE_ONE_PANIER:  // Supprimer 1 élément de mon Panier

            // 1- Rechercher la posit° de l'élément
            // 2- Supprimer l'élément dans le tableau
            
            console.log('action.payload.id', action.payload ) ;
            return state.filter( item => item != action.payload ) ;
            // return state.splice( action.payload, 1 ) ;

            break;
    
        default:

            return state ;

            break;

    }

    // if ( action.type == ADD_PANIER ) { // Ajouter un article au panier
        
    //     return !existItem( state, action.payload.id ) ? [ ...state, action.payload ] : state ;
        
    // } else if ( action.type == REMOVE_PANIER ) { // Vider mon Panier
        
    //     return action.payload ;
    //     // return [] ;

    // } else if ( action.type == REMOVE_ONE_PANIER ) { // Supprimer 1 élément de mon Panier
        
    //     // 1- Rechercher la posit° de l'élément
    //     // 2- Supprimer l'élément dans le tableau
        
    //     console.log('action.payload.id', action.payload ) ;
    //     return state.filter( item => item != action.payload ) ;
    //     // return state.splice( action.payload, 1 ) ;

    // } else {
        
    //     return state ;

    // }

}