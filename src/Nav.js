import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, setshow] = useState(false)


    const transitionNavBar=()=>{
if(window.scroll>100){
    setshow(true)
}else{
    setshow(false)
}

    }


    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
    return()=>window.removeEventListener("scroll",transitionNavBar)
    
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_content'>
        <img 
            className='nav_logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
        <img 
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
        </div>
        
        </div>
    )
}

export default Nav
