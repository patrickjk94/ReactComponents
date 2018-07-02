/* This is the todolist reducer */ 
const todos = (state, action) => 
{
  // Hard coded values for todo items 
  state = [
    {m_id:53, text:"task one", completed:false}, 
    {m_id:54, text:"task two", completed:true}, 
    {m_id:55, text:"task three", completed:false}
  ]; 

  switch (action.type) 
  {
    case 'ADD_TODO':
      return [
        ...state,
        {
          m_id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_TODO':
      // Iterate through todo items and if the ids match toggle todo.completed
      console.log("action id:"); 
      console.log("" + action.id); 
      var new_state = [...state]; 
      var new_state = state.map(todo => (todo.m_id === action.id) ? {...todo, completed: !todo.completed} : todo); 
      console.log("new state: "); 
      console.log(new_state); 
      return new_state; 

    default:
      return state
  }
}

export default todos