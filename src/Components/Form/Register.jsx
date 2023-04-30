import React, { useEffect, useState } from 'react';
import style from './Form.module.css'
import { Input } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
const Register = () => {
   const [value, setValue] = useState({
    email:'',
    password:'',
    userName:''
   })

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
        try {
            const resp = await fetch("http://frez773-001-site1.atempurl.com/api/Auth/Register", {
                // credentials:'include',
                // mode:'no-cors',
                method: "POST",
                headers: {
                    "accept": "*/*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(value),
                // credentials:'include'
            })
            
            ;
            
            console.log(resp)
        } catch (error) {
            console.error(error)
        }
    }
    
   
   
    const getCurrentUser = async()=>{
        try {
            const resp = await fetch("http://frez773-001-site1.atempurl.com/api/Auth/GetCurrentUser", {
                mode:'no-cors',
                credentials: 'include', // передача кук в запросе
               
            })
            ;
            console.log(resp)
        } catch (error) {
            console.error(error)
        }
    
    }
    
    return (
        <div className={style.container} >
            <form type='Submit' className={style.inputs}>
                <label htmlFor="">
                    <Input style={{ width: '300px' }} type="email" placeholder='Email' onChange={e => setValue({...value,email:e.target.value})} />
                </label>
                <label htmlFor="">
                    <Input type="password" placeholder='Password' onChange={e => setValue({...value,password:e.target.value})} />
                </label>
                <label htmlFor="">
                    <Input type="text" placeholder='userName' onChange={e => setValue({...value,userName:e.target.value})} />
                </label>
                <button onClick={e => e.preventDefault(e) & createUser(e)}>Submit</button>
            </form>
            <button onClick={getCurrentUser}>www</button>
        </div>
    );
};

export default Register;