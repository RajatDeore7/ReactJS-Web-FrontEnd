import React from 'react';
import Paper from '@mui/material/Paper';
import Nav from './components/Navbar';
import Pg4checkbox from './components/Pg4checkbox';
import Rectangle from './Img/Rectangle.png';
import './App.css';


function Page4() {
    return (
        <div className="App">
            <div className='nav-trial'>
                <div className='nav'>
                    <Nav />
                </div>
            </div>
            <div className='call_you'>
                <Paper elevation={0}>
                    <div className='callyou_img'>
                        <div className='img_callyou'>
                            <img src={Rectangle} width="858" height="56" alt='Rectangle' />
                        </div>
                    </div>
                    <div className='callyou'>
                        <p>Your Profile is <span>10%</span> Complete</p>
                    </div >
                    <div className='call'>
                        <p>What time suits you the best?</p>
                        <p>This will be used to match you with your work partner</p>
                    </div>
                    <div className='Pg4'>
                        <Pg4checkbox className='pg4checkbox' />
                    </div>
                    <div className='call_1'>
                        <div className='call_btn'>
                            <button type='submit' className='call_btnnext'>Next</button>
                        </div>
                        <div className='call_enter'>
                            <p>or press ENTER</p>
                        </div>
                    </div>
                    <div className='call_btm'>
                        <p>By providing the information, I hereby agree and accept
                            the Terms and Service and Privacy Policy in use of the app</p>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default Page4;