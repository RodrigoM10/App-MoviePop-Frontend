import React from 'react'
import { Form } from 'react-bootstrap'
import './searchForm.css'

const SearchForm = () => {
    return (
        <Form
            className=" d-flex justify-content-center align-items-center mx-2"
            autocomplete="off"
        >
            <input
                name="searchMovie"
                type="search"
                aria-label="Search"
                className="search-input"
                placeholder="Buscar..."
            />
        </Form>
    )
}

export default SearchForm