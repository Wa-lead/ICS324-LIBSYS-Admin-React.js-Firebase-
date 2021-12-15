
import React, { useState } from "react";
import { useRef } from "react";
import Book from "../../Classes/Book"
import ProgressBar from "../ProgressBars/ProgressBar";
import updateBook from "../../functions/updateBook";
import { Button } from "@mui/material";
import deleteBook from "../../functions/deleteBook";





const UpdateBook = ({ book, setSelectedImg }) => {


    const ISBN = useRef(null);
    const title = useRef(null);
    const subject = useRef(null);
    const pub_date = useRef(null);
    const rack_num = useRef(null);
    const author = useRef(null);
    const copies = useRef(null);



    const submitForm = () => {

        updateBook(
            book.id,
            ISBN.current.value,
            title.current.value,
            subject.current.value,
            pub_date.current.value,
            rack_num.current.value,
            author.current.value,
            copies.current.value
        );

        setSelectedImg(null);


    }


    const DeleteBook = () => {
        deleteBook(book.id)
        setSelectedImg(null);
    }

    return (
        <div className="uploadForm">
            <Button onClick={DeleteBook}> Delete Book </Button>

            ISBN: <input type="text" ref={ISBN} defaultValue={book.ISBN} />
            Title: <input type="text" ref={title} defaultValue={book.title} />
            Subject: <input type="text" ref={subject} defaultValue={book.subject} />
            Publication Date: <input type="text" ref={pub_date} defaultValue={book.pub_date} />
            Rack Number: <input type="text" ref={rack_num} defaultValue={book.rack_num} />
            Author: <input type="text" ref={author} defaultValue={book.author} />
            Copies Available: <input type="text" ref={copies} defaultValue={book.copies}/>

            <Button onClick={submitForm}> Update </Button>
        </div>


    );
}


export default UpdateBook;