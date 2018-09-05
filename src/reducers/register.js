/* 
*  The Filter used for logining in  
*/ 
const register = (state={}, action) => 
{
  switch(action.type)
  {
    case "REGISTER_USER": 
      console.log("hitting the REGISTER USER redux store"); 
      return state; 
    default: 
      return state; 
  }
}

export default register