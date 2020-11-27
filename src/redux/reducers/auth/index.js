// import {LOGOUT_SUCCESS, UPDATE_USER_DATA} from '../../actions/types';
const INITIAL_STATE = {
  token: null,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case UPDATE_USER_DATA:
    //   return {
    //     ...state,
    //     token: action.token,
    //     user: action.payload,
    //   };
    // case LOGOUT_SUCCESS:
    //   return INITIAL_STATE;
    default:
      return state;
  }
};
