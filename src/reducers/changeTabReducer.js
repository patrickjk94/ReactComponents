import { changeTab } from '../actions';

const changeTabReducer = (state=1, action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return action.payload;
    default:
      return state;
  }
}; 

export default changeTabReducer; 
