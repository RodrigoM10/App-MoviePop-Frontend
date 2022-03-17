import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import IMG_MOVIE_DEFAULT from '../../assets/MovieDefaultImage.png'
import './cardMovie.css'

const CardMovie = () => {

    return (
        <Card className="card-movie-style p-0 m-1 mx-md-2">
            <Link to="/movieDetails" className="text-decoration-none">
                <div>
                    <Card.Img className="card-img-style " variant="top" src={IMG_MOVIE_DEFAULT} />
                    <h5 className="py-2 card-title-movie">Título</h5>
                </div>
            </Link>
        </Card>
    )
}

export default CardMovie