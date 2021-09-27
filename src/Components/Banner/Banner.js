import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../Constanse/constanse'

function Banner() {
    const [movie, setMovie] = useState()
    var x = Math.floor((Math.random() * 20) + 1);
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[x])
        })
    }, [])
    let movieName;
    if (movie){

        if(movie.name){
            movieName = movie.name
        }else{
            movieName = movie.title
        }
    }
    return (

        <div
            style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }}
            className="banner">
            <div className="content">
                <h1 className="title">{movieName}</h1>
                <div className="banner_buttons">
                    <button className="button" >Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
