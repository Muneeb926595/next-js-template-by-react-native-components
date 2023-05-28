import {
  getUserProfileUrl,
  loginUserByMailUrl,
  loginUserByPhoneUrl,
  registerUserByMailUrl,
  registerUserByPhoneUrl,
  updateUserProfileUrl,
  changePasswordUrl,
  getRequestMailOtpUrl,
  getVerifyPhoneOtpUrl,
  getRequestPhoneOtpUrl,
  getVerifyMailOtpUrl,
} from "../../api/Endpoint";

import { axiosInstance as axios } from "../../api/axios";
import { AuthActionTypes } from "../redux/actionTypes";
import StorageHelper from "../../utils/StorageHelper";
import {
  clearTicketsData,
  clearWishListData,
  getBannerImages,
  getLivePromotions,
  getOurProducts,
  getPremiumCoupons,
  getPrimeDeals,
  getSoldOutProucts,
  getWinners,
} from "../product/ProductActions";
import { setCustomAlert } from "../customer/CustomerActions";
import { Gender } from "@/types";

export const getHomeScreenData = (dispatch: any) => {
  dispatch(getBannerImages() as any);
  dispatch(getPrimeDeals() as any);
  dispatch(getLivePromotions() as any);
  dispatch(getPremiumCoupons() as any);
  dispatch(getOurProducts() as any);
  dispatch(getSoldOutProucts() as any);
  dispatch(getWinners() as any);
};

export const loginUserByMail = (email: string, password: string) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_BY_MAIL_START,
    });
    const url = loginUserByMailUrl();

    const request = {
      email,
      password,
      type: 1,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data.token && data.token !== "undefined") {
          loginUserByMailSuccess(dispatch, data);
        } else {
          loginUserByMailFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        loginUserByMailFail(dispatch, error?.response?.data?.message);
      });
  };
};
const loginUserByMailFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.LOGIN_USER_BY_MAIL_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const loginUserByMailSuccess = (dispatch, data) => {
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.USER_ID,
    data?.user?.user_id?._id?.toString()
  );
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.Access_Token,
    data?.token?.toString()
  );

  setTimeout(() => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_BY_MAIL_SUCCESS,
      payload: data,
    });
  }, 200);

  dispatch(authenticateUser(true) as any);
  getHomeScreenData(dispatch);
  dispatch(getUserProfile() as any);
};

export const loginUserByPhone = (phoneNo: string, password: string) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_BY_PHONE_START,
    });
    const url = loginUserByPhoneUrl();

    const request = {
      phone_number: phoneNo,
      password,
      type: 1,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data.token && data.token !== "undefined") {
          loginUserByPhoneSuccess(dispatch, data);
        } else {
          loginUserByPhoneFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        loginUserByPhoneFail(dispatch, error?.response?.data?.message);
      });
  };
};
const loginUserByPhoneFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.LOGIN_USER_BY_PHONE_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const loginUserByPhoneSuccess = (dispatch, data) => {
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.USER_ID,
    data?.user?.user_id?._id?.toString()
  );
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.Access_Token,
    data?.token?.toString()
  );

  setTimeout(() => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_BY_PHONE_SUCCESS,
      payload: data,
    });
  }, 200);

  dispatch(authenticateUser(true) as any);
  getHomeScreenData(dispatch);
  dispatch(getUserProfile() as any);
};

export const registerUserByMail = (
  name: string,
  email: string,
  phoneNo: string,
  pass: string
) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.REGISTER_USER_BY_MAIL_START,
    });
    const url = registerUserByMailUrl();

    const request = {
      name: name,
      email,
      phone_number: phoneNo,
      password: pass,
      referal_code: "",
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data?.code && data.code === 200) {
          registerUserByMailSuccess(dispatch, data, email);
        } else {
          registerUserByMailFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        registerUserByMailFail(dispatch, error?.response?.data?.message);
      });
  };
};
const registerUserByMailFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.REGISTER_USER_BY_MAIL_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const registerUserByMailSuccess = (dispatch, data, email) => {
  setTimeout(() => {
    dispatch({
      type: AuthActionTypes.REGISTER_USER_BY_MAIL_SUCCESS,
      payload: data,
    });
  }, 200);

  dispatch(setShowOtpModal(true) as any);
};

