import axios from 'axios'; 
var constants = require('../constants.js')

//DELETE USER 
export function registerUser(user) {
    return (dispatch) => {
        axios.post(constants.server_url.concat(`/registerUser/`) + id )
        .then(res => {
            dispatch({
                type: 'REGISTER_USER',
                id: id
            })
        })
    }
}
