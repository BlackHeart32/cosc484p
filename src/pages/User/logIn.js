import axios from 'axios';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MdTextsms } from "react-icons/md";
<<<<<<< HEAD
import {HiMail} from 'react-icons/hi'
import './user.scss'
=======
import { HiMail } from 'react-icons/hi'
// import MongoClient from 'mongodb'
import '../style.scss'
>>>>>>> 7763522b5b627ab126aee9820756017c9b1b66a9

const LogIn = () => {

    return (
        <>
            <UserForm></UserForm>
        </>
    )
}


<<<<<<< HEAD
const UserForm = () =>{
    
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
//Testing variables
const [counter, setCounter] = useState(0)
axios.defaults.withCredentials= true;

const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('localhost:4000', {username:username, password:password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    
}
=======
// const data = await mongoClient
//     .db()
//     .collection('mfjuser')
//     .find()
//     .toArray()

//     console.log(data)

const UserForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //Testing variables
    const [counter, setCounter] = useState(0)
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://mfjserver.vercel.app/authenticate', { username: username, password: password })
            .then(result => console.log(result))
            .catch(err => console.log(err))

    }
>>>>>>> 7763522b5b627ab126aee9820756017c9b1b66a9




    return (
        <>

            <form className="user-form" id='login' onSubmit={handleSubmit} >
                <label htmlFor="login">Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label htmlFor="login">Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                </label>

                <button type="submit" >Log In</button>
                <hr />
                <h4>Password Recovery</h4>
                <div className='icon_row'>
                    <Link><HiMail size={30} color="#783740" /></Link>

                </div>
                <div className='icon_row'>
                    <Link><MdTextsms size={30} color="#783740" /></Link>
                </div>
                <Link></Link>
            </form>
        </>)
}

//****** Server Comm ******/

export default LogIn;
