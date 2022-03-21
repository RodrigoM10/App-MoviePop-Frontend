import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import IMG_MOVIE_DEFAULT from '../../assets/MovieDefaultImage.png'
import './cardMovie.css'

const CardMovie = ({movie}) => {

    return (
        <Card className="card-movie-style p-0 m-1 mx-md-2">
            <Link to="/movieDetails" className="text-decoration-none">
                <div>
                    <Card.Img className="card-img-style" variant="top" src={movie?.show?.image?.medium || IMG_MOVIE_DEFAULT } alt="movie-image" />
                    <h5 className="py-2 card-title-movie">{movie?.show?.name}</h5>
                </div>
            </Link>
        </Card>
    )
}

export default CardMovie