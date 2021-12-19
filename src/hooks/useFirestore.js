import {
    collection,
    orderBy,
    onSnapshot,
    query,
    getDocs
} from '@firebase/firestore';
import {
    useState,
    useEffect
} from 'react';
import {
    projectFirestore
} from '../firebase/config';


const useFirestore = (Collection) => {
    const [docs, setDocs] = useState([]);


    useEffect(() => {

        const colRef = collection(projectFirestore, Collection);
        //orderBy(colRef,'createdAt','desc');
        const unsubscribe = onSnapshot(colRef, async () => {

            let ImagesRef = query(colRef, orderBy('createdAt', 'desc'))
            let Images = [];
            const documents = await getDocs(ImagesRef);

            documents.forEach((doc) => {
                Images.push({...doc.data(), id: doc.id});
            });
            setDocs(Images);
        });

        return () => unsubscribe();

    }, [Collection]);
    return {
        docs
    }
}

export default useFirestore;

