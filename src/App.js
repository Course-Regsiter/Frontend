import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
//import { Main, Login, Signup } from './Routes';
import Main from "Routes/Main";
import Login from "Routes/Login";
import Signup from "Routes/Signup";
import RPreCourse from "Routes/RPreCourse";
import Insert from "Routes/Insert";
import RouteIf from "Routes/RouteIf";

function App() {
  const [user, setUser] = useState({
    user : null,
    isLogged : null
  });
  
  return (
    <Router>
      <Navigation user={user} />
      <Switch>
        <Route exact path="/" component={RouteIf(Main, true, user, setUser)} /> 
        <Route exact path="/login" component= {RouteIf(Login, false, user, setUser)} /> 
        <Route exact path="/signup" component= {RouteIf(Signup, false, user, setUser)} /> 
        <Route exact path="/r/preCourse" component= {RouteIf(RPreCourse, true, user, setUser)} /> 

        <Route exact path="/insert" component={Insert} /> 
      </Switch>
    </Router>
  );
}

export default App;
