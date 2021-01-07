import React, {useEffect, useState} from "react"

import axios from "axios"

export default function Home() {
  const [Movie, setMovie] = useState(null)
  const [Game, setGame] = useState(null)
  const [More,setMore] = useState(false)

  useEffect( () => {
    if (Movie === null){
      axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then(res => {
        setMovie(res.data.map(el=>{ return {
          id: el.id, 
          title: el.title, 
          description: el.description,
          year: el.year,
          duration: el.duration,
          genre: el.genre,
          rating: el.rating,
          review: el.review,
          image_url: el.image_url
        }} ))
      })
    }
  }, [Movie])

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

  const handleShowClick=()=>{
    setMore(true)
  }
  const handleCloseClick=()=>{
    setMore(false)
  }

  const aneh =()=>{
    let a
    if(Game !== null){
      a = Game.map(item=>{
        return{
          single:item.singleplayer,
          multi:item.multiplayer
        }
      })
    }
    if (a.single === true || a.multi === true){
      return <p><b>Tipe : </b>{a.single}{a.multi}</p>
    }else if(a.single === false || a.multi === true){
      return <p><b>Tipe : </b>{a.multi}</p>
    }else if(a.single === true || a.multi === false){
      return <p><b>Tipe : </b>{a.single}</p>
    }else{
      return null
    }
  }

  return(
    <>
    <h1 style={{textAlign:"center"}}>Daftar Film</h1>
    {
      Movie !== null && Movie.map(item=>{
        return(
          <>
          <div className="film" style={{textAlign:"center"}}>
            <p><b>{item.title}</b></p>
            <img src={item.image_url} alt="" style={{position:"relative", maxWidth:500, maxHeight:500,alignItems:"center"}}/>
          </div><br/>
          <div className="filmText">
            <p><b>Rilis tahun : </b> {item.year}</p>
            <p><b>Genre : </b> {item.genre}</p>
            <p><b>Rating : </b> {item.rating}/10</p><br/>
          </div>
          <div className="filmText">
          {More === false &&
            <button onClick={handleShowClick}>Show More</button>
          }
          {More &&
          <>
            <p><b>Deskripsi : </b>{item.description}</p>
            <p><b>Durasi : </b>{item.duration} menit</p>
            <p><b>Review : </b>{item.review}</p>
            <button onClick={handleCloseClick}>Show Less</button>
          </>
          }
          </div>
          </>
        )
      })
    }
    <br></br>
    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    <br></br>
    <h1>Daftar Game</h1>
    { Game !== null && Game.map(item=>{
      return(
        <>
          <div className="game" style={{textAlign:"center"}}>
            <p><b>{item.name}</b></p>
            <img src={item.img_url} alt="" style={{position:"relative", maxWidth:500, maxHeight:500,alignItems:"center"}}/>
          </div>
          <div className="filmText">
            <p><b>Rilis tahun : </b> {item.release}</p>
            <p><b>Genre : </b> {item.genre}</p><br/>
          </div>
          <div className="filmText">
          {More === false &&
            <button onClick={handleShowClick}>Show More</button>
          }
          {More &&
          <>
            <p><b>Platform : </b>{item.platform}</p>
            <p>{aneh}</p>
            <button onClick={handleCloseClick}>Show Less</button>
          </>
          }
          </div>
        </>
      )
    })

    }
    </>
  )
}

