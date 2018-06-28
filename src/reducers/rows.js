/* This is the todolist reducer */ 
const rows = (state, action) => 
{
  console.log("rows is called"); 
  if (typeof state === 'undefined') {
    return [
      {id: "1123412", fname: "Jhon", lname: "Adams"}, 
      {id: "5234523", fname: "George", lname: "Washington"}
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
      console.log("action: adduser"); 
      console.log(action); 
      return [ ...state, 
        {id: (state.length+1), fname: action.user.fname, lname: action.user.lname} 
      ]; 
    case "TABLE_DATA_LOADED": 
      return [...state, ...action.data.map(c => {return {id: c._id+"", fname: c.fname, lname: c.lname }})]; 
    default: 
      return state; 
  }
}

export default rows