export const registerUserByPhone = (
  name: string,
  email: string,
  phoneNo: string,
  pass: string
) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.REGISTER_USER_BY_PHONE_START,
    });
    const url = registerUserByPhoneUrl();

    const request = {
      name: name,
      email,
      password: pass,
      phone_number: phoneNo,
      referal_code: "",
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data?.code && data.code === 200) {
          registerUserByPhoneSuccess(dispatch, data, phoneNo);
        } else {
          registerUserByPhoneFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        registerUserByPhoneFail(dispatch, error?.response?.data?.message);
      });
  };
};
const registerUserByPhoneFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.REGISTER_USER_BY_PHONE_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const registerUserByPhoneSuccess = (dispatch, data, phoneNo) => {
  setTimeout(() => {
    dispatch({
      type: AuthActionTypes.REGISTER_USER_BY_PHONE_SUCCESS,
      payload: data,
    });
  }, 200);

  dispatch(setShowOtpModal(true) as any);
};

export const updateUserProfile = (
  email: string,
  phoneNo: string,
  gender: Gender,
  dob: Date,
  name: string
) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.UPDATE_USER_PROFILE_START,
    });
    const url = updateUserProfileUrl();

    const request = {
      email,
      phone_number: phoneNo,
      gender,
      date_of_birth: dob,
      name,
      profile_image: "",
    };
    axios
      .put(url, request)
      .then((res) => {
        const { data } = res;
        if (data) {
          updateUserProfileSuccess(dispatch, data);
        } else {
          updateUserProfileFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        updateUserProfileFail(dispatch, error?.response?.data?.message);
      });
  };
};
const updateUserProfileFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.UPDATE_USER_PROFILE_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const updateUserProfileSuccess = (dispatch, data) => {
  dispatch({
    type: AuthActionTypes.UPDATE_USER_PROFILE_SUCCESS,
    payload: data,
  });
  dispatch(getUserProfile() as any);
  // navigationRef.goBack();
};

export const getUserProfile = () => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.GET_USER_PROFILE_START,
    });
    const url = getUserProfileUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data) {
          getUserProfileSuccess(dispatch, data);
        } else {
          getUserProfileFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getUserProfileFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getUserProfileFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.GET_USER_PROFILE_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const getUserProfileSuccess = (dispatch, data) => {
  dispatch({
    type: AuthActionTypes.GET_USER_PROFILE_SUCCESS,
    payload: data,
  });
};

export const changePassword = (
  currentPassword: string,
  newPassword: string
) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.CHANGE_PASSWORD_START,
    });
    const url = changePasswordUrl();

    const request = {
      old_password: currentPassword,
      new_password: newPassword,
      confirm_password: newPassword,
    };
    axios
      .put(url, request)
      .then((res) => {
        const { data } = res;
        if (data) {
          changePasswordSuccess(dispatch, data);
        } else {
          changePasswordFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        changePasswordFail(dispatch, error?.response?.data?.message);
      });
  };
};
const changePasswordFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.CHANGE_PASSWORD_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const changePasswordSuccess = (dispatch, data) => {
  dispatch({
    type: AuthActionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: data,
  });

  alert("Success");
  // navigationRef.goBack();
};

export const requestMailOtp = (email: string, successCallback: any) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.REQUEST_MAIL_OTP_START,
    });
    const url = getRequestMailOtpUrl();

    const request = {
      email,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data) {
          requestMailOtpSuccess(dispatch, data, successCallback);
        } else {
          requestMailOtpFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        requestMailOtpFail(dispatch, error?.response?.data?.message);
      });
  };
};
const requestMailOtpFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.REQUEST_MAIL_OTP_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const requestMailOtpSuccess = (dispatch, data, successCallback: any) => {
  dispatch({
    type: AuthActionTypes.REQUEST_MAIL_OTP_SUCCESS,
    payload: data,
  });
  successCallback();
};

