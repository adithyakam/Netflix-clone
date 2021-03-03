import React, { useState } from 'react'

import './LoginScreen.css'
import SignInScreen from './SignInScreen'


function LoginScreen() {

    const [signIn, setsignIn] = useState(false)



    return (
        <div className='loginscreen'>
            <div className="loginScreen_background">
                <img 
                className='loginscreen_logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='logo'
                />
                <button className='loginscreen_button' onClick={()=>setsignIn(!signIn)}>
                    SignIn
                </button>
                <div className='loginscreen_gradient'></div>
            </div>
            <div className='loginscreen_body'>

            {
                signIn?( 
                    <SignInScreen/>
                ):(

                    <>
                   <h1>Unlimited films,TV programmes & more..</h1> 
                    <h2>Watch anywhere,Cancel at any time.</h2>
                    <h3>
                        Ready to watch? Enter your email to 
                        create or restart your 
                        membership.
                    </h3>
                    <div className='loginscreen_input'>
                        <form>
                            <input 
                            type='email' 
                                placeholder='Email Address'
                                
                            />
                            <button
                                onClick={()=>{setsignIn(true)}}
                             className='loginscreen_getstarted'>
                                getStarted
                            </button>

                        </form>
                    </div>
                </>
                )
            }
               
            </div>
        </div>
    )
}

export default LoginScreen
