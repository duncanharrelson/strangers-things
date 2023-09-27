import { useNavigate } from "react-router-dom"


const PostListName = ({post}) => {
    const navigate = useNavigate();    

    return (
        <>
            <h2>{post.title}</h2>
            <button onClick={() => navigate(`/${post.id}`)} post={post}>See Details</button>
        </>
    )
}

export default PostListName
