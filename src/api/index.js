const COHORT = "2306-FTB-ET-WEB-AM"  
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`

export async function fetchPosts() {
    try {
      const response = await fetch(`${API_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

export async function userLogin (username, password){
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    "username": username, 
                    "password": password
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

export async function registerUser(username, password) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })            
        })
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function makePost(title, description, price, willDeliver, token) {
    try {
        const response = await fetch(`${API_URL}/posts`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            post: {
              "title": title,
              "description": description,
              "price": price,
              "willDeliver": willDeliver
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
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