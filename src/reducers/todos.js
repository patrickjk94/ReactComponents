/* This is the todolist reducer */ 
const todos = (state, action) => 
{
  // Hard coded values for todo items 
  if (typeof state === 'undefined') {
    return [
      {id:0, text:"finish todolist", completed:false}, 
      {id:1, text:"task two", completed:true}, 
      {id:2, text:"task three", completed:false}
    ]; 
  }

  switch (action.type) 
  {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: getNewIndex(state),
          text: action.text,
          completed: false
        }
      ]
      case 'TOGGLE_TODO':
        return state.map( todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo )
      case 'DELETE_TODO':
        var new_state = [...state]; 
        var i = new_state.length; 
        while (i--) {
            var m_todo = new_state[i]; 
            if (m_todo.id === action.id) { 
              new_state.splice(i, 1);
            } 
        }
        return new_state; 
        // console.log( "deleted todo: " + action.todo.id ); 
    default:
      return state; 
  }
}

function getNewIndex(state){
  let i = 0; 
  state.forEach((element, index, array) => {
    i = element.id + i; 
  }); 
  return i; 
}

export default todos