import * as React from 'react';


import Chip from '@mui/material/Chip';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import image from './heroimage.png';



const SideBar = ({ setView }) => {

    const handleClick = (view) => {
        setView(view)
    }


    return (


        <div className="Navbar">
            <div>
            <Typography variant="h3" sx={{ m: 2 }}> Welcome to KFUPM LIBSYS, Librarian View</Typography>

            <Stack direction="column" spacing={1} sx={{ m: 2 }}>
                <Chip label="Books" onClick={() => handleClick("Books")} />
                {/* <Typography variant="h5" > /</Typography> */}
                <Chip label="Users"  onClick={() => handleClick("Users")} />
                <Chip label="Reports"  onClick={() => handleClick("Reports")} />
                <Chip label="Borrow"  onClick={() => handleClick("Borrow")} />
            </Stack>
            </div>
        </div>


    )
}

export default SideBar;