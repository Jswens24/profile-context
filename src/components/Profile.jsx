import React, { useContext } from 'react'
import ProfileContext from '../store/ProfileContext'

const Profile = () => {
    const profile = useContext(ProfileContext)
    return (
        <div>
            <p>Username: {profile.username}</p>
            <button onClick={() => profile.deleteUsername()}>Delete Username</button>
        </div>
    )
}

export default Profile