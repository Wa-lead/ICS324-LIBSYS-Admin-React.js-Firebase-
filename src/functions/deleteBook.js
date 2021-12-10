import {
    collection,
    updateDoc,
    deleteField,
    deleteDoc,doc
} from '@firebase/firestore';

import {
    projectFirestore
} from '../firebase/config';


const deleteBook = (id) => {
    const collectionRef = collection(projectFirestore, 'Book');
    deleteDoc(doc(collectionRef, id))

}

export default deleteBook;