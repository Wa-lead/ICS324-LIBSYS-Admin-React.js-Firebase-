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


const useReport33 = (Collection) => {
    const [docs, setDocs] = useState([]);


    useEffect(() => {

        const colRef = collection(projectFirestore, 'Borrows');
        //orderBy(colRef,'createdAt','desc');
        const unsubscribe = onSnapshot(colRef, async () => {


            let arrayOfusers =[];

            const documentOfUsers = []
            const w = collection(projectFirestore, 'User');
            let q = await getDocs(w);
            q.forEach((doc) => {
                documentOfUsers.push(doc.data())
            });

            for (var i =0 ; i< documentOfUsers.length; i++){
                const w = query(colRef, where("SSN", "==", documentOfUsers[i].SSN));
                const q = await getDocs(w);
                let o =[];
                q.forEach((document) => {
                    o.push(document.data());
                });
                if(o.length>= 3){
                    arrayOfusers.push(documentOfUsers[i]);
                }
            }
            
            setDocs(arrayOfusers);

        });

        return () => unsubscribe();

    }, [Collection]);
    return {
        docs
    }
}

export default useReport33;



// for (const key in userID) {
//     "reservation".limit=3,where(borrwer.userID).get().size=>3;
// }