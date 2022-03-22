import React from 'react'
import { Row } from 'react-bootstrap'
import { useRequestMovies } from '../../customHooks/useRequestMovies'
import CardMovie from '../cardMovie/CardMovie'
import CardNoResults from '../cardNoResults/CardNoResult'
import SpinLoader from '../spinLoader/SpinLoader'

const Movies = ({ movieParam }) => {
    const [allMovies, isLoading] = useRequestMovies(movieParam)

    return (
        <div className="my-3">
            <Row xs={3} lg={5} className="justify-content-evenly">
                {allMovies?.map((mov) => (
                    <CardMovie key={mov.show?.id} movie={mov} />
                ))}
            </Row>
            {!allMovies.length && !isLoading && (
                <div className="d-flex justify-content-center align-items-center">
                    <CardNoResults textNoResult='No hay resultados' />
                </div>
            )}
            <div className="position-absolute center-spinner">
                {<SpinLoader size="lg" isLoading={isLoading} />}
            </div>
        </div>
    )
}

export default Movies