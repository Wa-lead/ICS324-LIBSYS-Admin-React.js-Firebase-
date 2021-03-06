import {
    collection,
    orderBy,
    onSnapshot,
    query,
    getDocs, getDoc, where, doc
} from '@firebase/firestore';
import {
    useState,
    useEffect
} from 'react';
import {
    projectFirestore
} from '../firebase/config';


const useReport1 = (Collection) => {
    const [docs, setDocs] = useState([]);


    useEffect(() => {

        const colRef = collection(projectFirestore, 'Borrows');
        const unsubscribe = onSnapshot(colRef, async () => {
            const resUsers = [];
            const documents = await getDocs(colRef);
            documents.forEach(async (document) => {
                resUsers.push(document.data());
            });

            const documentOfUsers = []

            const w = collection(projectFirestore, 'User');
            let q = await getDocs(w);
            q.forEach((doc) => {
                documentOfUsers.push(doc.data())
            });

            const arrayOfUsers = [];

            for (var i = 0; i < documentOfUsers.length; i++) {
                const w = query(colRef, where("SSN", "==", documentOfUsers[i].SSN));
                const q = await getDocs(w);
                console.log(q.docs.length);
                if(!q.docs.length >0){
                    arrayOfUsers.push(documentOfUsers[i]);
                }
            }


            setDocs(arrayOfUsers);
        });

        return () => unsubscribe();

    }, [Collection]);
    return {
        docs
    }
}

export default useReport1;