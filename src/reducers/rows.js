/* This is the todolist reducer */ 
const rows = (state = [], action) => 
{
  /* Switch on the action types */ 
  switch(action.type)
  {
    case "DELETE_USER": 
      let newArray = state.slice();
      var i;
      for (i = 0; i < newArray.length; i++)
      {
          if(newArray[i].id === action.id)
          {
              newArray.splice(i, 1);
              break;
          }
      }
      return newArray; 
    case "ADD_USER": 
      console.log("ADD_USER"); 
      return [ ...state, 
        {id: (state.length+1), fname: action.user.fname, lname: action.user.lname} 
      ]; 
    case "TABLE_DATA_LOADED": 
        console.log(action.data);
        return [...state, ...action.data.map(c => {return {id: "" + c._id, fname: c.fname, lname: c.lname }})]; 
    default: 
      return state; 
  }
}

export default rows