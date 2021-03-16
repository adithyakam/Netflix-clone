import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import movieTrailer from 'movie-trailer'



import axios from './Axios'

import './Row.css'
 
function Row({title,fetchUrl,islargeRow=false}) {
 const [movies, setmovies] = useState([])
 const [trailer,setTrailer] = useState("");

    

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



function getTrailer(movie){
    
    axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=9d2bff12ed955c7f1f74b83187f188ae`)
   .then(res=>console.log(res.data.results))
   
    //https://www.youtube.com/watch?v=SUXWAEX2jlg <---- youtube


}


 return (
        <div className="row">
           <h2 >{title}</h2> 
            <div className='row_posters'>
                {movies.map(movie => (
                    ((islargeRow && movie.poster_path) ||
                    (!islargeRow && movie.backdrop_path)) && (
                        <div className='row_poster_Div'>
                        <img key={movie.id} 
                    className={`row__poster ${islargeRow && "row__posterLarge"}`} src={`${base_Url}${islargeRow?
                        movie.poster_path:movie.backdrop_path}`} alt={movie.name}
                        ></img>
                           <div className='row_posterDetails '>
                            <h7 className='row_posterDetailsTitle'>{movie.name || movie.original_name || movie.original_title}</h7>
        
                            <div>
                                <img className='row_posterDetailsStar' src='https://pngimg.com/uploads/star/star_PNG1597.png' alt='rating'/>
                                <h7>{movie.vote_average}</h7>
                            </div>

                           </div>
                           <button className="row_posterTrailer" onClick={()=>getTrailer(movie)}>Trailer</button>
                        </div>
                    )
                    )
                
                )}
            </div>
        </div>
    )
}

export default Row
