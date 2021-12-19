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


const useReport3 = (Collection) => {
    const [docs, setDocs] = useState([]);


    useEffect(() => {

        const colRef = collection(projectFirestore, 'User');
        //orderBy(colRef,'createdAt','desc');
        const unsubscribe = onSnapshot(colRef, async () => {

            let Images = [];
            const documents = await getDocs(colRef);
            documents.forEach(async (document) => {
                Images.push(document.id);
            });
            // first set

            const resRef = collection(projectFirestore, 'Reservation');
            let arrayOfusers =[]

            for (var i =0 ; i< Images.length; i++){
                const w = query(resRef, where("Borrower", "==", Images[i]));
                const q = await getDocs(w);
                let o =[];
                q.forEach((document) => {
                    o.push(document.data());
                });
                console.log(o)

                if(o.length>= 3){
                    arrayOfusers.push(o[0].Borrower)
                }
            }

            console.log(arrayOfusers);

            const arrayToDisplay = [];


            for (var i =0 ; i< arrayOfusers.length; i++){
                let u = collection(projectFirestore, 'User');
                const docRef = doc(u, arrayOfusers[i]);
                const docSnap = await getDoc(docRef);
                arrayToDisplay.push(docSnap.data());
            }


            
                setDocs(arrayToDisplay);

        });

        return () => unsubscribe();

    }, [Collection]);
    return {
        docs
    }
}

export default useReport3;



// for (const key in userID) {
//     "reservation".limit=3,where(borrwer.userID).get().size=>3;
// }