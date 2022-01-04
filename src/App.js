import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
function App() {
  const [mode,setMode] = useState('light'); //Whether my dark mode is enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Utify"  homey='Home' mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
 