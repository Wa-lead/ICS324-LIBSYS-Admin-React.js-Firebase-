
import React, { useState } from "react";
import { useRef } from "react";
import Book from "../../Classes/Book"
import ProgressBar from "../ProgressBars/ProgressBar";
import updateBook from "../../functions/updateBook";
import { Button } from "@mui/material";
import deleteBook from "../../functions/deleteBook";

import {
    projectFirestore,
} from '../../firebase/config';
import {
    collection,
    serverTimestamp,
    addDoc,
    setDoc,
    doc
} from 'firebase/firestore';




const BorrowBook = ({ book, setSelectedImg }) => {


    const ISBN = useRef(null);
    const title = useRef(null);
    const subject = useRef(null);
    const pub_date = useRef(null);
    const rack_num = useRef(null);
    const author = useRef(null);
    const copies = useRef(null);



    const submitForm = () => {

        let q = collection(projectFirestore,'Book')
        const docRef = doc(q,ISBN.current.value);
        setDoc(docRef, {
            ISBN: ISBN.current.value,
            title: title.current.value,
            subject:subject.current.value,
            pub_date: pub_date.current.value,
            rack_num: rack_num.current.value,
            author: author.current.value,
            copies: parseInt(copies.current.value),
            imageURL: book.imageURL,
            barcode: book.barcode,
            createdAt: serverTimestamp(),
        });

        setSelectedImg(null);


    }

    return (
        <div className="uploadForm">
            ISBN: <input type="text" ref={ISBN} defaultValue={book.ISBN} />
            Title: <input type="text" ref={title} defaultValue={book.title} />
            Subject: <input type="text" ref={subject} defaultValue={book.subject} />
            Publication Date: <input type="text" ref={pub_date} defaultValue={book.pub_date} />
            Rack Number: <input type="text" ref={rack_num} placeholder="Enter racl number"/>
            Author: <input type="text" ref={author} defaultValue={book.author} />
            Desired copies: <input type="text" ref={copies} placeholder="Enter desired number of copies"/>
            <Button onClick={submitForm}> Borrow </Button>
        </div>


    );
}


export default BorrowBook;