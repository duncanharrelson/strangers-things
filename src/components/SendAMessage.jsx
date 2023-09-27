import { useState } from 'react'
import {react} from 'react'

const COHORT = "2306-FTB-ET-WEB-AM"  
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`



const sendMessage = async (id, message) => {
    const [content, setContent] = useState("")
    const authToken = sessionStorage.getItem("token") 
    console.log(authToken)
    try {
        const response = await fetch(`${API_URL}/posts/${id}/messages`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify({
            message: {
              'content': message
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
    
return (
    <>
    {authToken && 
    <form>
        <label>
            <textarea value={content} onChange={(e)=>setContent(e.target.value)} name="textarea" id="textarea" cols="30" rows="10"placeholder="Leave you message here."></textarea>
            <button>Send Message</button>
        </label>
    </form>
    }
    </>
)
}


  export default sendMessage