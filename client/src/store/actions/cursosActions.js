import axios from 'axios';
import { LOGIN, GET_CURSOS, ADD_CURSO, ADD_CURSO_USER } from "../contans"

const url = 'localhost:3001';

export const createCurso = (data) => {
    return (dispatch) => {

        console.log(data)
        axios.post(`http://${url}/cursos`, data)
            .then(res => {
                dispatch({
                    type: ADD_CURSO,
			    	payload: res.data.data,
                })
            })
    }
}

export function getCursos() {
	return (dispatch) => {
		axios
			.get(`http://${url}/cursos`)
			.then((res) => {
				console.log(res.data.data);
				if (res.status === 200) {
			    dispatch({
			    	type: GET_CURSOS,
			    	payload: res.data.data,
			    });
				} else {
					dispatch({
						type: 500,
					});
				}
			})
			.catch((err) => {
				console.log('Catch Error');
				console.log(err);
			});
	};
}

export function addCurso(user, cursos){
    return async (dispatch) => {
		console.log('idCurso', cursos)
		console.log('idUser', user)
		await axios.put(`http://${url}/users/${user}/curso/${cursos}`)
			.then(res => {
				console.log(res.data.data)
				dispatch({
					type:ADD_CURSO_USER,
					payload: res.data.data

				})
			})
        // .then(res => {
        //     if(res.status === 200) {
        //         let userd = res.data.data.id;
        //         dispatch({
        //             type: ADD_PRODUCT,
        //             products: res.data.data
        //         })
        //         cursos.forEach(catId => {
        //             axios.put(`http://${url}/products/${userd}/category/${catId}`)
        //                 .then(res => {
        //                     if (res.status === 200){
        //                         dispatch({
        //                             type: ADD_CATEGORY_PRODUCT,
        //                             product: res.data.data
        //                         })
        //                     }
        //                     else {
        //                         dispatch({
        //                             type: ERROR_MESSAGE,
        //                             message: 'Error al añadir categoría(s) al producto'
        //                         })
        //                     }
        //                 })
        //         })
        //     }else{
        //         dispatch({
        //             type: ERROR_MESSAGE,
        //             message: 'Error al crear el producto'
        //         })
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }
}



