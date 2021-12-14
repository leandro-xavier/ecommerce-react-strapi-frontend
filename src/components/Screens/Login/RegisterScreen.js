import React from 'react';
import {Form, Button} from 'react-bootstrap';

export const RegisterScreen = () => {
    return (
        <div>
             <Form className="lg-2" style={{textAlign:"center"}}>
                 <h1>Registro</h1>
                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="success" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}
