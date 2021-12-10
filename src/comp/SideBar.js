import * as React from 'react';


import Chip from '@mui/material/Chip';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';



const SideBar = ({ setView }) => {

    const handleClick = (view) => {
        setView(view)
    }


    return (


        <div className="Navbar">
            <Typography variant="h4" sx={{ m: 2 }}> KFUPM LIBSYS</Typography>

            <Stack direction="row" spacing={1} sx={{ m: 2 }}>
                <Chip label="Books" onClick={() => handleClick("Books")} />
                <Typography variant="h5" > /</Typography>

                <Chip label="Users"  onClick={() => handleClick("Users")} />
            </Stack>

        </div>


    )
}

export default SideBar;