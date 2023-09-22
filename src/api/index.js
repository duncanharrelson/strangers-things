const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`

const getPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

const userLogin = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    username: username, 
                    password: password
                }
            }),
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

const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    username: username, 
                    password: password
                }
            }),
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

const myData = async (token) => {
    try {
        const response = await fetch(`${API_URL}/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

export default (getPosts, userLogin, registerUser, myData);