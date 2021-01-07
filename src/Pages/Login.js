import { Button, Checkbox, Form, Input } from 'antd';
import React, {useContext, useState} from 'react'

import {UserContext} from "../Context/MovieContext"

export default function Login() {
  const [, setUser] = useContext(UserContext)
  const [input] = useState({username: "" , password: ""})

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (event) => {
    event.preventDefault()
    if (input.username === "admin" && input.password === "admin"){
      setUser({username: input.username})
      localStorage.setItem("user", JSON.stringify({username: "admin", password: "admin"}))
    }else{
      alert("username dan password gagal")
  };
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
     <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{
        marginTop:20,
        maxWidth:"50%",
        alignItems:"center"
      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form> 
    </>
  )
}
