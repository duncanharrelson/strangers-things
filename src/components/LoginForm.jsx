import React from "react";
import {Routes, Route} from "react-router-dom"
import { useState } from 'react'
import { userLogin } from "../api/index";


function LogIn () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState(null);
    const [valid, setValid]=useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await userLogin(username, password);
        //JWT is returned in the response, utilized in session storage
        return response;
    }
        return (
            <>
            <h2>Log In!!</h2>
            {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(e)=> setUsername(e.target.value)} />
                {username.length <=8 ? (
                <p>Username must be 8 characters</p>) : (<p>Username is good to go</p>
                )}
            </label>
            <label>
                Password: <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
    
            </label>
            <button>Submit</button>
        </form>
        </>
    )};
    // 2306-FTB-ET-WEB-AM


export default LogIn
