import { Button, Modal, Space, Table } from 'antd';
import React, {useEffect, useState} from 'react'

import FormGame from './FormGame';
import axios from 'axios';

export default function List() {
    const [Game, setGame] = useState(null)
    const [ModalVisible, setModalVisible]=useState(false)
    const [Input, setInput]=useState({
      name:"",
      genre:"",
      singleplayer:true,
      multiplayer:true,
      platform:"",
      release:0,
      img_url:"",
      id:null
    })

    useEffect(()=>{
        if(Game === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-game`).then(res=>{
            setGame(res.data.map(el=>{return{
              id:el.id,
              name:el.name,
              genre:el.genre,
              singleplayer:el.singleplayer,
              multiplayer:el.multiplayer,
              platform:el.platform,
              release:el.release,
              img_url:el.image_url
            }}))
          })
        }
      },[Game])

      const columns = [
          {
              title : 'Nama Game',
              dataIndex : 'name',
              key : 'name'
          },
          {
              title : 'Genre',
              dataIndex : 'genre',
              key : 'genre'
          },
          {
              title : 'SPlayer',
              dataIndex : 'singleplayer',
              key : 'singleplayer'
          },
          {
              title : 'MPlayer',
              dataIndex : 'multiplayer',
              key : 'multiplayer'
          },
          {
              title : 'Platform',
              dataIndex : 'platform',
              key : 'platform'
          },
          {
              title : 'Release',
              dataIndex : 'release',
              key : 'release'
          },
          {
              title : 'Img_Url',
              dataIndex : 'img_url',
              key : 'img_url'
          },
          {
              title : 'Action',
              key : 'action',
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
          axios.get(`https://backendexample.sanbersy.com/api/data-game`,{
            name : Input.name,
            genre : Input.genre,
            singleplayer : Input.singleplayer,
            multiplayer : Input.multiplayer,
            platform : Input.platform,
            release : Input.release,
            img_url : Input.img_url,
          })
          .then(res=>{
            setGame([
              ...Game,{
                id:res.data.id,
                name : Input.name,
                genre : Input.genre,
                singleplayer : Input.singleplayer,
                multiplayer : Input.multiplayer,
                platform : Input.platform,
                release : Input.release,
                img_url : Input.img_url,
              }
            ])
          })
        }else{
          axios.put(`https://backendexample.sanbersy.com/api/data-game/${Input.id}`,{
            name : Input.name,
            genre : Input.genre,
            singleplayer : Input.singleplayer,
            multiplayer : Input.multiplayer,
            platform : Input.platform,
            release : Input.release,
            img_url : Input.img_url,
          })
          .then(()=>{
            let dataGame = Game.find(el=>el.id ===Input.id)
            dataGame.name = Input.name
            dataGame.genre = Input.genre
            dataGame.singleplayer = Input.singleplayer
            dataGame.multiplayer = Input.multiplayer
            dataGame.platform = Input.platform
            dataGame.release = Input.release
            dataGame.img_url = Input.img_url
            setGame([...Game])
          })
        }
        setInput({
          name:"",
          genre:"",
          singleplayer:true,
          multiplayer:true,
          platform:"",
          release:0,
          img_url:"",
          id:null
        })
        setModalVisible(false)
      }
      const handleDelete=(event)=>{
        let idGame = parseInt(event.target.value)

        let newDataGame = Game.filter(el=>el.id !== idGame)
        setGame([...newDataGame])
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`).then(res=>{
          console.log(res);
        })
      }
      const handleEdit=(event)=>{
        let idGame = event.target.value
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${idGame}`).then(res=>{
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
          <FormGame/>
         </Modal>
         <Table columns={columns} dataSource={Game}/>   
        </>
    )
}
