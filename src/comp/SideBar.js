import * as React from 'react';


import Chip from '@mui/material/Chip';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';



const SideBar = ({ setView }) => {

    const handleClick = (view) => {
        setView(view)
    }


    return (
        <div>

        <Typography variant="h5" > KFUPM LIBSYS</Typography>

        <div className="Navbar">
            <Stack direction="row" spacing={1}>
                <Chip label="Books" onClick={() => handleClick("Books")} />
                     /
                <Chip label="Users"  onClick={() => handleClick("Users")} />
            </Stack>

        </div>
        </div>


    )
}

export default SideBar;