import React, { useRef, useState } from 'react';
import { Form, Button, Card, FormGroup, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Las contraseñas no coinciden");
        }
        try{
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history("/")
        }catch{
            setError("Error al registrarse");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Registrarse</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup id="email">
                            <Form.Control type="email" placeholder="Ingresar email" ref={emailRef} required/>
                        </FormGroup><br/>
                        <FormGroup id="password">
                            <Form.Control type="password" placeholder="Ingresar Contraseña" ref={passwordRef} required/>
                        </FormGroup><br/>
                        <FormGroup id="confirmPassword">
                            <Form.Control type="password" placeholder="Confirmar Contraseña" ref={confirmPasswordRef} required/>
                        </FormGroup>
                        <br/>
                        <Button disabled={loading} type="submit" className="w-100">Registrarse</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
            </div>
        </>
    )
}
