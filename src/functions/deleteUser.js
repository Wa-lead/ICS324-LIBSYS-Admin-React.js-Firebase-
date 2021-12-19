import {
    collection,
    updateDoc,
    deleteField,
    deleteDoc,doc
} from '@firebase/firestore';

import {
    projectFirestore
} from '../firebase/config';


const deleteUser = (SSN) => {
    const collectionRef = collection(projectFirestore, 'User');
    deleteDoc(doc(collectionRef, SSN))

}

export default deleteUser;