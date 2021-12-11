
import useFirestore from '../../hooks/useFirestore';
import deleteUser from '../../hooks/deleteStudent';

import React, { useRef } from 'react';


import UploadStudent from '../Forms/UploadStudent';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography } from '@mui/material';
const UserGrid = ({ student }) => {

    const { docs } = useFirestore('Student')


    const deleteStudent = (doc) => {
        console.log(doc)
        deleteUser(doc.id);
    }


    return (
        <div>
            <UploadStudent />

            <div className="Stack">
                <Typography variant="h2" sx={{ mb: 3, mt: 3, fontWeight: 900 }}> Current clients </Typography>
                {docs && docs.map(doc => (
                    <div className="userCard">
                        <PersonIcon />
                        <p>{doc.Fname}</p>
                        <p>{doc.Minit}</p>
                        <p>{doc.Lname}</p>
                        <p>{doc.SSN}</p>
                        <p>{doc.Birthdate}</p>
                        <p className="delete" onClick={() => { deleteStudent(doc) }}><DeleteForeverIcon color="warning" /></p>
                    </div>
                ))}
            </div>
        </div>

    )

}


export default UserGrid;