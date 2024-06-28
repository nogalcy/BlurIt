import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import logo from "./Logo.png"

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{max: 55}} style={{ height: '110px', width: '110px'}}>
                <div className='Tilt-inner pa3'>
                    <img style ={{paddingTop: '6px'}} src={logo} alt="logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;