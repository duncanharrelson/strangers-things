import react, { useEffect } from 'react'
import { fetchPosts } from "../api/index"
import { useState } from 'react'
import PostListName from './PostListName';

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
            post.toLowerCase().includes(searchParams)
            ) 
        : posts;

  return (
    <>
      <div>
        <label>
          Search{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      {postsToDisplay.map((post) => {
        return (
          <>
            {/* <h2>{post.title}</h2> */}
            {/* <PostListName key={post.id} title={post.title} /> */}
            <div id="container">
              <h2>Title: {post && post.title}</h2>
              <h2>Author: {post && post.author.username}</h2>
              <h3>Description: {post && post.description}</h3>
              <h3>Price: {post && post.price}</h3>
              <h3>Will Deliver: {post && `${post.willDeliver}`}</h3>
            </div>
          </>
        );
      })}
    </>
  );
};  

export default HomePage;
// export default function HomePage () {
//     return (
//         <>
//     <h1>Stranger's Things</h1>

//     <form>
//         <h2>Log in:</h2>
//         <label>
//             Username: <input/>
//             Password: <input/>

//             <h5>Not Registered? Click here.</h5>


//         </label>
//     </form>
//     </>
//     )
// }

// return ( 
//     <>
//     <div className="npr">
//         <h2 className="new-player">New Player Registration:</h2>
//         <form>
//             <label className="name">
//                 Name: <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
//             </label>
//             <label className="breed">
//                 Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed"/>
//             </label>
//             <br />
//             <br />
//             <button className="submit" type="submit">Submit</button>
//         </form>
//         </div>
//     </>
// );