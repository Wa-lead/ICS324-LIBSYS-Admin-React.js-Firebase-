
import useFirestore from '../../hooks/useFirestore';
import deleteUser from '../../hooks/deleteStudent';

import React, { useRef } from 'react';


import UploadStudent from '../Forms/UploadStudent';
import PersonIcon from '@mui/icons-material/Person';
import Person from '@mui/icons-material/Person';
import { Delete, DeleteForever } from '@mui/icons-material';

const UserGrid = ({student}) => {

    const { docs } = useFirestore('Student')


    const deleteStudent = (doc) => {
      console.log(doc)
        deleteUser(doc.id);
    }


    return (
        <div>
            <UploadStudent/>

        <div className="Stack">
            {docs && docs.map(doc => (
             <div className="userCard">
               <Person/>
               <p>{doc.Fname}</p>
               <p>{doc.Minit}</p>
               <p>{doc.Lname}</p>
               <p>{doc.SSN}</p>
               <p>{doc.Birthdate}</p>
               <p className="delete" onClick={()=>{deleteStudent(doc)}}><DeleteForever color="warning" /></p>
               </div>
            ))}
        </div>
        </div>

    )

}


export default UserGrid;