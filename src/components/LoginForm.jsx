import React from "react";
import userLogin from '..//api/index'
import {Routes, Route} from "react-router-dom"
import { useState } from 'react'

const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`

function LogIn () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState(null);
    const [valid, setValid]=useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        
            try {
                const response = await fetch(`${API_URL}/users/login`, {
                    method: "POST",
                    body: JSON.stringify({
                        user: {
                            "username": username, 
                            "password": password
                        }
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const result = await response.json();
                return result;
            } catch (err) {
                console.error(err);
            }
        
        
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
