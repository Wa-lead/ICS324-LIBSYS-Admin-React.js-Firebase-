
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import User from "../../Classes/User";
import ProgressBar2 from "../ProgressBars/ProgressBar2";





const UploadUser = () => {

    const [user, setUser] = useState(null);


    const SSN = useRef(null);
    const Fname = useRef(null);
    const Minit = useRef(null);
    const Lname = useRef(null);
    const Birthdate = useRef(null);
    const Department = useRef(null);
    const Role = useRef(null);
    const Password = useRef(null);




    const submitForm = () => {


        setUser(
            new User(
            SSN.current.value,
            Fname.current.value,
            Minit.current.value,
            Lname.current.value,
            Birthdate.current.value,
            Department.current.value,
            Role.current.value,
            Password.current.value
        ));


    }

    return (
        <div className="uploadForm">
            <Typography variant="h2" sx={{ mb:3, mt: 3, fontWeight: 900 }}> Fill the required fields </Typography>
            SSN:<input type="text" ref={SSN} />
            {/* <div className="flexBox"> */}
            Password: <input type="password" ref={Password} />
            Fname: <input type="text" ref={Fname} />
            Minit: <input type="text" ref={Minit} />
            Lname: <input type="text" ref={Lname} />
            {/* </div> */}
            Birthdate: <input type="date" ref={Birthdate} />
            Department: <input type="text" ref={Department} />
            Role: <input type="text" ref={Role} />
            <input type="submit" onClick={submitForm} />

            {user &&
                <ProgressBar2 User={user} setSelectedUser={setUser}/>
            }

        </div>


    );
}


export default UploadUser;