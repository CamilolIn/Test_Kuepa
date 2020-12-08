import React, {useState, useEffect, useRef} from 'react'
import Socket from './Socket';
import { Card, Button, Form, Container, Col, Row } from 'react-bootstrap';
import socket from './Socket';
import s from '../../styles/chat.module.css'

const Chat = ({nombre}) => {
    const [mensaje, setMesanje] = useState("")
    const [mensajes, setMesanjes] = useState([])

    useEffect(()=> {
        socket.emit('conectado', nombre)
    }, [nombre]);

    useEffect(()=> {
        socket.on('mensajes', mensaje => {
            setMesanjes([...mensajes, mensaje])
        })
        return ()=>  {socket.off()}
    }, [mensajes]);

    const submit = (e)=> {
        e.preventDefault();
        socket.emit('mensaje', nombre, mensaje)
        setMesanje('')
    }

    console.log(mensajes)

    return (
    <div className={s.contn__mensajes__chat}>
        <div className={s.mensajes___chat}>
            {mensajes.map((m, i)=> {
                return (
                    <>
                    {
                       m.servidor ?<div><p className={s.pMensaje}> { m.mensaje}</p></div>:
                       <div><p className={s.parr, s.pNombre}>{m.nombre} </p>  <p className={s.parr, s.pMensaje}>{m.mensaje}</p> </div>
                    }

                </>
                )
            })}
        </div>
            <form onSubmit={submit} className={s.form__cont}>
                <textarea name="" id="" cols="30" rows="10" value={mensaje} onChange={e => setMesanje(e.target.value)} placeholder='Tu mensaje...'></textarea>
                <div className={s.cont_form__button}>
                <Button className={s.form__button} variant="dark" type='submit'>Enviar</Button>
                </div>
            </form>
    </div>
    )
}


export default Chat