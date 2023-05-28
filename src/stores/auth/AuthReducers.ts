import { AuthActionTypes } from "./../redux/actionTypes";
import { AuthState } from "../redux/state";

const INITIAL_STATE: AuthState = {
  user: {},
  authenticated: false,
  loading: false,
  profileLoading: false,
  changePasswordLoading: false,
  requestMailOtpLoading: false,
  requestPhoneOtpLoading: false,
  phoneOtpVerificationLoading: false,
  mailOtpVerificationLoading: false,
  showOtpModal: false,
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: AuthState = INITIAL_STATE,
  action: Action
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER_BY_MAIL_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.LOGIN_USER_BY_MAIL_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        user: action.payload?.user?.user_id,
        loading: false,
      };
    }
    case AuthActionTypes.LOGIN_USER_BY_MAIL_FAIL: {
      return {
        ...state,
        authenticated: false,
        loading: false,
      };
    }
    case AuthActionTypes.LOGIN_USER_BY_PHONE_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.LOGIN_USER_BY_PHONE_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        user: action.payload?.user?.user_id,
        loading: false,
      };
    }
    case AuthActionTypes.LOGIN_USER_BY_PHONE_FAIL: {
      return {
        ...state,
        authenticated: false,
        loading: false,
      };
    }
    case AuthActionTypes.REGISTER_USER_BY_MAIL_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.REGISTER_USER_BY_MAIL_SUCCESS: {
      return {
        ...state,
        user: action.payload?.customer?.user_id,
        loading: false,
      };
    }
    case AuthActionTypes.REGISTER_USER_BY_MAIL_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case AuthActionTypes.REGISTER_USER_BY_PHONE_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.REGISTER_USER_BY_PHONE_SUCCESS: {
      return {
        ...state,
        user: action.payload?.customer?.user_id ?? "",
        loading: false,
      };
    }
    case AuthActionTypes.REGISTER_USER_BY_PHONE_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case AuthActionTypes.VERIFY_PHONE_NO_OTP_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.VERIFY_PHONE_NO_OTP_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        user: action.payload?.customer?.user_id,
        loading: false,
      };
    }
    case AuthActionTypes.VERIFY_PHONE_NO_OTP_FAIL: {
      return {
        ...state,
        authenticated: false,
        loading: false,
      };
    }
    case AuthActionTypes.VERIFY_MAIL_OTP_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.VERIFY_MAIL_OTP_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        user: action.payload?.customer?.user_id,
        loading: false,
      };
    }
    case AuthActionTypes.VERIFY_MAIL_OTP_FAIL: {
      return {
        ...state,
        authenticated: false,
        loading: false,
      };
    }
    case AuthActionTypes.UPDATE_USER_PROFILE_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.UPDATE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case AuthActionTypes.UPDATE_USER_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case AuthActionTypes.GET_USER_PROFILE_START: {
      return { ...state, profileLoading: true };
    }
    case AuthActionTypes.GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        user: action?.payload?.user,
        profileLoading: false,
      };
    }
    case AuthActionTypes.GET_USER_PROFILE_FAIL: {
      return {
        ...state,
        profileLoading: false,
      };
    }
    case AuthActionTypes.CHANGE_PASSWORD_START: {
      return { ...state, changePasswordLoading: true };
    }
    case AuthActionTypes.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        changePasswordLoading: false,
      };
    }
    case AuthActionTypes.CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        changePasswordLoading: false,
      };
    }
    case AuthActionTypes.REQUEST_MAIL_OTP_START: {
      return { ...state, requestMailOtpLoading: true };
    }
    case AuthActionTypes.REQUEST_MAIL_OTP_SUCCESS: {
      return {
        ...state,
        requestMailOtpLoading: false,
      };
    }
    case AuthActionTypes.REQUEST_MAIL_OTP_FAIL: {
      return {
        ...state,
        requestMailOtpLoading: false,
      };
    }
    case AuthActionTypes.REQUEST_PHONE_NO_OTP_START: {
      return { ...state, requestPhoneOtpLoading: true };
    }
    case AuthActionTypes.REQUEST_PHONE_NO_OTP_SUCCESS: {
      return {
        ...state,
        requestPhoneOtpLoading: false,
      };
    }
    case AuthActionTypes.REQUEST_PHONE_NO_OTP_FAIL: {
      return {
        ...state,
        requestPhoneOtpLoading: false,
      };
    }
    case AuthActionTypes.AUTHENTICATE_USER: {
      return {
        ...state,
        authenticated: action.payload,
        loading: false,
      };
    }
    case AuthActionTypes.LOGOUT_USER: {
      return {
        ...state,
        authenticated: false,
        loading: false,
      };
    }
    case AuthActionTypes.SHOW_OTP_MODAL: {
      return {
        ...state,
        showOtpModal: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
