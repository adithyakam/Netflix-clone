import React from 'react'
import Nav from './Nav'
import {auth} from '../src/Firebase'
import {useSelector} from 'react-redux'

import {selectUser} from '../src/features/userSlice'

import './Profile.css'
import StripeCheckoutButton from './stripe-button.component'

function Profile() {
    const user= useSelector(selectUser)

    return (
        <div className='profile'>
            <Nav/>
            <div className='profilescreen_body'>
                <h1>Edit Profile</h1>
                <div className='profilescreen_info'>
                    <img
                        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                        alt='profile'
                    />
                    <div className='profilescreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profilescreen_plan'>
                        <h3> plans</h3>
                        <StripeCheckoutButton price={1000}/>
                        <button 
                        onClick={()=>{auth.signOut()}}
                        className='profilescreen_signOut '>
                            Sign Out
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
