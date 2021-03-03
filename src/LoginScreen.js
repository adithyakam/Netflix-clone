import React from 'react'

import './LoginScreen.css'

function LoginScreen() {
    return (
        <div className='loginscreen'>
            <div className="loginScreen_background">
                <img 
                className='loginscreen_logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='logo'
                />
                <button className='loginscreen_button'>
                    SignIn
                </button>
            </div>
        </div>
    )
}

export default LoginScreen
