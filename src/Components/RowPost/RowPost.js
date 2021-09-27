import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imgUrl,API_KEY} from '../../Constanse/constanse'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            alert(err, 'Network Error')
        })
    }, [])
    console.log(movies);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handilMovie = (id)=>{
          console.log(id);
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
              if(response.data.results[0]){
                  console.log(response.data.results[0].key);
                  setUrlId(response.data.results[0].key)

              }else{
                setUrlId('')
              }
          })

      }

    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((obj) => {
                    let movieName;
                    if (obj){
                
                        if(obj.name){
                            movieName = obj.name
                        }else{
                            movieName = obj.title
                        }
                    }
                    return (
                        <div>
                             <img onClick={()=>handilMovie(obj.id)} className={props.isSmall ? "sPoster" : "poster"} src={imgUrl+obj.backdrop_path} alt="post" />
                            <p>{movieName}</p>
                        </div>
                    )
                }
                )}

            </div>
            {urlId && <YouTube videoId={urlId} opts={opts} /> }
        </div>
    )
}

export default RowPost
