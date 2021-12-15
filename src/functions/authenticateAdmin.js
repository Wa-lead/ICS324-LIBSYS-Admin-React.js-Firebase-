import {
    collection,
    where, query
} from '@firebase/firestore';

import {
    projectFirestore
} from '../firebase/config';


const authenticateAdmin = async (user, pass) => {
    const collectionRef = collection(projectFirestore, 'AdminAuth');
     const  q =  query(collectionRef, where("Username", "==", 'waleed'));
    console.log(q.Passowrd);
    if (q.Passowrd == pass) {
        return true;
    }
    else {
        return false;
    }

}

export default authenticateAdmin;