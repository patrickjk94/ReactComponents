/* This is the todolist reducer */ 
const searchFilter = (state="", action) => 
{
  console.log("Search Filter: "); 
  console.log(action.filter); 
  /* Switch on the action types */ 
  switch(action.type)
  {
    case "UPDATE_USER_FILTER": 
      return action.filter; 
    default: 
      return state; 
  }
}

export default searchFilter