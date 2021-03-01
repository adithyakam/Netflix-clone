import React from 'react'
import Banner from './Banner'


import './Homescreen.css'
import Nav from './Nav'
import requests from './Request'
import Row from './Row'

function HomeScreen() {
    return (
        <div className='home'>
            <Nav/>
            <Banner/>

            <Row 
            title='NETFLIX ORIGINALS' 
            fetchUrl={requests.fetchNetflixOriginals}
            islargeRow
            />
            <Row 
            title='TRENDING NOW' 
            fetchUrl={requests.fetchTrending}
            />
            <Row 
            title='TOP RATED' 
            fetchUrl={requests.fetchTopRated}
            />
            <Row 
            title='ACTION MOVIES ' 
            fetchUrl={requests.fetchActionMovies}
            />
            <Row 
            title='COMEDY MOVIES' 
            fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
            title='HORROR MOVIES' 
            fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
            title='ROMANCE MOVIES' 
            fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
            title='DOCUMENTARIES' 
            fetchUrl={requests.fetchDocumentaries}
            />


        </div>
    )
}

export default HomeScreen
