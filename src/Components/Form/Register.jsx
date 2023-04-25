import React, { useState } from 'react';
import style from './Form.module.css'
import { Input } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
const Register = () => {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [userInput, setUserInput] = useState('')
    const emails = emailInput
    const passwords = passwordInput
    const userNames = userInput

    // const createUser = async()=>{
    //     const response = await axios.post(`http://frez773-001-site1.atempurl.com/api/Auth/Register`,{
    //         email:email,
    //         password:password,
    //         userName:userName
    //     })
    // }
    // const createUser = async()=>{
    //     const response = await axios.post('http://frez773-001-site1.atempurl.com/api/Auth/Register', {
    //         email: email,
    //         password: password,
    //         userName:userName

    //       })
    //       .then(response => console.log(response.data))
    //       .catch(error => console.error(error))
    //     }
    
    
    
    const createUser = async () => {
        const res = await fetch('http://frez773-001-site1.atempurl.com/api/Auth/Register', {
           
            method: "POST",
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:emails,
                password:passwords,
                userName:userNames
            })
            
        })
        console.log(res)
       
    }

    return (
        <div className={style.container} >
            <form type='Submit' className={style.inputs}>
                <label htmlFor="">
                    <Input style={{ width: '300px' }} type="email" placeholder='Email' onChange={e => setEmailInput(e.target.value)} />
                </label>
                <label htmlFor="">
                    <Input type="password" placeholder='Password' onChange={e => setPasswordInput(e.target.value)} />
                </label>
                <label htmlFor="">
                    <Input type="text" placeholder='userName' onChange={e => setUserInput(e.target.value)} />
                </label>
                <button onClick={e => e.preventDefault(e) & createUser(e)}>Submit</button>
            </form>
        </div>
    );
};

export default Register;