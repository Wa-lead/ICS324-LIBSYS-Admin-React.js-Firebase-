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

        const colRef = collection(projectFirestore, 'Reservation');
        //orderBy(colRef,'createdAt','desc');
        const unsubscribe = onSnapshot(colRef, async () => {

            let Images = [];
            const documents = await getDocs(colRef);
            documents.forEach(async (document) => {
                let d = document.data();
                let u = collection(projectFirestore, 'User')
                const docRef = doc(u, d.Borrower);
                const docSnap = await getDoc(docRef);
                Images.push(docSnap.data());
            });
            // first set


            const documentOfUsers = []

            const w = collection(projectFirestore, 'User');
            let q = await getDocs(w);
            q.forEach((doc) => {
                documentOfUsers.push(doc.data())
            });
            // second set



            // first set - second set
            for (var i =0 ; i< documentOfUsers.length; i++){
                for(var j =0 ; j< Images.length; j++){
                    if(documentOfUsers[i].SSN == Images[j].SSN){
                        documentOfUsers.splice(i, 1);
                    }
                }
            }


            setDocs(documentOfUsers);
        });

        return () => unsubscribe();

    }, [Collection]);
    return {
        docs
    }
}

export default useReport1;