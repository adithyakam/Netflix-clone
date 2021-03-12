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
                        <div className='profilescreen_plans'>
                        <h3> plans</h3>
                        <div className='profilescreen_planMain'>
                            <div className='profilescreen_plan'>
                                <h2>1000$</h2>
                                <h3>This plan includes</h3>
                                <ul className='profilescreen_planList'>
                                    <li>unlimited streaming</li>
                                    <li>multipe access</li>
                                    <li>3device support at a time</li>
                                </ul>
                                <StripeCheckoutButton id='profilescreen_stripeBtn' price={1000}/>

                            </div>
                            <div className='profilescreen_plan'>
                                <h2>500$</h2>
                                <h3>This plan includes</h3>
                                <ul className='profilescreen_planList'>
                                    <li>unlimited streaming</li>
                                    <li>multipe access</li>
                                    <li>1 device support at a time</li>
                                </ul>
                                <StripeCheckoutButton id='profilescreen_stripeBtn' price={500}/>

                            </div>
                        </div>
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
