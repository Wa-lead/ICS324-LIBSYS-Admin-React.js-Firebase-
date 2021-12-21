


import React, { useRef } from 'react';


import UploadUser from '../Forms/UploadUser';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography } from '@mui/material';
import useFirestore from '../../hooks/useFirestore';
import deleteUser from '../../functions/deleteUser';
import useReport1 from '../../hooks/Report1';
import useReport33 from '../../hooks/Report33';
import useReport4 from '../../hooks/Report4';


const Report4 = ({ User }) => {


    const { docs } = useReport4(';')
    console.log(docs);
 

    return (
        <div>
            <div className="Stack">
                <Typography variant="h2" sx={{ mb: 3, mt: 3, fontWeight: 900 }}> Users who return at least 1 day before </Typography>
                {docs && docs.map(doc => (
                    <div className="userCard">
                        <PersonIcon />
                        <p>{doc.Fname}</p>
                        <p>{doc.Lname}</p>
                        <p>{doc.SSN}</p>
                        <p>{doc.Department}</p>
                        <p>{doc.Role}</p>
                        < p style={{color: 'orange'}}>Count: {doc.num}</p>
                    </div>
                ))}
            </div>
        </div>

    )

}


export default Report4;