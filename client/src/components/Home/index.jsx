import React from 'react'
import s from '../../styles/home.module.css'
import Navigation from '../Nav/index'



const Home = () =>  {
    return (
        <>
        <Navigation className={s.navHome}/>
        <div className={s.bgHome} >
            <div className={s.conten___Home}>
                <h1>SPIRA<span className={s.point__title}>.</span>CO</h1>
                <p>Administrar tus estudiantes y materias nunca fur tan facil. </p>
            </div>
        </div>
        </>
    )
}


export default Home