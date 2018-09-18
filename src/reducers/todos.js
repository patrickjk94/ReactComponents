/* This is the todolist reducer */ 
const todos = (state, action) => 
{
  // Hard coded values for todo items 
  if (typeof state === 'undefined') {
    return [
      {id:0, text:"task one", completed:false}, 
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
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      case 'DELTE_TODO': 
        console.log("deleted todo: " + action.todo.id); 

    default:
      return state
  }
}

function getNewIndex(state){
  let i = 0; 
  state.forEach((element, index, array) => {
    i = element.id + i; 
  })
  return i; 
}

export default todos