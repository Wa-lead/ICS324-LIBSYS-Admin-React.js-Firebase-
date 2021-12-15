import * as React from 'react';


import Chip from '@mui/material/Chip';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import authenticateAdmin from '../functions/authenticateAdmin';



const Auth = ({ setAuth }) => {

    const userRef = React.useRef(null);
    const passRef = React.useRef(null)


    const authenticate = (user, pass) => {
        let logged = authenticateAdmin(user, pass)

        if (logged) {
            setAuth('yes');
        }

    }


    return (


        <div>
            <Typography variant="h3" sx={{ m: 2 }}> Welcome to KFUPM LIBSYS, Librarian View</Typography>

            <Stack direction="column" spacing={1} sx={{ m: 2 }}>
                Username: <input type="text"  ref={userRef}/>
                Passowrd: <input type="text"  ref={passRef}/>
                 <input type="submit" onClick={()=>authenticate(userRef.current.value, passRef.current.value)} />

            </Stack>
        </div>

    )
}

export default Auth;