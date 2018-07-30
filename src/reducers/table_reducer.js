/* This is the todolist reducer */ 
const table_reducer = (state = { has_data: false, rows: [] }, action) => 
{
  /* Switch on the action types */ 
  switch(action.type)
  {
    case "DELETE_USER": 
      let newArray = state.rows.slice();
      var i;
      for (i = 0; i < newArray.length; i++)
      {
          if(newArray[i].id === action.id)
          {
              newArray.splice(i, 1);
              break;
          }
      }
      return {has_data: state.has_data, rows: newArray}; 
    case "ADD_USER": 
      return {has_data: state.has_data, rows: [...state.rows, {id: (state.length + 1), fname: action.user.fname, lname: action.user.lname} ]}; 
    case "TABLE_DATA_LOADED": 
        let new_state = {}; 
        new_state.has_data = ! state.has_data; 
        new_state.rows = [...state.rows, ...action.data.map(c => {return {id: "" + c._id, fname: c.fname, lname: c.lname }})]; 
        console.log(new_state); 
        return new_state; 
        // return [...state, ...action.data.map(c => {return {id: "" + c._id, fname: c.fname, lname: c.lname }})]; 
    default: 
      return state; 
  }
}

export default table_reducer