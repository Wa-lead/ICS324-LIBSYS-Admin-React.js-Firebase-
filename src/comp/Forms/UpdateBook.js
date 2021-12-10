
import React, { useState } from "react";
import { useRef } from "react";
import Book from "../../Classes/Book"
import ProgressBar from "../ProgressBars/ProgressBar";
import updateBook from "../../functions/updateBook";
import { Button } from "@mui/material";
import deleteBook from "../../functions/deleteBook";





const UpdateBook = ({ book, setSelectedImg}) => {


    const ISBN = useRef(null);
    const title = useRef(null);
    const subject = useRef(null);
    const pub_date = useRef(null);
    const rack_num = useRef(null);
    const author = useRef(null);


    const submitForm = () => {

        updateBook(
            book.id,
            ISBN.current.value,
            title.current.value,
            subject.current.value,
            pub_date.current.value,
            rack_num.current.value,
            author.current.value,
        );

        setSelectedImg(null);


    }


    const DeleteBook = () =>{
        deleteBook(book.id)
        setSelectedImg(null);
    }

    return (
        <div className="uploadForm">
            ISBN: <input type="text" ref={ISBN} />
            Title: <input type="text" ref={title} />
            Subject: <input type="text" ref={subject} />
            Publication Date: <input type="text" ref={pub_date} />
            Rack Number: <input type="text" ref={rack_num} />
            Author: <input type="text" ref={author} />
            <input type="submit" onClick={submitForm} value="Update"/>
            <Button  onClick={DeleteBook}> Delete Book </Button>
        </div>


    );
}


export default UpdateBook;