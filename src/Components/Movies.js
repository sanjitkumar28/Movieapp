import React, { Component } from 'react'
import { movies } from './GetMovies'
export default class Movies extends Component {
  render() {
      let movie=movies.results;
    return (
      <div>
        <div className="card cardcontainers">
          {
            
              movie.map((movieobj)=>(
                  <div className="moviecardimage">
                <img src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`} alt={movieobj.title} className='moviecardimage'/>
                 <h5 className="movie-title">{movieobj.original_title}</h5>
                 <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>  
               <a  className="btn btn-primary moviesbutton">Add to Favourites</a>
               </div>
                {/* <p className="card-text">{movieobj.overview}</p> */}
                </div>    
              ))
              
          }
          </div>
      </div>
    )
  }
}
