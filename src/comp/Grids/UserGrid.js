
import useFirestore from '../../hooks/useFirestore';
import deleteUser from '../../hooks/deleteStudent';

import React, { useRef } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import UploadStudent from '../Forms/UploadStudent';

const UserGrid = ({student}) => {

    const { docs } = useFirestore('Student')


    const deleteStudent = (doc) => {
        deleteUser(doc);
    }


    return (
        <div>
            <UploadStudent/>

        <div className="Stack">
            {docs && docs.map(doc => (
             <Card sx={{ maxWidth: 1000 }} sx={{ m: 2 }} style={{ backgroundColor: "#DEE2E5" }}>
                 <button onClick={()=> deleteStudent(doc.id)}> delete</button>
             <CardActionArea>
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {doc.SSN}
                 </Typography>
                 <Typography gutterBottom variant="h7" component="div">
                   {doc.Lname}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   Lizards are a widespread group of squamate reptiles, with over 6,000
                   species, ranging across all continents except Antarctica
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
            ))}
        </div>
        </div>

    )

}


export default UserGrid;