import React from 'react'
import { Container } from 'react-bootstrap';
import SearchForm from '../components/searchForm/SearchForm';


function SearchPage() {

    return (
        <Container className=" d-flex flex-column">        
            <SearchForm />
            <h3 className='mt-4'>Películas</h3>
            <hr />
            <div>lista de peliculas</div>
        </Container>
    )
}

export default SearchPage;
