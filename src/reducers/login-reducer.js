/* 
*  The Filter used for logining in  
*/ 
const searchFilter = (state={}, action) => 
{
  switch(action.type)
  {
    case "ADD_USER": 
      return action.user; 
    default: 
      return state; 
  }
}

export default searchFilter