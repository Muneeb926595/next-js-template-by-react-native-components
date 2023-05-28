import { axiosInstance as axios } from "../../api/axios";
import {
  getAddShippingAddressUrl,
  getRedeemPromoCodeUrl,
  getShippingAddressesUrl,
  getTokenListingUrl,
  getRemoveShippingAddressUrl,
  getUpdateShippingAddressUrl,
} from "../../api/Endpoint";

import { CustomerActionTypes } from "../redux/actionTypes";
import { AddressPayload } from "../../types";
import { getUserProfile } from "../auth/AuthActions";

export const addShippingAddress = (address: AddressPayload) => {
  return (dispatch) => {
    dispatch({
      type: CustomerActionTypes.ADD_NEW_SHIPPING_ADDRESS_START,
    });
    const url = getAddShippingAddressUrl();

    axios
      .post(url, address)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          addShippingAddressSuccess(dispatch, data);
        } else {
          addShippingAddressFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        addShippingAddressFail(dispatch, error?.response?.data?.message);
      });
  };
};
const addShippingAddressFail = (dispatch, errorMessage) => {
  dispatch({
    type: CustomerActionTypes.ADD_NEW_SHIPPING_ADDRESS_FAIL,
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
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const addShippingAddressSuccess = (dispatch, data) => {
  dispatch({
    type: CustomerActionTypes.ADD_NEW_SHIPPING_ADDRESS_SUCCESS,
    payload: data,
  });
  dispatch(getShippingAddresses() as any);
};

export const removeShippingAddress = (addressId: string) => {
  return (dispatch) => {
    dispatch({
      type: CustomerActionTypes.REMOVE_NEW_SHIPPING_ADDRESS_START,
    });
    const url = getRemoveShippingAddressUrl(addressId);

    axios
      .delete(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          removeShippingAddressSuccess(dispatch, data);
        } else {
          removeShippingAddressFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        removeShippingAddressFail(dispatch, error?.response?.data?.message);
      });
  };
};
const removeShippingAddressFail = (dispatch, errorMessage) => {
  dispatch({
    type: CustomerActionTypes.REMOVE_NEW_SHIPPING_ADDRESS_FAIL,
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
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const removeShippingAddressSuccess = (dispatch, data) => {
  dispatch({
    type: CustomerActionTypes.REMOVE_NEW_SHIPPING_ADDRESS_SUCCESS,
    payload: data,
  });
  dispatch(getShippingAddresses() as any);
};

export const updateShippingAddress = (id: string) => {
  return (dispatch) => {
    dispatch({
      type: CustomerActionTypes.UPDATE_SHPPING_ADDRESS_START,
    });
    const url = getUpdateShippingAddressUrl(id);

    axios
      .put(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          updateShippingAddressSuccess(dispatch, data);
        } else {
          updateShippingAddressFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        updateShippingAddressFail(dispatch, error?.response?.data?.message);
      });
  };
};
const updateShippingAddressFail = (dispatch, errorMessage) => {
  dispatch({
    type: CustomerActionTypes.UPDATE_SHPPING_ADDRESS_FAIL,
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
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const updateShippingAddressSuccess = (dispatch, data) => {
  dispatch({
    type: CustomerActionTypes.UPDATE_SHPPING_ADDRESS_SUCCESS,
    payload: data,
  });
  dispatch(getShippingAddresses() as any);
};

export const getShippingAddresses = () => {
  return (dispatch) => {
    dispatch({
      type: CustomerActionTypes.GET_SHPPING_ADDRESS_START,
    });
    const url = getShippingAddressesUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getShippingAddressesSuccess(dispatch, data);
        } else {
          getShippingAddressesFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getShippingAddressesFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getShippingAddressesFail = (dispatch, errorMessage) => {
  dispatch({
    type: CustomerActionTypes.GET_SHPPING_ADDRESS_FAIL,
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
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const getShippingAddressesSuccess = (dispatch, data) => {
  dispatch({
    type: CustomerActionTypes.GET_SHPPING_ADDRESS_SUCCESS,
    payload: data,
  });
};

export const getUserTokens = () => {
  return (dispatch) => {
    dispatch({
      type: CustomerActionTypes.GET_TOKEN_LISTING_START,
    });
    const url = getTokenListingUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getUserTokensSuccess(dispatch, data);
        } else {
          getUserTokensFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getUserTokensFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getUserTokensFail = (dispatch, errorMessage) => {
  dispatch({
    type: CustomerActionTypes.GET_TOKEN_LISTING_FAIL,
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
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const getUserTokensSuccess = (dispatch, data) => {
  dispatch({
    type: CustomerActionTypes.GET_TOKEN_LISTING_SUCCESS,
    payload: data,
  });
};

export const getRedeemPromoCode = (id) => {
  return (dispatch) => {
    dispatch({
      type: CustomerActionTypes.REDEEM_PROMO_CODE_START,
    });
    const url = getRedeemPromoCodeUrl(id);

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getRedeemPromoCodeSuccess(dispatch, data);
        } else {
          getRedeemPromoCodeFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getRedeemPromoCodeFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getRedeemPromoCodeFail = (dispatch, errorMessage) => {
  dispatch({
    type: CustomerActionTypes.REDEEM_PROMO_CODE_FAIL,
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
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const getRedeemPromoCodeSuccess = (dispatch, data) => {
  dispatch({
    type: CustomerActionTypes.REDEEM_PROMO_CODE_SUCCESS,
    payload: data,
  });

  dispatch(
    setCustomAlert({
      title: "",
      message: "Redeemed SuccessFully",
      buttons: [
        {
          text: "OK",
          onPress: () => {},
          style: "OK",
        },
      ],
      options: {},
      visibllity: true,
    }) as any
  );
  dispatch(getUserProfile() as any);
};

export const setCustomAlert = (customAlertData) => {
  return (dispatch) => {
    dispatch({
      type: CustomerActionTypes.SET_CUSTOM_ALERT,
      payload: customAlertData,
    });
  };
};
