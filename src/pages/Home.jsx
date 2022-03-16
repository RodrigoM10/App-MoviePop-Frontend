import React from 'react'
import { Container } from 'react-bootstrap';
import CoverFigure from '../components/coverFigure/CoverFigure';

function Home() {

    return (
        <Container className="my-auto d-flex justify-content-center aling-items-center">        
             <CoverFigure />
        </Container>
    )
}

export default Home;
