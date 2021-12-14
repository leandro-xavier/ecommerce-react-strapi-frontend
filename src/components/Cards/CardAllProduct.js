import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CardAllProduct= ({product}) => {
    return (
        <Card style={{width: '18rem', display:'inline-block'}}>
            <Card.Img variant='top' src={product.img} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant='danger'>agregar al carrito</Button>
                </Card.Body>
        </Card>
    )
}
