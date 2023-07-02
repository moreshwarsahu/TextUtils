import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = "#000000"

    }

  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} /> 
      <TextForm heading="Enter the text to analyse" mode={mode} /> */}

      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Routes>

          <Route path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} />}></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>

        </Routes>
      </Router>
    </>

  );
}

export default App;
