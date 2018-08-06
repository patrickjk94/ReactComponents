import axios from 'axios'; 
var constants = require('../constants.js')

//ADD USER 
export function registerUser(user) {
    return (dispatch) => {
        
        //dispatch(itemsIsLoading(true));
        axios.post(constants.server_url.concat(`/register`), user )
        .then(res => {
            console.log(res);
            console.log(res.data);
            dispatch({
                type: 'REGISTER_USER', 
                user
            })
        })
    }
}



