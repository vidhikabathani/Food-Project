import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/Action'

function Signupp() {

    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            username, email, password
        }
        if(!user.username.trim()){
            alert("Username is required!")
        }
        else if(!user.email.trim()){
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
            dispatch(signup(user))
            console.log(user);
            alert("Account created");
            setPassword("")
            setEmail("")
            setUsername("")
        }
    }

    return (
        <div className='p-100 sign_up'>
            <div className="container pt-100">
                <fieldset>
                    <div className='pt-5 pb-1'>
                        <div className='pt-5 pb-5'>
                            <h2 className='Greate-vibe f-primary'>Welcome</h2>
                            <h3>Create new Account</h3>
                            <form action="" className='pt-5'>
                                <input type="text" className='col-md-4 col-12' placeholder='Enter Uername' value={username} onChange={(e) => { setUsername(e.target.value) }} /><br />
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

export default Signupp