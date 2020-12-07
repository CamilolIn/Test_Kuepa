import React,{ useState, useEffect }  from 'react'
import AddCurso from '../Modales/AddCursos';
import Navigation from '../Nav/index'
import s from '../../styles/addAdminCursos.module.css';
import {Button, Modal, Form, Container, Table } from 'react-bootstrap';
import {getUsers, getUsersByID} from '../../store/actions/userActions'
import {getCursos, addCurso, } from '../../store/actions/cursosActions'
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, Route, useHistory } from 'react-router-dom';


const DetailUser = () => {
    const match = useRouteMatch(); 
    const idUSer = match.params.id
    const dispatch = useDispatch()
    const session = useSelector((state) => state);
    const userssDis = session && session.users
    const userssLog = session && session.userLog
    const userDetauil = session && session.userDetail
    const cursos = userDetauil.cursos && userDetauil.cursos
    const [curs, setCurs] = useState(cursos)



    
    

    useEffect(async()=> {
        await dispatch(getUsers())
        await dispatch(getUsersByID(userssLog && userssLog.id))
        return
    }, [])

    console.log(cursos)
    return (
        <>
        <Navigation />
         {userDetauil && 
            <Container>
            <h1>Estos son tus cursos {userDetauil.name}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>{userDetauil.id}</td>
                <td>{userDetauil.name}</td>
                <td>{userDetauil.email}</td>
                </tr>


                </tbody>

                </Table>
                <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre del Curso</th>
                    <th>Intensidad Horaria</th>
                    </tr>
                </thead>
                <tbody>
                     {
                    
                    cursos && cursos.map(x => {
                             return (
                                 <>
                             <tr>
                             <td>{x.id}</td>
                             <td>{x.name}</td>
                             <td>{x.intensidad} Horas</td>
                             </tr>
                             </>
                             )
                         })
                   
                    }    

                </tbody> 
                </Table>
                
                </Container>
                } 
        </>
    )
}


export default DetailUser