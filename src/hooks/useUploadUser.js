import {
    useEffect
} from 'react';
import {
    projectFirestore,
} from '../firebase/config';

import {
    collection,
    serverTimestamp,
    setDoc,
    doc
} from 'firebase/firestore';



const useUploadUser = (User) => {
    
    useEffect(() => {
        // refreneces
        const collectionRef = collection(projectFirestore, 'User');

        const docRef = doc(collectionRef , String(User.SSN))
        setDoc(docRef, {
            SSN: User.SSN,
            Password: User.Password,
            Fname: User.Fname,
            Minit:User.Minit,
            Lname: User.Lname,
            Birthdate: User.Birthdate,
            Department: User.Department,
            Role: User.Role,
            createdAt: serverTimestamp(),
        });

    }, [User]);
}

export default useUploadUser;