import React from 'react'
import { Container } from 'react-bootstrap';
import Movies from '../components/movies/Movies';
import SearchForm from '../components/searchForm/SearchForm';


function SearchPage() {

    return (
        <Container className=" d-flex flex-column">        
            <SearchForm />
            <h2 className='mt-4'>Películas</h2>
            <hr />
            <Movies />
        </Container>
    )
}

export default SearchPage;
