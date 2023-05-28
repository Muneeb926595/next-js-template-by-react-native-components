export const BASE = "api end point";

export const loginUserByMailUrl = () => {
  return encodeURI(`app_api/login`);
};

export const loginUserByPhoneUrl = () => {
  return encodeURI(`app_api/login_with_phone`);
};

export const registerUserByMailUrl = () => {
  return encodeURI(`customer/signup_user_by_email`);
};

export const registerUserByPhoneUrl = () => {
  return encodeURI(`customer/signup_user_by_phone_number`);
};

export const updateUserProfileUrl = () => {
  return encodeURI(`customer/edit_customer`);
};

export const changePasswordUrl = () => {
  return encodeURI(`app_api/change_password`);
};

export const getBannerImagesUrl = () => {
  return encodeURI(`product/banner-images`);
};

export const getLivePromotionsUrl = () => {
  return encodeURI(`product/live-promotions`);
};

export const getPremiumCouponsUrl = () => {
  return encodeURI(`product/premium-coupons`);
};

export const getOurProductsUrl = () => {
  return encodeURI(`product/our-products`);
};

export const getSoldOutProuctsUrl = () => {
  return encodeURI(`product/sold-out-products`);
};

export const getPrimeTicketsUrl = () => {
  return encodeURI(`product/prime-tickets`);
};

export const getRequestMailOtpUrl = () => {
  return encodeURI(`app_api/email_verification`);
};

export const getRequestPhoneOtpUrl = () => {
  return encodeURI(`app_api/phone_number_verification`);
};

export const getVerifyMailOtpUrl = () => {
  return encodeURI(`app_api/code_verification`);
};

export const getVerifyPhoneOtpUrl = () => {
  return encodeURI(`app_api/phone_code_verification`);
};

// wishlist
export const getAddToWishListUrl = () => {
  return encodeURI(`wishlist/add_to_wishlist`);
};
export const getUserWishListUrl = () => {
  return encodeURI(`wishlist/user_wishlist_list`);
};
export const getRemoveFromWishListUrl = (id) => {
  return encodeURI(`wishlist/remove_from_wishlist/${id}`);
};

// tickets
export const getTicketListUrl = () => {
  return encodeURI(`ticket/user_ticket_list`);
};

// premium coupons
export const getPremiumCouponsListUrl = () => {
  return encodeURI(`premium_coupon/app_premium_coupon_list`);
};
export const getRedeemCouponUrl = () => {
  return encodeURI(`premium_coupon/redeem_coupon`);
};

// Proucts
export const getProductsListUrl = () => {
  return encodeURI(`product/app_product_list`);
};

// Prizes
export const getSoldOutPrizesListUrl = () => {
  return encodeURI(`prize/soldout_prize_list`);
};

export const getPrimeDealsUrl = () => {
  return encodeURI(`prize/app_prize_list`);
};

export const getPromotionalPrizeListUrl = () => {
  return encodeURI(`product/app_product_prize_list`);
};

export const getWinnersUrl = () => {
  return encodeURI(`prize/prize_winners`);
};

export const getRecentDrawsUrl = () => {
  return encodeURI(`prize/recent_draws`);
};

export const getUpcommingDrawsUrl = () => {
  return encodeURI(`prize/upcoming_draws`);
};

// address
export const getAddShippingAddressUrl = () => {
  return encodeURI(`customer/add_shipping_address`);
};
export const getUpdateShippingAddressUrl = (id: string) => {
  return encodeURI(`customer/edit_shipping_address/${id}`);
};
export const getRemoveShippingAddressUrl = (id: string) => {
  return encodeURI(`customer/remove_shipping_address/${id}`);
};
export const getShippingAddressesUrl = () => {
  return encodeURI(`customer/get_shipping_address`);
};

export const getUserOrderHistoryUrl = () => {
  return encodeURI(`order/get_order_history`);
};
export const getTokenListingUrl = () => {
  return encodeURI(`token/active_token_list`);
};
export const getRedeemPromoCodeUrl = (id: string) => {
  return encodeURI(`promo_code/redeem_promo_code/${id}`);
};
export const getRedeemPrimeDealUrl = () => {
  return encodeURI(`prize/redeem_prime_deal`);
};
export const getBuyProductUrl = () => {
  return encodeURI(`app_api/payment_from_user`);
};
export const getBuyTokenUrl = () => {
  return encodeURI(`app_api/buy_token_from_card`);
};
export const getUserProfileUrl = () => {
  return encodeURI(`app_api/user_profile`);
};
