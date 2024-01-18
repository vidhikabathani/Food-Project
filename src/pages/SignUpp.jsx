import axios from 'axios'
import React, { useState } from 'react'
import { Signup } from '../redux/Action'
import { useDispatch } from 'react-redux'
import { GoogleAuth } from '../Config'

function SignUpp() {

    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()

    const handleSignup = async (data) => {
        let user = await axios.post("http://localhost:3100/users", data)
        dispatch(Signup(user.data))
        console.log(user);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            username, email, password
        }
        handleSignup(user)
        setPassword("")
        setEmail("")
        setUsername("")
    }

    const handleGoogleauth=()=>{
        GoogleAuth().then((data)=>{
            console.log(data);
        })
    }

    return (
        <div className='p-100 sign_up'>
            <div className="container pt-100 center">
                <fieldset>
                    <div className="flex align_center">
                        <div className='w-50'>
                            <h2>Hello!</h2>
                            <h3>Create new Account</h3>
                            <form action="">
                                <input type="text" placeholder='Enter Uername' value={username} onChange={(e) => { setUsername(e.target.value) }} /><br />
                                <input type="email" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                                <input type="password" placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                                <button id='btn' onClick={handleSubmit}> SignUp</button><br />
                            </form>
                        </div>
                        <div className='w-50 bg_primary p-100'>
                                <span>Already have an Account?</span><br />
                                <button>Login</button><br />
                                <button onClick={handleGoogleauth}>SignUp with Google</button>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default SignUpp