
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import Book from "../../Classes/Book"
import ProgressBar from "./../ProgressBars/ProgressBar";





const UploadForm = ({ setSelectedBook }) => {

    const [book, setBook] = useState(null);


    const fileRef = useRef(null);
    const ISBN = useRef(null);
    const title = useRef(null);
    const subject = useRef(null);
    const pub_date = useRef(null);
    const rack_num = useRef(null);
    const author = useRef(null);
    const copies = useRef(null);


    const submitForm = (type) => {

        setBook(new Book(
            ISBN.current.value,
            title.current.value,
            subject.current.value,
            pub_date.current.value,
            rack_num.current.value,
            author.current.value,
            fileRef.current.files[0],
        ));

        setSelectedBook(book);


    }

    return (
        <div className="uploadForm">
            <Typography variant="h2" sx={{ mb:3, mt: 3, fontWeight: 900 }}> Fill book information</Typography>
            
            <input type="file" ref={fileRef} />
            ISBN: <input type="text" ref={ISBN} />
            Title: <input type="text" ref={title} />
            Subject: <input type="text" ref={subject} />
            Publication Date: <input type="text" ref={pub_date} />
            Rack Number: <input type="text" ref={rack_num} />
            Author: <input type="text" ref={author} />
            Copies Available: <input type="text" ref={copies} />
            <input type="submit" onClick={submitForm} />

            {book &&
                <ProgressBar book={book} setSelectedBook={setBook} />
            }

        </div>


    );
}


export default UploadForm;