import axios from 'axios'; 
var constants = require('../constants.js')

//ADD USER 
export function login(user) {
    console.log("login action creator : " + user.username + " " + user.email + " " + user.password); 
    return (dispatch) => {
        
        //dispatch(itemsIsLoading(true));
        axios.post(constants.server_url.concat(`/loginUser`), user )
        .then(res => {
            console.log(res);
            console.log(res.data);
            dispatch({
                type: 'LOGIN_USER', 
                user
            })
        })
    }
}



