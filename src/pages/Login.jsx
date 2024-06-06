import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/Action'

function Login() {

    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            username, email, password
        }
        dispatch(signup(user))
        console.log(user);
        setPassword("")
        setEmail("")
        setUsername("")
    }

    return (
        <div className='p-100 sign_up'>
            <div className="container pt-100">
                <fieldset className='pt-4'>
                    <div className='pt-5 pb-5'>
                        <div className='pt-5 pb-5'>
                            <h2 className='Greate-vibe f-primary'>Welcome</h2>
                            <h3>Create new Account</h3>
                            <form action="" className='pt-5'>
                                <input type="email" className='w-25' placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                                <input type="password" className='w-25' placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                                <button className='btn btn-black' onClick={handleSubmit}> SignUp</button><br />
                            </form>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Login