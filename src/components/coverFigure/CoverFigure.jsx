import React from 'react'
import { Figure, Image } from 'react-bootstrap';
import MOVIE_POP_TITLE from '../../assets/MoviePop.png';
import IMG_HOME from '../../assets/cinema.png';

const CoverFigure = () => {
    return (
        <Figure className="d-flex flex-column justify-content-center aling-items-center ">
            <Figure.Image
                alt="img-home"
                src={IMG_HOME}
            />
            <Figure.Caption className="text-center">
                <Image src={MOVIE_POP_TITLE} />
            </Figure.Caption>
        </Figure>
    )
}

export default CoverFigure