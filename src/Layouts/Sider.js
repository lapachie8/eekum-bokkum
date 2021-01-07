// import React, { Component } from 'react'
// import './style.css'
// import { Link } from 'react-router-dom'

// export default class Sider extends Component {
//   render() {
//     return (
//       <>
//        <div className="sidenav">
//         <a>
//           <Link to="/dataFilm">Data Film</Link>
//         </a>  
//         <a>
//           <Link to="/dataGame">Data Game</Link>
//         </a>  
//        </div> 
//       </>
//     )
//   }
// }

import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import React from 'react'
const { Sider } = Layout;

export default function Side() {
  return (
    <>
     <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['film']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="film" icon={<UserOutlined />} title="subnav 1">
              <Link to="/FormFilm">Film</Link>
            </Menu.Item>
            <Menu.Item key="game" icon={<LaptopOutlined />} title="subnav 2">
              <Link to="/FormGame">Game</Link>
            </Menu.Item>
          </Menu>
        </Sider> 
    </>
  )
}

