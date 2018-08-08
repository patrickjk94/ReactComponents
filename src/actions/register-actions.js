import axios from 'axios'; 
var constants = require('../constants.js')

//REGISTER USER 
export function registerUser(user) {
    console.log("register-actions registerUser user: " + user.username + " " + user.email + " " + user.password); 
    return (dispatch) => {
        axios.post(constants.server_url.concat(`/registerUser`), user )
        .then(res => {
            console.log("register-actions registerUser then")
            console.log(res);
            console.log(res.data);
            var my_action = {success: true}; 
            dispatch({
                type: 'REGISTER_USER', 
                my_action
            })
        })
    }
}