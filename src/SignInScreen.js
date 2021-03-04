import React from 'react'

import './SignInScreen.css'

function SignInScreen() {
    return (
        <div className='signinscreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type='email'/>
                <input placeholder="password" type='password'/>
                <button type='submit'>Sign In</button>
                <h4><span className='signinscreen_span_text'>New to Netflix?</span><span className='s'> Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignInScreen
