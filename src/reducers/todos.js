const todos = (state = [ {id:53, text:"task one", completed:false}, 
{id:54, text:"task two", completed:true}, 
{id:55, text:"task three", completed:false}], action) => {
    switch (action.type) {
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
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
}

export default todos
  