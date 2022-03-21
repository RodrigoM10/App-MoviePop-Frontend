import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useRequestMovieById } from '../customHooks/useRequestMovies';
import SpinLoader from '../components/spinLoader/SpinLoader';
import MovieDetail from '../components/movieDetail/MovieDetail';


function MovieDetails() {
    const { movieId } = useParams();
    const [movie, isLoading] = useRequestMovieById(movieId);
    return (
        <Container className=" d-flex flex-column">   
        <MovieDetail movie={movie} />   
        <div className="position-absolute center-spinner">
                {<SpinLoader size="lg" isLoading={isLoading} />}
        </div>
    </Container>
    )
}

export default MovieDetails;
