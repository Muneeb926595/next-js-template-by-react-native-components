import { axiosInstance as axios } from "../../api/axios";
import {
  getBannerImagesUrl,
  getPrimeDealsUrl,
  getWinnersUrl,
  getPromotionalPrizeListUrl,
  getSoldOutPrizesListUrl,
  getPremiumCouponsListUrl,
  getProductsListUrl,
  getTicketListUrl,
  getAddToWishListUrl,
  getUserWishListUrl,
  getRemoveFromWishListUrl,
  getRecentDrawsUrl,
  getRedeemCouponUrl,
  getUserOrderHistoryUrl,
  getBuyProductUrl,
  getRedeemPrimeDealUrl,
  getUpcommingDrawsUrl,
  getBuyTokenUrl,
} from "../../api/Endpoint";
import { BuyProductPayload, BuyTokensPayload } from "../../types";
import StorageHelper from "../../utils/StorageHelper";
import { getUserProfile } from "../auth/AuthActions";
import { setCustomAlert } from "../customer/CustomerActions";
import { ProductActionTypes } from "../redux/actionTypes";
import { images } from "./mockdata/images";

export const getBannerImages = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_BANNER_IMAGES_START,
    });
    const url = getBannerImagesUrl();

    getBannerImagesSuccess(dispatch, images);
    //   axios
    //     .get(url)
    //     .then((res) => {
    //       const { data } = res;
    //       if (data?.success && data.token && data.token !== "undefined") {
    //         getBannerImagesSuccess(dispatch, data);
    //       } else {
    //         getBannerImagesFail(dispatch, "There was an error connection");
    //       }
    //     })
    //     .catch((error) => {
    //       if (error?.response?.data?.error === "Unauthorized") {
    //         alert("Invalid Credentials");
    //       }
    //       getBannerImagesFail(dispatch, error?.response?.data?.message);
    //     });
  };
};
const getBannerImagesFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_BANNER_IMAGES_FAIL,
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
const getBannerImagesSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_BANNER_IMAGES_SUCCESS,
    payload: data,
  });
};

export const getPrimeDeals = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_PRIME_DEALS_START,
    });
    const url = getPrimeDealsUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getPrimeDealsSuccess(dispatch, data);
        } else {
          getPrimeDealsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getPrimeDealsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getPrimeDealsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_PRIME_DEALS_FAIL,
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
const getPrimeDealsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_PRIME_DEALS_SUCCESS,
    payload: data,
  });
};

export const getLivePromotions = () => {
  return async (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_LIVE_ROMOTIONS_START,
    });
    const url = getPromotionalPrizeListUrl();
    const userId = await StorageHelper.getItem(
      StorageHelper.StorageKeys.USER_ID
    );

    let request: any = {};

    if (userId) {
      request.user_id = userId;
    }

    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getLivePromotionsSuccess(dispatch, data);
        } else {
          getLivePromotionsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getLivePromotionsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getLivePromotionsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_LIVE_ROMOTIONS_FAIL,
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
const getLivePromotionsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_LIVE_ROMOTIONS_SUCCESS,
    payload: data,
  });
};

export const getPremiumCoupons = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_PREMIUM_COUPONS_START,
    });
    const url = getPremiumCouponsListUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getPremiumCouponsSuccess(dispatch, data);
        } else {
          getPremiumCouponsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getPremiumCouponsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getPremiumCouponsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_PREMIUM_COUPONS_FAIL,
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
const getPremiumCouponsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_PREMIUM_COUPONS_SUCCESS,
    payload: data,
  });
};

export const getOurProducts = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_EXCLUSIVE_PRODUCTS_START,
    });
    const url = getProductsListUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getOurProductsSuccess(dispatch, data);
        } else {
          getOurProductsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getOurProductsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getOurProductsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_EXCLUSIVE_PRODUCTS_FAIL,
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
const getOurProductsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_EXCLUSIVE_PRODUCTS_SUCCESS,
    payload: data,
  });
};

export const getSoldOutProucts = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_SOLD_OUT_PRODUCTS_START,
    });
    const url = getSoldOutPrizesListUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getSoldOutProuctsSuccess(dispatch, data);
        } else {
          getSoldOutProuctsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getSoldOutProuctsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getSoldOutProuctsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_SOLD_OUT_PRODUCTS_FAIL,
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
const getSoldOutProuctsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_SOLD_OUT_PRODUCTS_SUCCESS,
    payload: data,
  });
};

