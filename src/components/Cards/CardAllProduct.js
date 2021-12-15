import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CardAllProduct= ({product}) => {
    return (
        <Card style={{width: '18rem', display:'inline-block'}}>
            <Card.Img variant='top' src={product.img} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>{product.descricion}</Card.Text>
                    <Card.Text>precio:{product.price}</Card.Text>
                    <Button variant='danger'>agregar al carrito</Button>
                </Card.Body>
        </Card>
    )
}
