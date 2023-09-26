import react from 'react'
// import  registerUser  from "../api"
import { useState } from 'react'

const COHORT = "2306-FTB-ET-WEB-AM"  
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`

const UserProfile = () => {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const response = await fetch(`${API_URL}/posts`)
            const result = await response.json();
            console.log(result);
            return result
          } catch (err) {
            console.error(err);
          };
        }
        return (
            <>
             {getPosts.map((posts) => {
             })}
            </>
        )
        
    }

    export default UserProfile
    
        
        




