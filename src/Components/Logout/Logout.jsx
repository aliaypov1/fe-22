import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';

const Logout = () => {
    const logout = async()=>{
        const res = await fetch(`${BASE_URL}Logout`,{
            method:'POST'
        })
    }
    return (
       
            <a href="#"
            onClick={logout}
            style={{fontSize:'25px',color:'white',marginRight:'20px'}}>выйти
            </a>
      
    );
};

export default Logout;