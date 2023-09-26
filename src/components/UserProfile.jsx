import react, { useEffect } from 'react'
import { fetchPosts } from "../api/index"
import { useState } from 'react'

const UserProfile = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const response = await fetchPosts();
      const posts = response.data.posts;
      if (response.success) {
        return posts;
      } else {
        setError(response.error);
        console.error(error);
      }
    }
    getPosts();
  }, []);

  return (
    <>
      {getPosts.map((posts) => {
             })}
    </>
  );
};  

    export default UserProfile
    
        
        




