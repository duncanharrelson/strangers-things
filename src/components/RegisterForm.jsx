import { useState } from "react";

const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://strangers-things.herokuapp.com/${COHORT}`


const RegisterForm = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);

    async function handleClick(e) {   
        e.preventDefault();     
        try {
            const response = await fetch(API_URL, {
                method: "GET",               
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            const result = await response.json();
            console.log(response)
            setSuccessMessage(result.message);   
            setUsername(result.data.username);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2 className="auth">Authenticate!</h2>
            {username && <p>Welcome, {username}!</p>}
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </>
    )
}

export default RegisterForm