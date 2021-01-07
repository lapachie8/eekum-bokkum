//   return(    
//     <header>
//       <nav>
//         <ul>
//           { user === null && <li><Link to="/login">Login </Link></li> }
//           { user && <li><a style={{cursor: "pointer"}} onClick={handleLogout}>Logout </a></li> }
//           <li><Link to="/">Home</Link></li>
//         </ul>
//       </nav>
//     </header>

//   )
// }

// export default Header


import { Layout, Menu } from 'antd';
import React, {useContext} from 'react'
import { UserContext } from "../Context/MovieContext";
import { Link } from 'react-router-dom';
const { Header} = Layout;

export default function Nav() {
  const [user, setUser] = useContext(UserContext)
  const handleLogout = () =>{
    setUser(null)
    localStorage.removeItem("user")
  }
  return (
    <>
      <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to ="/"/>
          Home
        </Menu.Item>
        { user === null &&
        <Menu.Item key="2">
          <Link to="/login"/>
          Login
        </Menu.Item>
        }
        { user &&
          <Menu.Item key = "2" onClick={handleLogout}>
            Logout
          </Menu.Item>
        }
      </Menu>
    </Header>
    </>
  )
}
