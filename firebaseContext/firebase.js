import firestore from "@react-native-firebase/firestore";

// Début POO avec JS 
// (voir index à la racine du projet pour l'envoyer dans toue l'app)
class Firebase {

    firestore ;
    
    constructor() {

        this.firestore = firestore() ;

    }

    // Récupère les catégories
    getCategories = () => this.firestore.collection('Categories').get() ;
    // getCategories = () => {
    //     return this.firestore.collection("Categories")
    // }

    // Récupère les articles
    getArticles = () => this.firestore.collection('Articles').get() ;
    
    // Récupère les articles par leur id
    getArticleById = (id) => this.firestore.collection('Articles').doc(id).get() ;

}

export default Firebase