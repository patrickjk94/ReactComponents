/* 
*  The Filter for searching for a user 
*/ 
const searchFilter = (state="", action) => 
{
  switch(action.type)
  {
    case "UPDATE_USER_FILTER": 
      return action.filter; 
    default: 
      return state; 
  }
}

export default searchFilter