import axios from 'axios'; 

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function deleteUser(id) { 
    return {
        type: 'DELETE_USER',
        id: id
    };  
}

export function addUser(user) {
    return (dispatch) => {
        //dispatch(itemsIsLoading(true));

        axios.post(`http://localhost:8000/addUser`, user )
        .then(res => {
            console.log(res);
            console.log(res.data);
            return {
                type: 'ADD_USER', 
                user
            }
        })          
    
    }
}

export function tableDataLoaded(data){
    return {
        type: 'TABLE_DATA_LOADED', 
        data
    }; 
}

export function itemsFetchData(url) {
    return (dispatch) => {
        //dispatch(itemsIsLoading(true));

        axios.get(url).then(response => {
            dispatch(tableDataLoaded(response.data));
        })
    }

    //     fetch(url)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             console.log("Response: ");
    //             console.log(response); 
    //             //dispatch(itemsIsLoading(false));
    //             console.log(response.json()); 

    //             return response;
    //         })
    //         // .then((response) => response.json())
    //         // .then((items) => dispatch(itemsFetchDataSuccess(items)))
    //         // .catch(() => dispatch(itemsHasErrored(true)));
    // };
}
