


import React, { useRef } from 'react';


import UploadUser from '../Forms/UploadUser';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography } from '@mui/material';
import useFirestore from '../../hooks/useFirestore';
import deleteUser from '../../functions/deleteUser';
import useReport1 from '../../hooks/Report1';
import useReport33 from '../../hooks/Report33';
import useReport2 from '../../hooks/Report2';


const Report1 = ({ User }) => {


    const { docs } = useReport1(';')
 

    return (
        <div>
            <div className="Stack">
                <Typography variant="h2" sx={{ mb: 3, mt: 3, fontWeight: 900 }}> Users with no reservations </Typography>
                {docs && docs.map(doc => (
                    <div className="userCard">
                        <PersonIcon />
                        <p>{doc.Fname}</p>
                        <p>{doc.Lname}</p>
                        <p>{doc.SSN}</p>
                        <p>{doc.Department}</p>
                        <p>{doc.Role}</p>
                        <p>{doc.Birthdate}</p>
                    </div>
                ))}
            </div>
        </div>

    )

}


export default Report1;