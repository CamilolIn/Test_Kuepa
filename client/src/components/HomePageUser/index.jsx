import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../Nav/index';
import { createUser, getUsers } from '../../store/actions/userActions'



const HomePage = () => {
    const dispacth = useDispatch()
    const session = useSelector((state) => state);
    console.log(session)
    
    useEffect(() => {
        dispacth(getUsers)
    }, [])

    return (
    <div>
        <Navigation /> 

        Hello {session &&  session.userLog.name}
    </div>
    )
}

export default HomePage