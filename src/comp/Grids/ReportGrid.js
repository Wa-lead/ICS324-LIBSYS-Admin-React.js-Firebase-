


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
import Report3 from './Report3';
import Report2 from './Report2';
import Report4 from './Report4';
import Report1 from './Report1';



const ReportGrid = ({ User }) => {


    const { docs } = useReport2(';')
 

    return (
        <div>
            <Report1/>
            <Report2/>
            <Report3/>
            <Report4/>
        </div>

    )

}


export default ReportGrid;