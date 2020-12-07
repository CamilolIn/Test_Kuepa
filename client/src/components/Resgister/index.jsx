import React, {useState} from 'react'
import Navigation from '../Nav/index'
import { Card, Button, Form, Container, Col, Row } from 'react-bootstrap';
import { createUser } from '../../store/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import s from '../../styles/login.module.css';


const Resgister = () =>  {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
        })
    const dispacth = useDispatch()
    const history = useHistory();

    const handleChange = function(e){

        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
        
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispacth(createUser(values))
        history.push('/login')
    }

    return (
        <div>
        <Navigation/>
        <Container className={s.cont__form___Princ}>
        <Form onSubmit={handlerSubmit} className={s.cont__form}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label> 
            <Form.Control type="text" placeholder="Tu nombre" name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Tu Email" name ="email" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="Password"  name="phone" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name ="password" onChange={handleChange} />
        </Form.Group>


        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>
    </div>
    )
}


export default Resgister