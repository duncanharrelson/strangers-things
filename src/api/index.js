const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`

const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

const CreateNewUser = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

export default (fetchPosts, CreateNewUser);