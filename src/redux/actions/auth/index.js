// import {removeToken} from '../../../utils';
// import {LOGOUT_SUCCESS, UPDATE_USER_DATA} from '../types';
// import {navigateToAuth} from '../../../navigation/navigator';
// import {fetchUserData} from '../../../services';

export const getUserData = ({onSuccess, onFail}) => {
  return async (dispatch) => {
    // const user_res = await fetchUserData();
    // if (!user_res.isError && user_res.Data) {
    //   dispatch({type: UPDATE_USER_DATA, payload: user_res.Data});
    //   onSuccess && onSuccess();
    // } else {
    //   onFail && onFail();
    // }
  };
};

export const logout = (navigation) => {
  // return async (dispatch) =>
  //   removeToken().then(() => {
  //     dispatch({type: LOGOUT_SUCCESS});
  //     navigateToAuth(navigation);
  //   });
};
