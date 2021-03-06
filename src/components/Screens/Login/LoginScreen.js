import React from 'react';
import {Form, Button} from 'react-bootstrap';


export const LoginScreen = () => {
    return (
        <div>
            <Form>
                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="success" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}
