import {
    collection,
    where, query, getDocs
} from '@firebase/firestore';

import {
    projectFirestore
} from '../firebase/config';


const authenticateAdmin = async (user, pass) => {
    const collectionRef = collection(projectFirestore, 'AdminAuth');
    const q = query(collectionRef, where("Username", "==", user));
    const querySnapshot = await getDocs(q);
    let document = null;
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        document = doc.data();
    });
    try {
        if (document.Password == pass) {
            return true;
        }
        else {
            return false;
        }
    } catch (exception_var) {
        return false
    }

}

export default authenticateAdmin;