import React, { useState, useContext } from 'react'
import ProfileContext from '../store/ProfileContext'

const Auth = () => {
    const profile = useContext(ProfileContext)

    const [username, setUsername] = useState('');

    console.log(profile);

    const onSubmitHandler = (e) => {
        e.preventDefault()
        profile.updateUsername(username)
    }

    return (
        <div>
            <p>{username}</p>
            <form onSubmit={onSubmitHandler}>
                <input placeholder='enter username' onChange={e => setUsername(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Auth