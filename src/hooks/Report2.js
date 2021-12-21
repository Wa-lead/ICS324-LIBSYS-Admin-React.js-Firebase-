import {
    collection,
    orderBy,
    onSnapshot,
    query,
    getDocs, getDoc, where, doc
} from '@firebase/firestore';
import userEvent from '@testing-library/user-event';
import {
    useState,
    useEffect
} from 'react';
import {
    projectFirestore
} from '../firebase/config';


const useReport2 = (Collection) => {
    const [docs, setDocs] = useState([]);


    useEffect(() => {

        const colRef = collection(projectFirestore, 'Borrows');
        //orderBy(colRef,'createdAt','desc');
        const unsubscribe = onSnapshot(colRef, async () => {


            const documentOfUsers = []
            const w = collection(projectFirestore, 'User');
            let q = await getDocs(w);
            q.forEach((doc) => {
                documentOfUsers.push(doc.data())
                
            });

            for (var i =0 ; i< documentOfUsers.length; i++){
                const w = query(colRef, where("SSN", "==", documentOfUsers[i].SSN));
                const q = await getDocs(w);
                let resDocument =[];
                q.forEach((document) => {
                    resDocument.push(document.data());

                });
                for (var j =0 ; j< resDocument.length; j++){
                    if(resDocument[j].penality){
                        documentOfUsers[i].penality = resDocument[j].penality;
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

export default useReport2;



// for (const key in userID) {
//     "reservation".limit=3,where(borrwer.userID).get().size=>3;
// }