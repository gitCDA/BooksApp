import firestore from "@react-native-firebase/firestore";

// Début POO avec JS
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

}

export default Firebase