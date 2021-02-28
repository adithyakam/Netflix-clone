import React, { useEffect, useState } from 'react'

import './Banner.css'
import axios from './Axios'
import requests from './Request'

function Banner() {

    const [movie, setmovie] = useState([])

    useEffect(() => {
       async function fetchData(){
           const request =await axios.get(requests.fetchNetflixOriginals);
           setmovie(
               request.data.results[
                   Math.floor(Math.random()*request.data.results.length-1)
               ]
           )
           return request;
       }
       fetchData()
    }, [])

    console.log(movie);

    const truncate=(string,n)=>{
            return string?.length>n?string.substr(0,n-1)+'...':  string
    }

    return (
        <header className='banner' 
        style={{
            backgroundSize:'cover',
            backgroundPosition:'center center',
            backgroundImage:`url('https://i.imgur.com/TvwWogm.jpeg')`}}>
            <div className='banner_content'>
            <h1 className="banner_title">Title</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>play</button>
                <button className='banner_button'>My list</button>
            </div>
            <h1 className='banner_desc'>
{            truncate('this is a desc',150)
}            </h1>
            </div>
            <div className='banner--fadeBottom'/>
        </header>
    )
}

export default Banner
