import React from 'react'
import Banner from './Banner'


import './Homescreen.css'
import Nav from './Nav'

function HomeScreen() {
    return (
        <div className='home'>
            <Nav/>
            <Banner/>
        </div>
    )
}

export default HomeScreen
