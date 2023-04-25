import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import style from './Form.module.css'


const Login = () => {
   
    const [userInput, setUserInput] = useState('')
    const [passwordInput,setPasswordInput] = useState('')
    const [rememberMe, setRemamberMe] = useState(false)
    const [checked, setChecked] = useState(false);
    const user = userInput
    const pass = passwordInput
    // const login = async() =>{
    //     const res = await fetch('http://frez773-001-site1.atempurl.com/api/Auth/Login',{
    //         mode:'no-cors',
    //         method:'POST',
    //         headers:{
    //             "accept": "text/plain",
    //             "Content-Type": "application/json"
    //         },
    //         body:JSON.stringify({
    //             userName: user,
    //             password: pass,
    //             rememberMe: true
    //         })


    //     })
    //     console.log(res)
    // }
    const login = async() => {
      try{
      const res = await axios.post(`${BASE_URL}Login`,{
        userName: user,
          password: pass,
          rememberMe: true
      })
      
      console.log(res.data)
      if(res.data.statusCode !== 200){
        console.log('err')
      }else{
        console.log('ok')
      }
    }catch(e){
      console.log(e)
    }
      
    }
    // const login = async() =>{
    //     const response = await fetch('http://frez773-001-site1.atempurl.com/api/Auth/Login', {
    //         // mode:'no-cors',
    //         method: 'POST',
    //         headers: {
    //             'accept': 'text/plain',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           userName: user,
    //           password: pass
    //         })
    //       })
    //       .then(response => {
    //         console.log(response)
    //       })
    //       .catch(error => {
    //         alert('error')
    //       });
    // }
    function handleCheckboxChange(event) {
      setChecked(event.target.checked);
    }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className={style.container}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={e => setUserInput(e.target.value)} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={e => setPasswordInput(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
         <input 
         style={{marginRight:"10px"}} 
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        onClick={() => setRemamberMe(prev => !prev)}
      />
      <label>Remember me</label>

       

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button disabled={!rememberMe} type="primary" htmlType="submit" style={{marginRight:'20px'}} onClick={login}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default Login;