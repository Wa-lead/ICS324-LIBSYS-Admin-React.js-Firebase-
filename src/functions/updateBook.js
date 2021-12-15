import {
    collection,
    updateDoc,
    deleteField,
    deleteDoc, doc
} from '@firebase/firestore';

import {
    projectFirestore
} from '../firebase/config';


const updateBook = (id, ISBN, title, subject, pub_date, rack_num, author, copies) => {
    const collectionRef = collection(projectFirestore, 'Book');
    updateDoc(doc(collectionRef, id), {
        ISBN: ISBN,
        title: title,
        subject: subject,
        pub_date: pub_date,
        rack_num: rack_num,
        author: author,
        copies: copies,
    })

}

export default updateBook;