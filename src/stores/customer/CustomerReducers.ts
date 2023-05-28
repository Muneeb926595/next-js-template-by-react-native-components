import { CustomerActionTypes } from "./../redux/actionTypes";
import { CustomerState } from "../redux/state";

const INITIAL_STATE: CustomerState = {
  shippingAddresses: [],
  tokensListing: {},
  customAlertData: {
    visibllity: false,
  },
  tokensListingLoading: false,
  shippingAddressesLoading: false,
  redeemPromoCodeLoading: false,
};
interface Action {
  payload: any;
  type: string;
}
const CustomerReducer = (
  state: CustomerState = INITIAL_STATE,
  action: Action
): CustomerState => {
  switch (action.type) {
    case CustomerActionTypes.ADD_NEW_SHIPPING_ADDRESS_START: {
      return { ...state, shippingAddressesLoading: true };
    }
    case CustomerActionTypes.ADD_NEW_SHIPPING_ADDRESS_SUCCESS: {
      return {
        ...state,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.ADD_NEW_SHIPPING_ADDRESS_FAIL: {
      return {
        ...state,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.REMOVE_NEW_SHIPPING_ADDRESS_START: {
      return { ...state, shippingAddressesLoading: true };
    }
    case CustomerActionTypes.REMOVE_NEW_SHIPPING_ADDRESS_SUCCESS: {
      return {
        ...state,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.REMOVE_NEW_SHIPPING_ADDRESS_FAIL: {
      return {
        ...state,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.UPDATE_SHPPING_ADDRESS_START: {
      return { ...state, shippingAddressesLoading: true };
    }
    case CustomerActionTypes.UPDATE_SHPPING_ADDRESS_SUCCESS: {
      return {
        ...state,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.UPDATE_SHPPING_ADDRESS_FAIL: {
      return {
        ...state,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.GET_SHPPING_ADDRESS_START: {
      return { ...state, shippingAddressesLoading: true };
    }
    case CustomerActionTypes.GET_SHPPING_ADDRESS_SUCCESS: {
      return {
        ...state,
        shippingAddresses: action?.payload?.addresses,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.GET_SHPPING_ADDRESS_FAIL: {
      return {
        ...state,
        shippingAddressesLoading: false,
      };
    }
    case CustomerActionTypes.GET_TOKEN_LISTING_START: {
      return { ...state, tokensListingLoading: true };
    }
    case CustomerActionTypes.GET_TOKEN_LISTING_SUCCESS: {
      return {
        ...state,
        tokensListing: action?.payload?.tokens,
        tokensListingLoading: false,
      };
    }
    case CustomerActionTypes.GET_TOKEN_LISTING_FAIL: {
      return {
        ...state,
        tokensListingLoading: false,
      };
    }
    case CustomerActionTypes.REDEEM_PROMO_CODE_START: {
      return { ...state, redeemPromoCodeLoading: true };
    }
    case CustomerActionTypes.REDEEM_PROMO_CODE_SUCCESS: {
      return {
        ...state,
        redeemPromoCodeLoading: false,
      };
    }
    case CustomerActionTypes.REDEEM_PROMO_CODE_FAIL: {
      return {
        ...state,
        redeemPromoCodeLoading: false,
      };
    }
    case CustomerActionTypes.SET_CUSTOM_ALERT: {
      return {
        ...state,
        customAlertData: action?.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default CustomerReducer;