export const verifyMailOtp = (email, otp: string, errorHandler) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.VERIFY_MAIL_OTP_START,
    });
    const url = getVerifyMailOtpUrl();

    const request = {
      email,
      verification_code: otp,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data.token && data.token !== "undefined") {
          verifyMailOtpSuccess(dispatch, data);
        } else {
          verifyMailOtpFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        errorHandler(error?.response?.data?.message);
        verifyMailOtpFail(dispatch, error?.response?.data?.message);
      });
  };
};
const verifyMailOtpFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.VERIFY_MAIL_OTP_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const verifyMailOtpSuccess = (dispatch, data) => {
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.USER_ID,
    data?.customer?.user_id?._id?.toString()
  );
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.Access_Token,
    data?.token?.toString()
  );

  dispatch({
    type: AuthActionTypes.VERIFY_MAIL_OTP_SUCCESS,
    payload: data,
  });

  dispatch(setShowOtpModal(false) as any);
  dispatch(authenticateUser(true) as any);
  getHomeScreenData(dispatch);
  dispatch(getUserProfile() as any);
};

export const requestPhoneOtp = (phone_number: string, successCallback: any) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.REQUEST_PHONE_NO_OTP_START,
    });
    const url = getRequestPhoneOtpUrl();

    const request = {
      phone_number,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data) {
          requestPhoneOtpSuccess(dispatch, data, successCallback);
        } else {
          requestPhoneOtpFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        requestPhoneOtpFail(dispatch, error?.response?.data?.message);
      });
  };
};
const requestPhoneOtpFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.REQUEST_PHONE_NO_OTP_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const requestPhoneOtpSuccess = (dispatch, data, successCallback: any) => {
  dispatch({
    type: AuthActionTypes.REQUEST_PHONE_NO_OTP_SUCCESS,
    payload: data,
  });
  successCallback();
};

export const verifyPhoneOtp = (
  phone_number: string,
  otp: string,
  errorHandler
) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.VERIFY_PHONE_NO_OTP_START,
    });
    const url = getVerifyPhoneOtpUrl();

    const request = {
      phone_number,
      verification_code: otp,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data.token && data.token !== "undefined") {
          verifyPhoneOtpSuccess(dispatch, data);
        } else {
          verifyPhoneOtpFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        errorHandler(error?.response?.data?.message);
        verifyPhoneOtpFail(dispatch, error?.response?.data?.message);
      });
  };
};
const verifyPhoneOtpFail = (dispatch, errorMessage) => {
  dispatch({
    type: AuthActionTypes.VERIFY_PHONE_NO_OTP_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const verifyPhoneOtpSuccess = (dispatch, data) => {
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.USER_ID,
    data?.customer?.user_id?._id?.toString()
  );
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.Access_Token,
    data?.token?.toString()
  );

  dispatch({
    type: AuthActionTypes.VERIFY_PHONE_NO_OTP_SUCCESS,
    payload: data,
  });

  dispatch(setShowOtpModal(false) as any);
  dispatch(authenticateUser(true) as any);
  getHomeScreenData(dispatch);
  dispatch(getUserProfile() as any);
};

export const authenticateUser = (isAuthenticated: boolean) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.AUTHENTICATE_USER,
      payload: isAuthenticated,
    });
  };
};

export const logout = () => {
  StorageHelper.removeItem(StorageHelper.StorageKeys.USER_ID);
  StorageHelper.removeItem(StorageHelper.StorageKeys.Access_Token);

  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGOUT_USER,
    });

    dispatch(clearTicketsData() as any);
    dispatch(clearWishListData() as any);
    // navigate("HomeScreen");
  };
};

export const setShowOtpModal = (isOpen) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.SHOW_OTP_MODAL,
      payload: isOpen,
    });
  };
};
