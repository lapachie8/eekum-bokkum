import { Button, Modal, Space, Table } from 'antd';
import React, {useEffect, useState} from 'react'

import FormMovie from './FormMovie'
import axios from 'axios';

export default function List() {
    const [Film, setFilm] = useState(null)
    const [ModalVisible, setModalVisible] = useState(false)
    const [Input, setInput]=useState({
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

    useEffect(()=>{ 
        if(Film === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-movie`).then(res=>{
            setFilm(res.data.map(el=>{return{
              id:el.id,
              title:el.title,
              description:el.description,
              year:el.year,
              duration:el.duration,
              genre:el.genre,
              rating:el.rating,
              review :el.review,
              img_url:el.image_url
            }}))
          })
        }
      },[Film])

      const columns = [
          {
              title : 'Nama Film',
              dataIndex : 'title',
              key : 'title'
          },
          {
              title : 'Deskripsi',
              dataIndex : 'description',
              key : 'description'
          },
          {
              title : 'Tahun',
              dataIndex : 'year',
              key : 'year'
          },
          {
              title : 'Durasi',
              dataIndex : 'duration',
              key : 'duration'
          },
          {
              title : 'Genre',
              dataIndex : 'genre',
              key : 'genre'
          },
          {
              title : 'Rating',
              dataIndex : 'rating',
              key : 'rating'
          },
          {
              title : 'Review',
              dataIndex : 'review',
              key : 'review'
          },
          {
              title : 'Img_Url',
              dataIndex : 'img_url',
              key : 'img_url'
          },
          {
              title : 'Action',
              key : 'release',
              render: (text,record)=>{
                  <Space size = "middle">
                      <Button type="primary" htmlType="submit" onClick={handleEdit}>
                        Edit
                      </Button>
                      <Button type="primary" htmlType="submit" onClick={handleDelete}>
                        Delete
                      </Button>
                  </Space>
              }
          },
      ]

      const showModal =()=>{
        setModalVisible(true)
      }
      const closeModal =()=>{
        setModalVisible(false)
      }

      const handleAdd=(event)=>{
        event.prefentDefault()

        if(Input.id === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-movie`,{
            title : Input.title,
            description : Input.description,
            year : Input.year,
            duration : Input.duration,
            genre : Input.genre,
            rating : Input.rating,
            review : Input.review,
            img_url : Input.img_url,
          })
          .then(res=>{
            setFilm([
              ...Film,{
                id:res.data.id,
                title : Input.title,
                description : Input.description,
                year : Input.year,
                duration : Input.duration,
                genre : Input.genre,
                rating : Input.rating,
                review : Input.review,
                img_url : Input.img_url,
              }
            ])
          })
        }else{
          axios.put(`https://backendexample.sanbersy.com/api/data-movie/${Input.id}`,{
            title : Input.title,
            description : Input.description,
            year : Input.year,
            duration : Input.duration,
            genre : Input.genre,
            rating : Input.rating,
            review : Input.review,
            img_url : Input.img_url,
          })
          .then(()=>{
            let dataGame = Film.find(el=>el.id ===Input.id)
            dataGame.title = Input.title
            dataGame.description = Input.description
            dataGame.year = Input.year
            dataGame.duration = Input.duration
            dataGame.genre = Input.genre
            dataGame.rating = Input.rating
            dataGame.review = Input.review 
            dataGame.img_url = Input.img_url
            setFilm([...Film])
          })
        }
        setInput({
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
        setModalVisible(false)
      }

      const handleDelete=(event)=>{
        let idFilm = parseInt(event.target.value)

        let newDataGame = Film.filter(el=>el.id !== idFilm)
        setFilm([...newDataGame])
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${idFilm}`).then(res=>{
          console.log(res);
        })
      }
      const handleEdit=(event)=>{
        let idFilm = event.target.value
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idFilm}`).then(res=>{
          let data = res.data
          setInput({
            name:data.name,
            genre:data.genre,
            singleplayer:data.singleplayer,
            multiplayer:data.multiplayer,
            platform:data.platform,
            release:data.release,
            img_url:data.img_url,
          })
        })
      }
    return (
        <>
         <Button onClick={showModal}>Add Data Game</Button>
         <Modal title="Form Data Game" visible={ModalVisible} onOk={handleAdd} onCancel={closeModal}>
            <FormMovie/>
         </Modal>
         <Table columns={columns} dataSource={Film}/>   
        </>
    )
}
