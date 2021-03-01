import React, { useEffect, useState } from 'react'

import axios from './Axios'

import './Row.css'
 
function Row({title,fetchUrl,islargeRow=false}) {
 const [movies, setmovies] = useState([])
    

//https://image.tmdb.org/t/p/original//fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg
const base_Url="https://image.tmdb.org/t/p/original/";


 useEffect(() => {
    async function fetchData(){
        const request=await axios.get(fetchUrl)
    
    setmovies(request.data.results)
    return request;

    }

    fetchData();
 }, [fetchUrl])

 return (
        <div className="row">
           <h2 >{title}</h2> 
            <div className='row_posters'>
                {movies.map(movie => (
                    ((islargeRow && movie.poster_path) ||
                    (!islargeRow && movie.backdrop_path)) && (
                        <img key={movie.id} 
                    className={`row__poster ${islargeRow && "row__posterLarge"}`} src={`${base_Url}${islargeRow?
                        movie.poster_path:movie.backdrop_path}`} alt={movie.name}
                        ></img>
                    ))
                
                )}
            </div>
        </div>
    )
}

export default Row
