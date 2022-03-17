import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from '../cardMovie/CardMovie'

const Movies = () => {
    return (
        <div className="my-3">
                <Row xs={3} lg={5} className="justify-content-center">
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                </Row>
        </div>
    )
}

export default Movies