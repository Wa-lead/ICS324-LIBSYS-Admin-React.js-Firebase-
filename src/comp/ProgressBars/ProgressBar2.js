import React, { useEffect } from "react";
import useUploadStudent from "../../hooks/useUploadStudent"



const ProgressBar2 = ({student, setSelectedStudent}) =>{

    useUploadStudent(student);


    return(
        <h1>User Added</h1>
    )
}

export default ProgressBar2;