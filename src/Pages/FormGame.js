import { Form, Input, Select } from 'antd';
import React, {useState} from 'react'

export default function FormGame() {
    const [InputText]=useState({
            name:"",
            genre:"",
            singleplayer:true,
            multiplayer:true,
            platform:"",
            release:0,
            img_url:"",
            id:null
    })
    const {Option} = Select
    const formItemLayout = {
        labelCol: {
            xs: {
            span: 24,
        },
            sm: {
                span: 5,
            },
        },
        wrapperCol: {
            xs: {
            span: 24,
        },
        sm: {
            span: 12,
        },
  },
};
    return (
        <>
         <Form {...formItemLayout}>
              <Form.Item
                label="Nama Game"
                validateStatus="error"
                help="At least > 1 characters !">
                <Input placeholder="fill the game name" id="error" value={InputText.name}/>
              </Form.Item>
              <Form.Item
                label="Genre"
                validateStatus="error"
                help="At least > 1 characters !">
                <Input placeholder="fill the game genre" id="error" value={InputText.genre}/>
              </Form.Item>
              <Form.Item label="Single Player" hasFeedback validateStatus="error">
                <Select allowClear>
                    <Option value="1">yes</Option>
                    <Option value="2">no</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Multi Player" hasFeedback validateStatus="error">
                <Select allowClear>
                    <Option value="1">yes</Option>
                    <Option value="2">no</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Platform"
                validateStatus="error"
                help="At least > 1 characters !">
                <Input placeholder="fill the game platform" id="error" value={InputText.platform}/>
              </Form.Item>
              <Form.Item
                label="release"
                validateStatus="error"
                help="At least > 1 characters !">
                <Input placeholder="fill the year releases" id="error" value={InputText.release}/>
              </Form.Item>
              <Form.Item
                label="image url"
                validateStatus="error"
                help="At least > 1 characters !">
                <Input placeholder="fill the link game's image" id="error" value={InputText.img_url}/>
              </Form.Item>
             </Form>   
        </>
    )
}

