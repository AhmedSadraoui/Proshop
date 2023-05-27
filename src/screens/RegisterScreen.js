import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer';


const RegisterScreen = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setconfirmPassword]=useState('');


  return (
    <div>
        
    <FormContainer>
    <h1>Sign Up</h1>
    <Form>
    <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='name'
             placeholder='Enter Name' 
            value={name} 
            onChange={(e)=>setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3'> 
            <Form.Label>Password</Form.Label>
            <Form.Control type='password'
             placeholder='Enter password' 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3'> 
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password'
             placeholder='Confirm password' 
            value={confirmPassword} 
            onChange={(e)=>setconfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email'
             placeholder='Enter Email' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}></Form.Control>
        </Form.Group>
     
    <Button type='submit' className='py-3' variant='primary'>Register</Button>
    </Form>
    <Row className='py-3'>
        <Col>Have an Account ?{' '}<Link to={'/login'}>Sign In</Link></Col>
    </Row>
    </FormContainer>
</div>
  )
}

export default RegisterScreen