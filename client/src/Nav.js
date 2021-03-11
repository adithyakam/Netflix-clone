import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import './Nav.css'

function Nav() {

    const [show, setshow] = useState(false)
    const history=useHistory();

    const transitionNavBar=()=>{
if(window.scrollY>100){
    setshow(true)
}else{
    setshow(false)
}

    }


    useEffect(() => {
        window.addEventListener('scroll',transitionNavBar)
    return()=>window.removeEventListener('scroll',transitionNavBar)
    
    }, [])

    return (
        <div className={`nav ${show &&'nav_black'}`}>
        <div className='nav_content'>
        <img 
                    onClick={()=>history.push("/")}
            className='nav_logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
        <img 
        onClick={()=>history.push("/profile")}
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
        </div>
        
        </div>
    )
}

export default Nav
