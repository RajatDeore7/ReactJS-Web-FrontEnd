import React from 'react';
import Paper from '@mui/material/Paper';
import Nav from './components/Navbar';
import Login from './components/Login_form';
import Heading from './components/Heading';
import main_img from './Img/Moblogin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav-trial'>
        <div className='nav'>
          <Nav />
        </div>
      </div>
      <div className='parent'>
        <div className='login'>
          <Heading />
          <div className='img_main'>
            <img src={main_img} width="500" height="490" />
          </div>
        </div>
        <div className='login_form'>
          <Paper elevation={6}>
            <Login />
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default App;
