import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";



const ProgressBar = ({book, setSelectedBook}) =>{
    const {url, progress} = useStorage(book);

    useEffect(() =>{
        if (url){
            setSelectedBook(null);
        }
    }, [url], setSelectedBook);

    return(
        <div className="progress-bar" style={{ width: progress + '%' }}> </div>
    )
}

export default ProgressBar;