import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Movies from '../components/movies/Movies';
import SearchForm from '../components/searchForm/SearchForm';


function SearchPage() {
    const [movieParam, setMovieParam] = useState('star wars') 

    return (
        <Container className=" d-flex flex-column">        
            <SearchForm setMovieParam={setMovieParam}/>
            <h2 className='mt-4'>Películas</h2>
            <hr />
            <Movies movieParam={movieParam} />
        </Container>
    )
}

export default SearchPage;
