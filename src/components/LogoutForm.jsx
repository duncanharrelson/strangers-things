import React from 'react'
import { useState } from 'react'

const [isLoggedin, setIsLoggedin] = useState(false)


const Logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);

    return (
        <>
            <div className='logoutuser'>
                <h3>Log Yo Muthufu*kin Ass Out </h3>
                <button onClick={Logout}>logout user</button>
            </div>
        </>
    )
}

export default Logout