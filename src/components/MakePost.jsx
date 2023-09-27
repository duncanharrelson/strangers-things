import { useState } from "react";
import { makePost } from "../api";

const NewPostForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [willDeliver, setWillDeliver] = useState(null);
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        sessionStorage.setItem("token", token)
        let authToken = sessionStorage.getItem("token")
        const response = await makePost(title, description, price, willDeliver, authToken);
    }

    return ( 
        <>
            <h3 className="new-post">New Post</h3>
            <form onSubmit={handleSubmit}>
                <label for="title">
                    Title: <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label for="description">
                    Description: <input value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <label for="price">
                    Price: <input value={price} onChange={(e) => setPrice(e.target.value)}/>
                </label>
                <label for="will-deliver">
                    Will Deliver? <input type="checkbox" value={willDeliver} onChange={(e) => setWillDeliver(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
 
export default NewPostForm;