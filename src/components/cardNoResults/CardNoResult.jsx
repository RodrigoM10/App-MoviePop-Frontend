import React from 'react'
import { Card } from 'react-bootstrap'
import { FaSadCry } from 'react-icons/fa';

const CardNoResults = () => {
    return (
        <Card className="text-center w-50 text-black-50 p-5 mt-5">
        <Card.Title>No Hay resultados <FaSadCry /> </Card.Title>
      </Card>
    )
}

export default CardNoResults