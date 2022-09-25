import {db} from "../firebase-config"

import { 
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} 
from "firebase/firestore";

const orderCollectionRef=collection(db,"orders");

class itemDataService{
    addItems =(newItem)=>{
        return addDoc(orderCollectionRef, newItem)
    }

    updateItem = (id, updatedItem)=>{
        const itemDoc = doc(db,"orders",id);
        return updateDoc(itemDoc, updatedItem);
    };

    deleteItem=(id)=>{
        const itemDoc = doc(db,"orders",id);
        return deleteDoc(itemDoc);
    };

    getAllItems=()=>{
        return getDocs(orderCollectionRef);
    }

    getItem=(id)=>{
        const itemDoc = doc(db,'orders',id);
        return getDoc(itemDoc);

    }

}

export default new itemDataService();