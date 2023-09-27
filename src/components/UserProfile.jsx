import react, { useEffect } from 'react'
import { fetchPosts } from "../api/index"
import { useState } from 'react'
// import { makeMessage } from '../api/index';
import { myData } from '../api/index';

const UserProfile = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMessage() {
      const authToken = sessionStorage.getItem("token")
      const response = await myData(authToken);
      const resultMessages = response.messages;
      if (response.success) {
        setMessages(resultMessages);
      } else {
        setError(response.error);
        console.error(error);
      }
    }
    getMessage();
  }, []);




  return (
    <>
      <h1> This is your profile shithead.</h1>

{messages.map((message) => {
  
        return (
          <>
            {/* <h2>{post.title}</h2> */}
            {/* <PostListName key={post.id} title={post.title} /> */}
            <div className="cards">
              <h2>Title: {message && message.post.title}</h2>
              <h2>Author: {message && message.fromUser.username}</h2>
              <h3>Description: {message && message.content}</h3>
            </div>
    </>
  );

})};  
</>
  )
}
    export default UserProfile
    
        
        




