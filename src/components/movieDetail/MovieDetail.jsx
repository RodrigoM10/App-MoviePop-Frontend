import React from 'react'
import { Image } from 'react-bootstrap'
import StarRatings from 'react-star-ratings/build/star-ratings'
import './movieDetail.css'

const MovieDetail = ({ movie }) => {

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
      <div className='text-center d-flex flex-column'>
        <Image className="detail-movie-image" src={movie?.image?.original} />
        <StarRatings
          className='star-ratings'
          rating={(movie?.rating?.average) / 2 || 0}
          numberOfStars={5}
          starRatedColor="yellow"
          starDimension="25px"
          starSpacing="2px"
          name='rating'
        />
      </div>
      <div className='text-center'>
        <h4 className="d-md-none py-2 mt-2">{movie?.name}</h4>
        <h1 className="d-none d-md-inline py-2 mt-2">{movie?.name}</h1>
        <ul className='list-movie-details align-self-start text-start'>
          <li>Lenguaje: {movie?.language}</li>
          <li>Géneros: {(movie?.genres)?.join(' / ')}</li>
          <li>Fecha de estreno: {movie?.premiered}</li>
        </ul>
        <h4 className="d-md-none py-2 mt-2">Sinopsis</h4>
        <h1 className="d-none d-md-inline py-2 mt-2">Sinopsis</h1>
        <p
          className='summary-movie-detail'
          dangerouslySetInnerHTML={{ __html: movie.summary }}
        />
        <div className="d-none d-md-inline">
          <h4 className="py-2 mt-2">Mas info</h4>
          <ul className='list-movie-details align-self-start text-start'>
            <li>Donde Ver ? : {movie?.network?.name} / {movie?.network?.country?.name}, {movie?.network?.country?.code}, {movie?.network?.country?.timezone}</li>
            <li>Sitio Oficial: {movie?.officialSite}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail