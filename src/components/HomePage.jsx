import react, { useEffect } from 'react'
import { fetchPosts } from "../api/index"
import { useState } from 'react'
import PostListName from './PostListName';
import  SendAMessage from "./SendAMessage";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    async function getPosts() {
      const response = await fetchPosts();
      const posts = response.data.posts;
      if (response.success) {
        setPosts(posts);
      } else {
        setError(response.error);
        console.error(error);
      }
    }
    getPosts();
  }, []);

  const postsToDisplay = searchParams
        ? posts.filter((post) => 
            post.title.toLowerCase().includes(searchParams)
            ) 
        : posts;

  return (
    <>
      <div className='searchbar'>
        <label>
          Search Posts:{" "}
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      {postsToDisplay.map((post) => {
        return (
          <>
            {/* <h2>{post.title}</h2> */}
            {/* <PostListName key={post.id} title={post.title} /> */}
            <div className="cards">
              <h2>Title: {post && post.title}</h2>
              <h2>Author: {post && post.author.username}</h2>
              <h3>Description: {post && post.description}</h3>
              <h3>Price: {post && post.price}</h3>
              <h3>Will Deliver: {post && `${post.willDeliver}`}</h3>

            {/* {authToken && <SendAMessage/>  */}
            
            </div>
          </>
        );
      })}
    </>
  );
};  

export default HomePage;