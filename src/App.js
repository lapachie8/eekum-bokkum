import 'antd/dist/antd.css';

import React, { Component } from 'react'

import Main from './Layouts/Main';
import {UserProvider} from "./Context/MovieContext"

export default class App extends Component {
  render() {
    return (
      <>
       <UserProvider>
        <Main />
       </UserProvider> 
      </>
    )
  }
}
