
import React, { useState } from "react";
import { useRef } from "react";
import Student from "../../Classes/Student";
import ProgressBar2 from "./../ProgressBars/ProgressBar2";





const UploadStudent = () => {

    const [student, setStudent] = useState(null);


    const SSN = useRef(null);
    const Fname = useRef(null);
    const Minit = useRef(null);
    const Lname = useRef(null);
    const Birthdate = useRef(null);
    const Major = useRef(null);


    const submitForm = () => {


        setStudent(new Student(
            SSN.current.value,
            Fname.current.value,
            Minit.current.value,
            Lname.current.value,
            Birthdate.current.value,
            Major.current.value,
        ));


    }

    return (
        <div className="uploadForm">
            SSN:<input type="text" ref={SSN} />
            Fname: <input type="text" ref={Fname} />
            Minit: <input type="text" ref={Minit} />
            Lname: <input type="text" ref={Lname} />
            Birthdate: <input type="text" ref={Birthdate} />
            Major: <input type="text" ref={Major} />
            <input type="submit" onClick={submitForm} />

            {student &&
                <ProgressBar2 student={student} setSelectedStudent={setStudent}/>
            }

        </div>


    );
}


export default UploadStudent;