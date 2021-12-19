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



const useUploadBook = (book) => {

    const [progress, setProgress] = useState(0); //progress state and so on
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect(() => {
        // refreneces
        const storageRef = ref(projectStorage, book.file.name);
        const collectionRef = collection(projectFirestore, 'Book');

        const uploadTask = uploadBytesResumable(storageRef, book.file);
        uploadTask.on('state_changed',
            (snapshot) => {
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, (err) => {
                setError(err);
            }, async () => {
                const url = await getDownloadURL(storageRef);

                addDoc(collectionRef, {
                    ISBN: book.ISBN,
                    title: book.title,
                    subject:book.subject,
                    pub_date: book.pub_date,
                    rack_num: book.rack_num,
                    author: book.author,
                    copies: book.copies,
                    imageURL: url,
                    createdAt: serverTimestamp(),
                });
                setUrl(url);
            })
    }, [book]);

    return {
        progress,
        url,
        error
    }

}

export default useUploadBook;


