import { useState } from "react";
import  registerUser  from "../api"

const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`


const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();  
        try {
                const response = await fetch(`${API_URL}/users/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: {
                            username: username, 
                            password: password
                        }
                    })            
                })
                const result = await response.json();
                console.log(result);
                return result;
            } catch (err) {
                console.error(err);
            }
        }


    return (
        <>        
            <h2 className="sign-up">Sign Up</h2>
            { error && <p>{error}</p> }
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} minLength={8} required/>
                </label>
                <br />
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>        
        </>
    )
    
 
}
export default SignUpForm;