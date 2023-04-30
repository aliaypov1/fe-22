import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import style from './Form.module.css'


const Login = () => {

  // axios.defaults.withCredentials = true;
  const [rememberMe, setRemamberMe] = useState(false)
  const [checked, setChecked] = useState(false);
  const [checkeds, setCheckeds] = useState(false);
  const [valid, setValid] = useState(false)

  const [inputValue, setInputValue] = useState({
    userName: '',
    password: '',
    rememberMe: true,
  })


  // console.log(inputValue);
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
  // const login = async () => {
  //   try {
  //     const resp = await fetch("http://frez773-001-site1.atempurl.com/api/Auth/Login", {
  //         // credentials:'include',
  //         // mode:'no-cors',
  //         method: "POST",
  //         headers: {
  //             "accept": "*/*",
  //             "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(inputValue),
  //         // credentials:'include'
  //     })

  //     ;

  //     console.log(resp)
  // } catch (error) {
  //     console.error(error)
  // }

  // }
  const login = async () => {

    
      try {
        const response = await fetch('http://frez773-001-site1.atempurl.com/api/Auth/Login', {
          mode:'no-cors',
          method: 'POST',
          headers: {
            "accept": "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputValue),
          credentials: 'include'
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.log('Failed to login');
        }
      } catch (error) {
        console.error(error);
      
    }






  }
  const getCurrentUser = async () => {
    try {
      const response = await fetch('http://frez773-001-site1.atempurl.com/api/Auth/GetCurrentUser', { credentials: 'include' });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log('Failed to fetch current user');
      }
    } catch (error) {
      console.error(error);
    }

  }
  // const instance = axios.create({
  //   baseURL: 'https://example.com/api',
  //   withCredentials: true
  // });

  // instance.post('/Auth/Login', {
  //   // данные для авторизации
  // })
  // .then(response => {
  //   // обработка успешного ответа
  //   console.log(response);
  // })
  // .catch(error => {
  //   // обработка ошибки
  // });
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
  function handleCheckboxChangee(event) {
    setCheckeds(event.target.checked);
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
        {/* <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={e => setUserInput(e.target.value)} placeholder="Username" /> */}
        <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={e => setInputValue({ ...inputValue, userName: e.target.value })} placeholder="Username" />

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
          onChange={e => setInputValue({ ...inputValue, password: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <input
          style={{ marginRight: "10px" }}
          type="checkbox"
          checked={checkeds}
          onChange={handleCheckboxChangee}
          onClick={() => setValid(prev => !prev)}
          name='remember'
        />
        <label style={{ marginRight: '20px' }}>rememberMy</label>
        <input
          style={{ marginRight: "10px" }}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          onClick={() => setRemamberMe(prev => !prev)}
          name='valid'
        />
        <label>I agree with the policy</label>


        {/* <button onClick={getCurrentUser}>get</button> */}

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button disabled={!rememberMe} type="primary" htmlType="submit" style={{ marginRight: '20px' }} onClick={login}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
      <button onClick={() => getCurrentUser()}>dddaa</button>
    </Form>
  );
};
export default Login;