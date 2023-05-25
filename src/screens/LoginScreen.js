import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer';


const LoginScreen = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  return (
    <div>
        
        <FormContainer>
        <h1>Sign In</h1>
        <Form>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email'
                 placeholder='Enter Email' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'> 
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'
                 placeholder='Enter password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            </Form.Group>
        <Button type='submit' className='py-3' variant='primary'>Sign In</Button>
        </Form>
        <Row className='py-3'>
            <Col>New Customer? <Link to={'/register'}>Register</Link></Col>
        </Row>
        </FormContainer>
    </div>
  )
}

export default LoginScreen