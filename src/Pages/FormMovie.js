import { Form, Input } from 'antd';
import React, {useState} from 'react'

export default function FormMovie() {
    const [InputText] = useState({
            title:"",
            description:"",
            year:0,
            duration:0,
            genre:"",
            rating:0,
            review:"",
            img_url:"",
            id:null
    })
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
    const validateMessage=(a)=>{
        if(!a){
            return "must fill the blank field !"
        }else if(a < 2){
            return "at least more than 3 characters !"
        }
    }
        return(
            <>
             <Form {...formItemLayout}>
              <Form.Item
                label="Nama Film"
                validateMessage={validateMessage(InputText.title)}
                >
                <Input placeholder="fill the movie name" id="error" value={InputText.title}/>
              </Form.Item>
              <Form.Item
                label="Deskripsi"
                validateMessage={validateMessage(InputText.description)}
                >
                <Input.TextArea placeholder="fill the movie genre" id="error" value={InputText.description}/>
              </Form.Item>
              <Form.Item
                label="Year"
                validateMessage={validateMessage(InputText.year)}
                >
                <Input placeholder="fill the movie year release" id="error" value={InputText.year}/>
              </Form.Item>
              <Form.Item
                label="duration"
                validateMessage={validateMessage(InputText.duration)}
                >
                <Input placeholder="fill the movie duration" id="error" value={InputText.duration}/>
              </Form.Item>
              <Form.Item
                label="genre"
                validateMessage={validateMessage(InputText.genre)}
                >
                <Input placeholder="fill the movie genre" id="error" value={InputText.genre}/>
              </Form.Item>
              <Form.Item
                label="rating"
                validateMessage={validateMessage(InputText.rating)}
                >
                <Input placeholder="fill the rating .../10" id="error" value={InputText.rating}/>
              </Form.Item>
              <Form.Item
                label="review"
                validateMessage={validateMessage(InputText.review)}
                >
                <Input.TextArea placeholder="give your review" id="error" value={InputText.review}/>
              </Form.Item>
              <Form.Item
                label="image url"
                validateMessage={validateMessage(InputText.img_url)}
                >
                <Input placeholder="fill the link movie's image" id="error" value={InputText.img_url}/>
              </Form.Item>
             </Form>
            </>
        )
    }

