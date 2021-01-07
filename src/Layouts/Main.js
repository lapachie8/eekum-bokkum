import React,{ useContext } from "react"
import { Layout } from 'antd';
import Footer from "./Bottom"
import Header from "./Header"
import { BrowserRouter as Router } from "react-router-dom";

import Sider from "./Sider"
import { UserContext } from "../Context/MovieContext";
import Body from './Content'

const Main = () =>{
  const [user] = useContext(UserContext)
  return(
    <>
      <Router>
        <Layout style={{minHeight:'100vh'}}>
          <Header/>
        <Layout>
        {
          user &&
          <Sider/>
        }
        <Body/>
        </Layout>
        <Footer/>
        </Layout>
      </Router>
    </>
  )
}

export default Main