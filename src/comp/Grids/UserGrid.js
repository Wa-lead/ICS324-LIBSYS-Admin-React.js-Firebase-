


import React, { useRef } from 'react';


import UploadUser from '../Forms/UploadUser';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography } from '@mui/material';
import useFirestore from '../../hooks/useFirestore';
import deleteUser from '../../functions/deleteUser';

const UserGrid = ({ User }) => {

     const Users = "User"

    const { docs } = useFirestore(Users)
    


    const DeleteUser = (doc) => {
        console.log(doc)
        deleteUser(doc.id);
    }


    return (
        <div>
            <UploadUser />

            <div className="Stack">
                <Typography variant="h2" sx={{ mb: 3, mt: 3, fontWeight: 900 }}> Current clients </Typography>
                {docs && docs.map(doc => (
                    <div className="userCard">
                        <PersonIcon />
                        <p>{doc.Fname}</p>
                        <p>{doc.Lname}</p>
                        <p>{doc.SSN}</p>
                        <p>{doc.Department}</p>
                        <p>{doc.Role}</p>
                        <p>{doc.Birthdate}</p>
                        <p className="delete" onClick={() => { DeleteUser(doc) }}><DeleteForeverIcon color="warning" /></p>
                    </div>
                ))}
            </div>
        </div>

    )

}


export default UserGrid;