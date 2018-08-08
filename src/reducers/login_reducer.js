/* 
*  The Filter used for logining in  
*/ 
const loginReducer = (state={}, action) => 
{
  switch(action.type)
  {
    case "REGISTER_USER": 
      return action.success; 
    default: 
      return state; 
  }
}

export default searchFilter