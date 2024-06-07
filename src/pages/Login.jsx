
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Action'

function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email, password
        }
        if(!user.email.trim()){
            alert("Email is required!")
        }
        else if(email === "" || !email.includes("@")){
            alert("Please enter a valid email address")
        }
        else if(!user.password.trim()){
            alert("Password is required!")
        }
        else if(user.password.length<7){
            alert("Password must be 8 characters!")
        }
        else{
            dispatch(login(user))
            console.log(user);
            setPassword("")
            setEmail("")
        }
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
                                <input type="email" className='col-md-4 col-12' placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                                <input type="password" className='col-md-4 col-12' placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
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