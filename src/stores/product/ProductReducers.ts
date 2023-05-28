import { ProductActionTypes } from "./../redux/actionTypes";
import { ProductState } from "../redux/state";
import StorageHelper, { StorageKeys } from "../../utils/StorageHelper";

const INITIAL_STATE: ProductState = {
  wishlist: [],
  bannerImages: [],
  primeDeals: [],
  livePromotions: [],
  ourProducts: [],
  premiumCoupons: [],
  soldeOutProducts: [],
  winners: [],
  recentDraws: [],
  upCommingDraws: [],
  tickets: [],
  cart: [],
  orderhistory: [],
  redeemPrimeDealLoading: false,
  buyProductLoading: false,
  buyTokensLoading: false,
  orderhistoryLoading: false,
  winnersLoading: false,
  redeemCouponLoading: false,
  ticketsLoading: false,
  premiumCouponsLoading: false,
  ourProductsLoading: false,
  soldeOutProductsLoading: false,
  primeDealsLoading: false,
  bannerImagesLoading: false,
  livePromotionsLoading: false,
  wishlistLoading: false,
  recentDrawsLoading: false,
  upCommingDrawsLoading: false,
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const ProductReducer = (
  state: ProductState = INITIAL_STATE,
  action: Action
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.GET_BANNER_IMAGES_START: {
      return { ...state, bannerImagesLoading: true };
    }
    case ProductActionTypes.GET_BANNER_IMAGES_SUCCESS: {
      return {
        ...state,
        bannerImages: action.payload,
        bannerImagesLoading: false,
      };
    }
    case ProductActionTypes.GET_BANNER_IMAGES_FAIL: {
      return {
        ...state,
        bannerImagesLoading: false,
      };
    }
    case ProductActionTypes.GET_PRIME_DEALS_START: {
      return { ...state, primeDealsLoading: true };
    }
    case ProductActionTypes.GET_PRIME_DEALS_SUCCESS: {
      return {
        ...state,
        primeDeals: action?.payload?.prizes,
        primeDealsLoading: false,
      };
    }
    case ProductActionTypes.GET_PRIME_DEALS_FAIL: {
      return {
        ...state,
        primeDealsLoading: false,
      };
    }
    case ProductActionTypes.GET_LIVE_ROMOTIONS_START: {
      return { ...state, livePromotionsLoading: true };
    }
    case ProductActionTypes.GET_LIVE_ROMOTIONS_SUCCESS: {
      return {
        ...state,
        livePromotions: action?.payload?.product_prizes,
        livePromotionsLoading: false,
      };
    }
    case ProductActionTypes.GET_LIVE_ROMOTIONS_FAIL: {
      return {
        ...state,
        livePromotionsLoading: false,
      };
    }
    case ProductActionTypes.GET_PREMIUM_COUPONS_START: {
      return { ...state, premiumCouponsLoading: true };
    }
    case ProductActionTypes.GET_PREMIUM_COUPONS_SUCCESS: {
      return {
        ...state,
        premiumCoupons: action?.payload?.premium_coupons,
        premiumCouponsLoading: false,
      };
    }
    case ProductActionTypes.GET_PREMIUM_COUPONS_FAIL: {
      return {
        ...state,
        premiumCouponsLoading: false,
      };
    }
    case ProductActionTypes.GET_EXCLUSIVE_PRODUCTS_START: {
      return { ...state, ourProductsLoading: true };
    }
    case ProductActionTypes.GET_EXCLUSIVE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        ourProducts: action?.payload?.products,
        ourProductsLoading: false,
      };
    }
    case ProductActionTypes.GET_EXCLUSIVE_PRODUCTS_FAIL: {
      return {
        ...state,
        ourProductsLoading: false,
      };
    }
    case ProductActionTypes.GET_SOLD_OUT_PRODUCTS_START: {
      return { ...state, soldeOutProductsLoading: true };
    }
    case ProductActionTypes.GET_SOLD_OUT_PRODUCTS_SUCCESS: {
      return {
        ...state,
        soldeOutProducts: action?.payload?.sold_prizes,
        soldeOutProductsLoading: false,
      };
    }
    case ProductActionTypes.GET_SOLD_OUT_PRODUCTS_FAIL: {
      return {
        ...state,
        soldeOutProductsLoading: false,
      };
    }
    case ProductActionTypes.GET_WINNERS_START: {
      return { ...state, winnersLoading: true };
    }
    case ProductActionTypes.GET_WINNERS_SUCCESS: {
      return {
        ...state,
        winners: action?.payload?.prize_winners,
        winnersLoading: false,
      };
    }
    case ProductActionTypes.GET_WINNERS_FAIL: {
      return {
        ...state,
        winnersLoading: false,
      };
    }
    case ProductActionTypes.GET_TICKETS_START: {
      return { ...state, ticketsLoading: true };
    }
    case ProductActionTypes.GET_TICKETS_SUCCESS: {
      return {
        ...state,
        tickets: action?.payload?.tickets,
        ticketsLoading: false,
      };
    }
    case ProductActionTypes.GET_TICKETS_FAIL: {
      return {
        ...state,
        ticketsLoading: false,
      };
    }
    case ProductActionTypes.ADD_TO_WISHLIST_START: {
      return { ...state, wishlistLoading: true };
    }
    case ProductActionTypes.ADD_TO_WISHLIST_SUCCESS: {
      return {
        ...state,
        wishlistLoading: false,
      };
    }
    case ProductActionTypes.ADD_TO_WISHLIST_FAIL: {
      return {
        ...state,
        wishlistLoading: false,
      };
    }
    case ProductActionTypes.GET_WISHLIST_START: {
      return { ...state, wishlistLoading: true };
    }
    case ProductActionTypes.GET_WISHLIST_SUCCESS: {
      return {
        ...state,
        wishlist: action?.payload?.wishlist,
        wishlistLoading: false,
      };
    }
    case ProductActionTypes.GET_WISHLIST_FAIL: {
      return {
        ...state,
        wishlistLoading: false,
      };
    }
    case ProductActionTypes.GET_RECENT_DRAWS_START: {
      return { ...state, recentDrawsLoading: true };
    }
    case ProductActionTypes.GET_RECENT_DRAWS_SUCCESS: {
      return {
        ...state,
        recentDraws: action?.payload?.recent_draws,
        recentDrawsLoading: false,
      };
    }
    case ProductActionTypes.GET_RECENT_DRAWS_FAIL: {
      return {
        ...state,
        recentDrawsLoading: false,
      };
    }
    case ProductActionTypes.GET_UPCOMMING_DRAWS_START: {
      return { ...state, upCommingDrawsLoading: true };
    }
    case ProductActionTypes.GET_UPCOMMING_DRAWS_SUCCESS: {
      return {
        ...state,
        upCommingDraws: action?.payload?.upcoming_draws,
        upCommingDrawsLoading: false,
      };
    }
    case ProductActionTypes.GET_UPCOMMING_DRAWS_FAIL: {
      return {
        ...state,
        upCommingDrawsLoading: false,
      };
    }
    case ProductActionTypes.REDEEM_COUPON_START: {
      return { ...state, redeemCouponLoading: true };
    }
    case ProductActionTypes.REDEEM_COUPON_SUCCESS: {
      return {
        ...state,
        redeemCouponLoading: false,
      };
    }
    case ProductActionTypes.REDEEM_COUPON_FAIL: {
      return {
        ...state,
        redeemCouponLoading: false,
      };
    }
    case ProductActionTypes.REMOVE_FROM_WISHLIST_START: {
      return { ...state, wishlistLoading: true };
    }
    case ProductActionTypes.REMOVE_FROM_WISHLIST_SUCCESS: {
      return {
        ...state,
        wishlistLoading: false,
      };
    }
    case ProductActionTypes.REMOVE_FROM_WISHLIST_FAIL: {
      return {
        ...state,
        wishlistLoading: false,
      };
    }
    case ProductActionTypes.GET_ORDER_HISTORY_START: {
      return { ...state, orderhistoryLoading: true };
    }
    case ProductActionTypes.GET_ORDER_HISTORY_SUCCESS: {
      return {
        ...state,
        orderhistory: action?.payload?.orders,
        orderhistoryLoading: false,
      };
    }
    case ProductActionTypes.GET_ORDER_HISTORY_FAIL: {
      return {
        ...state,
        orderhistoryLoading: false,
      };
    }
    case ProductActionTypes.BUY_PRODUCT_START: {
      return { ...state, buyProductLoading: true };
    }
    case ProductActionTypes.BUY_PRODUCT_SUCCESS: {
      return {
        ...state,
        buyProductLoading: false,
      };
    }
    case ProductActionTypes.BUY_PRODUCT_FAIL: {
      return {
        ...state,
        buyProductLoading: false,
      };
    }
    case ProductActionTypes.BUY_TOKENS_START: {
      return { ...state, buyTokensLoading: true };
    }
    case ProductActionTypes.BUY_TOKENS_SUCCESS: {
      return {
        ...state,
        buyTokensLoading: false,
      };
    }
    case ProductActionTypes.BUY_TOKENS_FAIL: {
      return {
        ...state,
        buyTokensLoading: false,
      };
    }
    case ProductActionTypes.REDEEM_PRIME_DEAL_START: {
      return { ...state, redeemPrimeDealLoading: true };
    }
    case ProductActionTypes.REDEEM_PRIME_DEAL_SUCCESS: {
      return {
        ...state,
        redeemPrimeDealLoading: false,
      };
    }
    case ProductActionTypes.REDEEM_PRIME_DEAL_FAIL: {
      return {
        ...state,
        redeemPrimeDealLoading: false,
      };
    }
    case ProductActionTypes.ADD_TO_CART: {
      const itemToAdd = { ...action.payload };
      let cartItems;
      if (state?.cart?.length > 0) {
        cartItems = [...state.cart];
      } else {
        cartItems = [];
      }

      const index = cartItems.findIndex((item) => item?._id === itemToAdd?._id);
      if (index !== -1) {
        cartItems[index] = { ...itemToAdd };
      } else {
        cartItems.push(itemToAdd);
      }
      try {
        StorageHelper.saveItem(StorageKeys.Cart, cartItems);
      } catch (error) {}
      return {
        ...state,
        cart: cartItems,
      };
    }
    case ProductActionTypes.CLEAR_CART: {
      try {
        StorageHelper.saveItem(StorageKeys.Cart, action.payload);
      } catch (error) {}
      return {
        ...state,
        cart: action?.payload,
      };
    }
    case ProductActionTypes.REMOVE_FROM_CART: {
      const idToRemove = action.payload;
      const updatedItems = state?.cart?.filter(
        (item) => item?._id !== idToRemove
      );
      try {
        StorageHelper.saveItem(StorageKeys.Cart, updatedItems);
      } catch (error) {}
      return {
        ...state,
        cart: updatedItems,
      };
    }
    case ProductActionTypes.INCREMENT_QUANTITY_FOR_CART_ITEM: {
      const cartItems = [...state.cart];
      const index = cartItems.findIndex(
        (item) => item?._id === action?.payload
      );
      if (index !== -1) {
        cartItems[index] = {
          ...cartItems[index],
          quantity: cartItems[index].quantity + 1,
        };
      }
      try {
        StorageHelper.saveItem(StorageKeys.Cart, cartItems);
      } catch (error) {}
      return {
        ...state,
        cart: cartItems,
      };
    }
    case ProductActionTypes.DECREMENT_QUANTITY_FOR_CART_ITEM: {
      const cartItems = [...state.cart];
      const index = cartItems.findIndex(
        (item) => item?._id === action?.payload
      );
      if (index !== -1 && !(cartItems[index].quantity < 1)) {
        cartItems[index] = {
          ...cartItems[index],
          quantity: cartItems[index].quantity - 1,
        };
      }
      try {
        StorageHelper.saveItem(StorageKeys.Cart, cartItems);
      } catch (error) {}
      return {
        ...state,
        cart: cartItems,
      };
    }
    case ProductActionTypes.IMPORT_CART_DATA: {
      return {
        ...state,
        cart: action?.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default ProductReducer;
