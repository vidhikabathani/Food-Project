import React, { useState } from 'react'
import { book_table } from '../redux/Action';
import { useDispatch } from 'react-redux';

function BookTable() {
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[phone,setPhone]=useState("");
    let[person,setPerson]=useState("");
    let[date,setDate]=useState("");
    let[time,setTime]=useState("");
    let dispatch=useDispatch();

    const handlebook = (e) => { 
        e.preventDefault();
        let table = {
            name, email, phone,person, date,time
        }
        dispatch(book_table(table))
        console.log(table);
        alert("Book table successfully!")
        setEmail("")
        setName("")
        setPerson("")
        setPhone("")
        setTime("")
        setDate("")
    }
    return (
        <div className='p-100'>
            <div className="text-center">
                <h1>Book Table in <span className='f-primary'>PATO</span></h1>
                <input type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} value={name}/>
                <input type="number" placeholder='Enter PhoneNumber' onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
                <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <input type="date" onChange={(e)=>{setDate(e.target.value)}} value={date}/>
                <input type="time" onChange={(e)=>{setTime(e.target.value)}} value={time}/>
                <input type="number" placeholder='Enter Person Number' onChange={(e)=>{setPerson(e.target.value)}} value={person}/>
                <button onClick={handlebook}>Book Table</button>
            </div>
        </div>
    )
}

export default BookTable