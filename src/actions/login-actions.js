import axios from 'axios'; 
var constants = require('../constants.js')

//ADD USER 
export function login(user) {
    console.log("login action creator : " + user.username + " " + user.password); 
    return (dispatch) => {
        //dispatch(itemsIsLoading(true));
        //Post to the server and send the user object 
        axios.post(constants.server_url.concat(`/loginUser`), user )
        .then(res => {
            console.log(res);
            console.log('token: ' + res.data.token);
            //We should get back a token from the server if the login credentials are correct 
            let token = res.data.token; 
            let success = res.data.success; 
            let message = success ? "success!" : "failure!"; 
            console.log(message); 
            dispatch({
                type: 'LOGIN_USER', 
                token
            })
        })
    }
}



