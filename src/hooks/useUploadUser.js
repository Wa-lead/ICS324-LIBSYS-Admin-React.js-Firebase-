import {
    useState,
    useEffect
} from 'react';
import {
    projectStorage,
    projectFirestore,
} from '../firebase/config';
import {
    getDownloadURL,
    ref,
    uploadBytesResumable
} from "firebase/storage";
import {
    collection,
    serverTimestamp,
    addDoc,
} from 'firebase/firestore';



const useUploadUser = (User) => {
    
    console.log("ddfs")

    useEffect(() => {
        // refreneces
        const collectionRef = collection(projectFirestore, 'User');

        addDoc(collectionRef, {
            SSN: User.SSN,
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