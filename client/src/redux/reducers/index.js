import { combineReducers } from 'redux';

import usersReducer from './user';

const reducer = combineReducers({
    users: usersReducer,
  
})

export default reducer;