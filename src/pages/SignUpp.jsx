import axios from 'axios'
import React, { useState } from 'react'
import { signup }  from '../redux/Action'
import { useDispatch } from 'react-redux'
import { GoogleAuth } from '../Config'

function SignUpp() {

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
        <div className='p-100'>
            <div className="container text-center">
                <fieldset>
                    <div>
                        <div>
                            <h2>Hello!</h2>
                            <h3>Create new Account</h3>
                            <form action="">
                                <input type="text" placeholder='Enter Uername' className='p-2 m-2 border-rounded' value={username} onChange={(e) => { setUsername(e.target.value) }} /><br />
                                <input type="email" placeholder='Enter Email' className='p-2 m-2 border-rounded' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                                <input type="password" placeholder='Enter password' className='p-2 m-2 border-rounded' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                                <button id='btn' onClick={handleSubmit}> SignUp</button><br />
                            </form>
                        </div>
                        <div>
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