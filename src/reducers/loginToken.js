/* 
*  The Filter used for logining in  
*/ 
const loginToken = (state={}, action) => 
{
  switch(action.type)
  {
    case "LOGIN_TOKEN": 
        return { token: action.token }; 
    default: 
      return state; 
  }
}

export default register