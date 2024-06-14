import React, { useState } from 'react'
import { book_table } from '../redux/Action';
import { useDispatch } from 'react-redux';

function BookTable() {
    let[fname,setFname]=useState("");
    let[lname,setLname]=useState("");
    let[email,setEmail]=useState("");
    let[phone,setPhone]=useState("");
    let[person,setPerson]=useState("");
    let[date,setDate]=useState("");
    let[time,setTime]=useState("");
    let dispatch=useDispatch();

    const handlebook = (e) => { 
        e.preventDefault();
        let table = {
            fname,lname, email, phone,person, date,time
        }
        
        if(!table.fname.trim()){
            alert("First Name is required!")
        }
        else if(!table.lname.trim()){
            alert("Last Name is required!")
        }
        else if(!table.email.trim()){
            alert("Email is required!")
        }
        else if(email === "" || !email.includes("@")){
            alert("Please enter a valid email address")
        }
        else if(!table.person.trim()){
            alert("Enter Person Number!")
        }
        else if(!table.time.trim()){
            alert("Time is required foe Book a Table!")
        }
        else if(!table.date.trim()){
            alert("Date is required foe Book a Table!")
        }
        else if(!table.phone.trim()){
            alert("Phone Number is required!")
        }
        else if(table.phone.length<9){
            alert("Phone Number must be 10 Numbers!")
        }
        else{
            dispatch(book_table(table));
            alert("Book table successfully!")
            setEmail("")
            setFname("")
            setLname("")
            setPerson("")
            setPhone("")
            setTime("")
            setDate("")
        }
    }
    return (
        <div className='bg-gray'>
            <div className="container pb-2">
            <div className='p-100 book_table row justify-content-center'>
            <div className="text-center w-75 py-5">
                <h1 className='mb-5 py-4'>Book Table in <span className='f-primary'>PATO</span></h1>
                <input className='p-2 mb-2 w-25 me-1' type="text" placeholder='Enter First Name' onChange={(e)=>{setFname(e.target.value)}} value={fname}/>
                <input className='p-2 mb-2 w-25' type="text" placeholder='Enter Last Name' onChange={(e)=>{setLname(e.target.value)}} value={lname}/> <br />
                <input className='p-2 mb-2 w-50' type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/> <br />
                <input className='p-2 mb-2 w-25 me-1' type="number" placeholder='Enter PhoneNumber' onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
                <input className='p-2 mb-2 w-25' type="date" onChange={(e)=>{setDate(e.target.value)}} value={date}/> <br />
                <input className='p-2 mb-2 w-25 me-1' type="time" onChange={(e)=>{setTime(e.target.value)}} value={time}/>
                <input className='p-2 mb-2 w-25' type="number" placeholder='Enter Person Number' onChange={(e)=>{setPerson(e.target.value)}} value={person}/> <br /> <br />
                <button onClick={handlebook} className='mt-1 btn btn-black'>Book Table</button>
            </div>
        </div>
            </div>
        </div>
    )
}

export default BookTable