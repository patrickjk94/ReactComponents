import axios from 'axios'; 
var constants = require('../constants.js')

//DELETE USER 
export function deleteUser(id) {
    return (dispatch) => {
        axios.delete(constants.server_url.concat(`/removePerson/`) + id )
        .then(res => {
            dispatch({
                type: 'DELETE_USER',
                id: id
            })
        })
    }
}

//ADD USER 
export function addUser(user) {
    return (dispatch) => {
        
        //dispatch(itemsIsLoading(true));
        axios.post(constants.server_url.concat(`/addPerson`), user )
        .then(res => {
            console.log(res);
            console.log(res.data);
            dispatch({
                type: 'ADD_USER', 
                user
            })
        })
    }
}

//LOAD DATA 
export function tableDataLoaded(data){
    return {
        type: 'TABLE_DATA_LOADED', 
        data
    }; 
}

//FETCH DATA 
export function itemsFetchData(url) {
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch(tableDataLoaded(response.data));
        })
    }
}
