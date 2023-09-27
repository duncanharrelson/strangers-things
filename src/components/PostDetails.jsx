import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../api/index";


const SinglePost = () => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    const {id} = useParams();
    

    useEffect(() => {
        async function getSinglePost() {
            const response = await fetchSinglePost(id);
            if (response.success) {
                setPost(response.data.post);
            } else {
                setError(response.error.message);
                console.error(error);
            }
        }
        getSinglePost();
    }, [])   
    

    return (
        <>
            <h2>Title: {post && post.title}</h2>
            <h3>Description: {post && post.description}</h3>
            <h3>Price: {post && post.price}</h3>
            <h3>Will Deliver: {post && post.willDeliver}</h3>
        </>
    )
} 

export default SinglePost;