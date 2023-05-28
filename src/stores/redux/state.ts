declare global {
  interface AuthState {
    user: any;
    authenticated?: boolean;
    loading?: boolean;
    requestMailOtpLoading?: boolean;
    requestPhoneOtpLoading?: boolean;
    mailOtpVerificationLoading?: boolean;
    phoneOtpVerificationLoading?: boolean;
    profileLoading?: boolean;
    changePasswordLoading?: boolean;
    showOtpModal?: boolean;
  }

  interface ProductState {
    wishlist: any;
    primeDeals: Array<any>;
    livePromotions: Array<any>;
    premiumCoupons: Array<any>;
    ourProducts: Array<any>;
    soldeOutProducts: Array<any>;
    winners: Array<any>;
    recentDraws: Array<any>;
    upCommingDraws: Array<any>;
    cart: Array<any>;
    tickets: Array<any>;
    bannerImages: Array<string>;
    orderhistory: Array<string>;
    orderhistoryLoading: boolean;
    redeemPrimeDealLoading: boolean;
    buyProductLoading: boolean;
    buyTokensLoading: boolean;
    bannerImagesLoading: boolean;
    ourProductsLoading: boolean;
    premiumCouponsLoading: boolean;
    ticketsLoading: boolean;
    redeemCouponLoading: boolean;
    winnersLoading: boolean;
    soldeOutProductsLoading: boolean;
    livePromotionsLoading: boolean;
    primeDealsLoading: boolean;
    wishlistLoading: boolean;
    recentDrawsLoading: boolean;
    upCommingDrawsLoading: boolean;
    loading?: boolean;
  }

  interface CustomerState {
    shippingAddresses: any;
    tokensListing?: any;
    customAlertData?: any;
    redeemPromoCodeLoading: boolean;
    shippingAddressesLoading?: boolean;
    tokensListingLoading?: boolean;
  }
}
export { type AuthState, type ProductState, type CustomerState };
