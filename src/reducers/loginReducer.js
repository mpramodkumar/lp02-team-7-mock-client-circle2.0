import {
  CURRENT_USER__SUCCESS,
  AUTH__SUCCESS,
  FLASH_MESSAGE__FAILURE,
} from '../actions/actionTypes';

const initialState = {
  currentUser: {},
  isAdmin: false,
};

function user(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER__SUCCESS:
      debugger;
      return Object.assign({}, state, {
        currentUser: action.user,
      });
    case AUTH__SUCCESS:
      debugger;
      return Object.assign({}, state, {
        currentUser: action.user,
        isAdmin: action.user.isAdmin,
      });
    case FLASH_MESSAGE__FAILURE:
      debugger;
      return Object.assign({}, state, {
        message: action.message,
      });
    default:
      return state;
  }
}

export default user;
