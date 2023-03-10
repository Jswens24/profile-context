import axios from 'axios';
import React, { useState, useContext } from 'react';
import ProfileContext from '../store/ProfileContext';

const Auth = () => {
    const profile = useContext(ProfileContext);
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // console.log(profile);

    const onSubmitHandler = (e) => {
        e.preventDefault()
        let body = { username, password }
        axios.post(`/api/${register ? 'register' : 'login'}`, body)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {register ? 'Register below' : 'Login Below'}
            <form onSubmit={onSubmitHandler}>
                <input placeholder='enter username' onChange={e => setUsername(e.target.value)} />
                <input placeholder='enter password' onChange={e => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
            <button onClick={() => setRegister(!register)}>{register ? 'need to login?' : 'need to register?'}</button>
        </div>
    )
}

export default Auth