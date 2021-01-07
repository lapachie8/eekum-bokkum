import React, {useContext} from "react"
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import About from "../Pages/About"
import Home from "../Pages/Home"
import ListFilm from "../Pages/ListFilm"
import ListGame from "../Pages/ListGame"
import Login from "../Pages/Login"
import {UserContext} from "../Context/MovieContext"

const Section = () =>{

  const [user] = useContext(UserContext);

  const PrivateRoute = ({user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({user, ...props }) =>
  user ? <Redirect to="/" /> : <Route {...props} />;

  return(    
    <section >
      <Switch>
        <Route exact path="/" user={user} component={Home}/>
        <Route exact path="/about" user={user} component={About}/>
        <LoginRoute exact path="/login" user={user} component={Login}/>
        <PrivateRoute exact path="/FormGame" user={user} component={ListGame}/>
        <PrivateRoute exact path="/FormFilm" user={user} component={ListFilm}/>
      </Switch>
    </section>
  )
}

export default Section