export const getWinners = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_WINNERS_START,
    });
    const url = getWinnersUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getWinnersSuccess(dispatch, data);
        } else {
          getWinnersFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getWinnersFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getWinnersFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_WINNERS_FAIL,
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
const getWinnersSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_WINNERS_SUCCESS,
    payload: data,
  });
};

export const getTickets = (type) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_TICKETS_START,
    });
    const url = getTicketListUrl();

    const request = {
      ticket: type,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getTicketsSuccess(dispatch, data);
        } else {
          getTicketsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getTicketsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getTicketsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_TICKETS_FAIL,
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
const getTicketsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_TICKETS_SUCCESS,
    payload: data,
  });
};

export const addToWishList = (product_id) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.ADD_TO_WISHLIST_START,
    });
    const url = getAddToWishListUrl();

    const request = {
      product_id,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          addToWishListSuccess(dispatch, data);
        } else {
          addToWishListFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        addToWishListFail(dispatch, error?.response?.data?.message);
      });
  };
};
const addToWishListFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.ADD_TO_WISHLIST_FAIL,
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
const addToWishListSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.ADD_TO_WISHLIST_SUCCESS,
    payload: data,
  });
  dispatch(getWishList() as any);
};

export const removeFromWishList = (product_id) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.REMOVE_FROM_WISHLIST_START,
    });
    const url = getRemoveFromWishListUrl(product_id);

    axios
      .delete(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          removeFromWishListSuccess(dispatch, data);
        } else {
          removeFromWishListFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        removeFromWishListFail(dispatch, error?.response?.data?.message);
      });
  };
};
const removeFromWishListFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.REMOVE_FROM_WISHLIST_FAIL,
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
const removeFromWishListSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.REMOVE_FROM_WISHLIST_SUCCESS,
    payload: data,
  });
  dispatch(getWishList());
};

export const getWishList = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_WISHLIST_START,
    });
    const url = getUserWishListUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getWishListSuccess(dispatch, data);
        } else {
          getWishListFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getWishListFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getWishListFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_WISHLIST_FAIL,
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
const getWishListSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_WISHLIST_SUCCESS,
    payload: data,
  });
};

export const getRecentDraws = (draw_type) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_RECENT_DRAWS_START,
    });
    const url = getRecentDrawsUrl();

    const request = {
      draw_type,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getRecentDrawsSuccess(dispatch, data);
        } else {
          getRecentDrawsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getRecentDrawsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getRecentDrawsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_RECENT_DRAWS_FAIL,
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
const getRecentDrawsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_RECENT_DRAWS_SUCCESS,
    payload: data,
  });
};

export const getUpcommingDraws = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_UPCOMMING_DRAWS_START,
    });
    const url = getUpcommingDrawsUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getUpcommingDrawsSuccess(dispatch, data);
        } else {
          getUpcommingDrawsFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getUpcommingDrawsFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getUpcommingDrawsFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_UPCOMMING_DRAWS_FAIL,
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
const getUpcommingDrawsSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_UPCOMMING_DRAWS_SUCCESS,
    payload: data,
  });
};

export const redeemCoupon = (coupon_id) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.REDEEM_COUPON_START,
    });
    const url = getRedeemCouponUrl();

    const request = {
      coupon_id,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          redeemCouponSuccess(dispatch, data);
        } else {
          redeemCouponFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        redeemCouponFail(dispatch, error?.response?.data?.message);
      });
  };
};
const redeemCouponFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.REDEEM_COUPON_FAIL,
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
const redeemCouponSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.REDEEM_COUPON_SUCCESS,
    payload: data,
  });

  dispatch(
    setCustomAlert({
      title: "",
      message: "Redeemed SuccessFully",
      buttons: [
        {
          text: "OK",
          onPress: () => { },
          style: "OK",
        },
      ],
      options: {},
      visibllity: true,
    }) as any
  );
  dispatch(getUserProfile() as any);
  // navigationRef.goBack();
};

export const userOrderHistory = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_ORDER_HISTORY_START,
    });
    const url = getUserOrderHistoryUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          userOrderHistorySuccess(dispatch, data);
        } else {
          userOrderHistoryFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        userOrderHistoryFail(dispatch, error?.response?.data?.message);
      });
  };
};
const userOrderHistoryFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.GET_ORDER_HISTORY_FAIL,
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
const userOrderHistorySuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.GET_ORDER_HISTORY_SUCCESS,
    payload: data,
  });
};

