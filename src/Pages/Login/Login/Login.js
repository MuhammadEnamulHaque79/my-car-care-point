import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    // const refContainer = useRef(initialValue);
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
    };
    const navigateToRegister=(event)=>{
        navigate('/register');
    };
    
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-primary text-center mt-2'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Car Care Point? <Link to="/register" className='text-danger text-decoration-none text-monospace' onClick={navigateToRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;