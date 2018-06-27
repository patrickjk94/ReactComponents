/* This is the todolist reducer */ 
const todos = (state, action) => 
{
  // Hard coded values for todo items 
  state = [
    {id:53, text:"task one", completed:false}, 
    {id:54, text:"task two", completed:true}, 
    {id:55, text:"task three", completed:false}
  ]; 

  switch (action.type) 
  {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_TODO':
      // Iterate through todo items and if the ids match toggle todo.completed
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo) 

    default:
      return state
  }
}

export default todos