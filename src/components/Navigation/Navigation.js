import React from 'react'
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <div className='nav'>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        onClick={() => onRouteChange("SignOut")}
                        className="f3 link dim underline pa3 pointer">Sign Out</p>
                </nav>
            </div>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        onClick={() => onRouteChange("SignIn")}
                        className="f3 link dim underline pa3 pointer">Sign In</p>
                    <p
                        onClick={() => onRouteChange("Register")}
                        className="f3 link dim underline pa3 pointer">Register</p>
            </nav>
        )
        }
}

export default Navigation;