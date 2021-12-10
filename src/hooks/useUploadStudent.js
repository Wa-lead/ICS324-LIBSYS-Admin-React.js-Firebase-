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



const useUploadStudent = (student) => {
    
    console.log("ddfs")

    useEffect(() => {
        // refreneces
        const collectionRef = collection(projectFirestore, 'Student');

        addDoc(collectionRef, {
            SSN: student.SSN,
            Fname: student.Fname,
            Minit:student.Minit,
            Lname: student.Lname,
            Birthdate: student.Birthdate,
            Major: student.Major,
            createdAt: serverTimestamp(),
        });

    }, [student]);
}

export default useUploadStudent;