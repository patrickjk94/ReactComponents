/* This is the todolist reducer */ 
const rows = (state, action) => 
{
  console.log("rows is called"); 
  if (typeof state === 'undefined') {
    return [
      {id: 1, fname: "Jhon", lname: "Adams"}, 
      {id: 2, fname: "George", lname: "Washington"}
    ]; 
  }

  /* Switch on the action types */ 
  switch(action.type)
  {
    case "DELETE_USER": 
      let newArray = state.slice();
      var i;
      for (i = 0; i < newArray.length; i++)
      {
          if(newArray[i].id == action.id)
          {
              newArray.splice(i, 1);
          }
      }
      newArray.splice(action.id, 1);  
      return newArray; 
    case "ADD_USER": 
      return [ ...state, 
        {id: (state.length+1), fname: action.fname, lname: action.lname} 
      ]; 
    case "TABLE_DATA_LOADED": 
      return [...state, ...action.data]; 
    default: 
      return state; 
  }
}

export default rows