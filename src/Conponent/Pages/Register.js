import React, { useState } from "react";
import "../Style/Login.css"
import { FaUserCircle } from "react-icons/fa";

export default function Register() {

    const url =""
    const [Data, setData] = useState({
        Username: "",
        Email: "",
        Password: "",


    })
    console.log(Data);

    const onChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })

        //setInput({...Input,[e.target.name]:e.target.value})

    }

    const submit = (e) => {
        e.preventDefault();

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: Data.Username,

                email: Data.Email,
                password: Data.Password
            })
        });

    }

    return (
        <div>
            <div className="main">

                <div className="submain">
                    <div>
                        <FaUserCircle size="40px" />
                    </div>
                    <div>
                        <h2>Register</h2>
                    </div>
                    <div>
                        <input type="text" name="Username" placeholder="Username" value={Data.Username} onChange={onChange} />
                    </div>
                    <div>
                        <input type="text" name="Email" placeholder="Email" value={Data.Email} onChange={onChange} />
                    </div>
                    <div>
                        <input type="Password" name="Password" placeholder="Password" value={Data.Password} onChange={onChange} />
                    </div>
                    <div>
                        <button onClick={submit}>Submit</button>
                    </div>


                </div>


            </div>

        </div>
    );
}