export const buyProduct = (
  card_info: BuyProductPayload,
  successCallback,
  cartData
) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.BUY_PRODUCT_START,
    });
    const url = getBuyProductUrl();

    axios
      .post(url, card_info)
      .then((res) => {
        const { data } = res;

        if (data && data?.code === 200) {
          const inVoiceData = {
            cartData: cartData,
            shipping_address: card_info?.shipping_address,
            orderId: data?.order_id,
            order_option: card_info?.order_option,
          };
          buyProductSuccess(dispatch, data, successCallback, inVoiceData);
        } else {
          buyProductFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        buyProductFail(dispatch, error?.response?.data?.message);
      });
  };
};
const buyProductFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.BUY_PRODUCT_FAIL,
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
const buyProductSuccess = (dispatch, data, successCallback, inVoiceData) => {
  dispatch({
    type: ProductActionTypes.BUY_PRODUCT_SUCCESS,
    payload: data,
  });

  // dispatch(
  //   setCustomAlert({
  //     title: "",
  //     message: "Order Placed Successfully",
  //     buttons: [
  //       {
  //         text: "OK",
  //         onPress: () => {},
  //         style: "OK",
  //       },
  //     ],
  //     options: {},
  //     visibllity: true,
  //   }) as any
  // );
  dispatch(getUserProfile() as any);
  // dispatch(clearCart() as any);
  if (typeof successCallback === "function") {
    successCallback();
  }
  // navigate("HomeScreen");
  // navigate("InvoiceScreen", { inVoiceData });

  dispatch(clearCart() as any);
};

export const buyToken = (card_info: BuyTokensPayload) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.BUY_TOKENS_START,
    });
    const url = getBuyTokenUrl();

    axios
      .post(url, card_info)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          buyTokenSuccess(dispatch, data);
        } else {
          buyTokenFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        buyTokenFail(dispatch, error?.response?.data?.message);
      });
  };
};
const buyTokenFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.BUY_TOKENS_FAIL,
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
const buyTokenSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.BUY_TOKENS_SUCCESS,
    payload: data,
  });

  dispatch(
    setCustomAlert({
      title: "",
      message: "You Have Successfully Purchased Tokens",
      buttons: [
        {
          text: "Ok",
          onPress: () => { },
          style: "Ok",
        },
      ],
      options: {},
      visibllity: true,
    }) as any
  );
  dispatch(getUserProfile() as any);
  // navigate("HomeScreen");
};

export const getRedeemPrimeDeal = (id) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.REDEEM_PRIME_DEAL_START,
    });
    const url = getRedeemPrimeDealUrl();

    const request = {
      prize_id: id,
    };

    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data && data?.code === 200) {
          getRedeemPrimeDealSuccess(dispatch, data);
        } else {
          getRedeemPrimeDealFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getRedeemPrimeDealFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getRedeemPrimeDealFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.REDEEM_PRIME_DEAL_FAIL,
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
const getRedeemPrimeDealSuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.REDEEM_PRIME_DEAL_SUCCESS,
    payload: data,
  });
  dispatch(
    setCustomAlert({
      title: "",
      message: "Redeemed Successfully",
      buttons: [
        {
          text: "OK",
          onPress: () => { },
          style: "OK",
        },
      ],
      options: {},
      visibllity: true,
    }) as any
  );
  dispatch(getUserProfile() as any);
};

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.ADD_TO_CART,
      payload: product,
    });
  };
};

export const importCartData = (cartData) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.IMPORT_CART_DATA,
      payload: cartData,
    });
  };
};

export const removeFromCart = (product_id) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.REMOVE_FROM_CART,
      payload: product_id,
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.CLEAR_CART,
      payload: [],
    });
  };
};

export const incrementCartItemQuantity = (product_id) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.INCREMENT_QUANTITY_FOR_CART_ITEM,
      payload: product_id,
    });
  };
};

export const decrementCartItemQuantity = (product_id) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.DECREMENT_QUANTITY_FOR_CART_ITEM,
      payload: product_id,
    });
  };
};

export const clearTicketsData = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_TICKETS_SUCCESS,
      payload: { tickets: [] },
    });
  };
};

export const clearWishListData = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_WISHLIST_SUCCESS,
      payload: { wishlist: [] },
    });
  };
};
