import './App.css';
import React, { useState } from 'react'
import Text_Form from './Component/Text_Form';
import Navbar from './Component/Navbar';
import About from './Component/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [themeMode, setThemeMode] = useState("Light");
  function ToggleTheme(){
    if(themeMode === "Dark"){
      setThemeMode("Light");
      document.body.style.backgroundColor="White";
    }
    else{
      setThemeMode("Dark")
      document.body.style.backgroundColor="Black";
    }
    
  }
    return (
    <>
    <Router>
      <Navbar AppName="Text-Utils" Theme={themeMode} ToggleTheme={ToggleTheme}/>
      <div class="container my-3">
      <Switch>
          <Route path="/about/">
            <About Theme={themeMode}/>
          </Route>
          <Route path="/">
            <Text_Form Theme={themeMode}/>
          </Route>
        </Switch>
      </div>
      </Router>
      </>
  );
}

export default App;
