import React from 'react'
import { Formik } from 'formik';
import { Form } from 'react-bootstrap'
import './searchForm.css'

const SearchForm = ({ setMovieParam }) => {

    const handleChange = (e) => {
        const keyword = e.target.value;
        if (keyword.length >= 2) {
            setMovieParam(keyword);
        }
    };

    return (
        <Form
            className=" d-flex justify-content-center align-items-center mx-2"
            autoComplete="off"
        >
            <input
                name="searchMovie"
                type="search"
                aria-label="Search"
                className="search-input"
                placeholder="Buscar..."
                onChange={handleChange}
            />
        </Form>
    )
}

export default SearchForm