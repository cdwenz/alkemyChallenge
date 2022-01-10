import React, { useRef, useState } from 'react';
import { Form, Button, Card, FormGroup, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            setError("");
            setLoading(true);
            const log = await login(emailRef.current.value, passwordRef.current.value);
            console.log("Login success", log.user._delegate.accessToken);
            history("/");
        }catch{
            setError("Error al iniciar sesión");
        }
        setLoading(false);

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Iniciar Sesion</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup id="email">
                            <Form.Control type="email" placeholder="Ingresar email" ref={emailRef} required/>
                        </FormGroup><br/>
                        <FormGroup id="password">
                            <Form.Control type="password" placeholder="Ingresar Contraseña" ref={passwordRef} required/>
                        </FormGroup>
                        <br/>
                        <Button disabled={loading} type="submit" className="w-100">Iniciar Sesion</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Necesitas una cuenta? <a href="/signup">Registrarse</a>
            </div>
        </>
    )
}
