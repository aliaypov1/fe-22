import axios from 'axios';
import React, { useState } from 'react';
import SuccessAlert from '../UI/Alerts/SuccessAlert';
import ErrorAlert from '../UI/Alerts/ErrorAlert';

const ForgotPassword = () => {
    const [value, setValue] = useState('')
    const [successalert, setSuccessAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const forgotPassword = async () => {
        setLoading(true)
        try {
            const res = await axios.post('http://frez773-001-site1.atempurl.com/api/Auth/ForgotPassword', {
                recipientEmail: value
            })
            console.log(res.data)
            if (res.data.statusCode == 200) {
                setSuccessAlert(true)
                setErrorAlert(false)
            } else {
                setErrorAlert(true)
                setSuccessAlert(false)
            }
        } catch(e){
            setErrorAlert(true)
            setSuccessAlert(false)
        }
        setLoading(false)
       
    }
    if(loading) return <p>Loading...</p>
    return (
        <div>
            <SuccessAlert open={successalert} />
            <ErrorAlert open={errorAlert} />
            <input type="email" onChange={e => setValue(e.target.value)} />
            <button onClick={forgotPassword} >click</button>

        </div>
    );
};

export default ForgotPassword;