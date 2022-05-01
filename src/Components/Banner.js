import React, { Component } from 'react'
import { movies } from './GetMovies'

export default class Banner extends Component {
  render() {
    let movie=movies.results[0]
    return (
      <div>
          <div className="card">
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='moviebanner'/>
          <h2 className="card-title bannertitle">{movie.original_title}</h2>
          {/* <p className="card-text bannerdescription">{movie.overview}</p> */}
         

    </div>
    </div>
    )
  }
}
