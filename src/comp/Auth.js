import * as React from 'react';


import Chip from '@mui/material/Chip';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import authenticateAdmin from '../functions/authenticateAdmin';



const Auth = ({ setAuth }) => {

    const userRef = React.useRef(null);
    const passRef = React.useRef(null)


    const authenticate = async (user, pass) => {
        let logged = await authenticateAdmin(user, pass)

        if (logged==true) {
            setAuth('yes');
        }

    }


    return (

        <div>
        <div className='AuthView'>
            <Typography variant="h2" sx={{ m: 2 }}> Welcome to KFUPM LIBSYS</Typography>

            <Stack direction="column" spacing={1} sx={{ m: 2 }}>
                Username: <input type="text"  ref={userRef}/>
                Passowrd: <input type="text"  ref={passRef}/>
                 <input type="submit" onClick={()=>authenticate(userRef.current.value, passRef.current.value)} />

            </Stack>
        </div>
        </div>
    )
}

export default Auth;