import React, { useEffect } from "react";
import useUploadUser from "../../hooks/useUploadUser"



const ProgressBar2 = ({User, setSelectedUser}) =>{

    useUploadUser(User);


    return(
        <h1>User Added</h1>
    )
}

export default ProgressBar2;