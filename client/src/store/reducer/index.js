import { LOGIN, GET_CURSOS, ADD_CURSO, GET_USERS, ADD_USERS, ADD_CURSO_USER, GET_USER_ID, LOGOUT } from "../contans"



import Cookie from 'js-cookie';

const userLoad = Cookie.getJSON('userLoad') || null
console.log('***cookie***')
console.log('userLoad')

const initialState = {
    userRegister:{},
    userLog : userLoad,
    cursos:[],
    users:[],
    userDetail:{},
    logged: false

}

const ReducerRoot = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        /********LOGIN**** */
        case LOGIN:
            return {...state, userLog: action.payload}
        case LOGOUT:
            return {...state, userLog:[], logged:false}

        /********USERS**** */
        case GET_USERS:
            return {...state, users: action.payload} 
        case ADD_USERS:
            return {...state, users: state.users.concat(action.payload)}   
        case GET_USER_ID:
            return  {...state, userDetail:action.payload}   
        case ADD_CURSO_USER:
            let user = state.users.filter((x) => x.id == parseInt(action.payload.id))[0];
			if (user === undefined) return { ...state };
			let ind = state.users.indexOf(user);

			let usersNew = [...state.users];
			console.log(usersNew[ind]);
			usersNew[ind].cursos = action.payload.cursos;
			console.log(usersNew);
			return { ...state, users: usersNew };   
        /********CURSOS**** */
        case GET_CURSOS:
            return {...state, cursos: action.payload}
        case ADD_CURSO:
            return {...state, cursos: state.cursos.concat(action.payload)}
    }
}



export default ReducerRoot