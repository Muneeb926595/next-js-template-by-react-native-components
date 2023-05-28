import { Dictionary } from "../types";

export type LocaleMessage = {
  locale: string;
  messages: object;
};

export type DateTimeFormatOptions = {
  value: Date | number;
  style: any;
  localeMatcher: "best fit" | "lookup";
  formatMatcher: "basic" | "best fit";

  timeZone: string;
  hour12: boolean;

  weekday: "narrow" | "short" | "long";
  era: "narrow" | "short" | "long";
  year: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "narrow" | "short" | "long";
  day: "numeric" | "2-digit";
  hour: "numeric" | "2-digit";
  minute: "numeric" | "2-digit";
  second: "numeric" | "2-digit";
  timeZoneName: "short" | "long";
};

export interface IFormatted<T> {
  (props: T): any;
  propTypes: T;
}

export type HTMLFormatOptions = {
  id: string;
  style?: any;
};

export type MessageFormatOptions = {
  id: string;
  style?: any;
  values?: any;
  defaultMessage?: string;
};

export type NumberFormatOptions = {
  style?: any;
  value?: number;
  localeMatcher: "best fit" | "lookup";
  formatStyle: "decimal" | "currency" | "percent";
  currency: string;
  currencyDisplay: "symbol" | "code" | "name";
  useGrouping: boolean;
  minimumIntegerDigits: number;
  minimumFractionDigits: number;
  maximumFractionDigits: number;
  minimumSignificantDigits: number;
  maximumSignificantDigits: number;
};

export type PluralFormatOptions = {
  style?: "cardinal" | "ordinal";
  value: any;
  other: any;
  zero?: any;
  one?: any;
  two?: any;
  few?: any;
  many?: any;
  children?: (formattedPlural: any) => any;
};

type configMap = Dictionary<string>;

export type localeConfig = {
  systemMessages: any;
  defaultLanguageLocale?: configMap;
  localeFallbackMap?: configMap;
};

export interface IMessageGroup {}

export interface IErrorMessages extends IMessageGroup {
  readonly nothingFound: string;
  readonly fieldIsRequired: string;
  readonly mailIsInvalid: string;
  readonly phoneNoRequired: string;
  readonly emailRequired: string;
}

export interface IInstructionMessages extends IMessageGroup {
  readonly areYouSureYouWantToLogout: string;
  readonly earnToRedeemTheCoupon: string;
  readonly earnCoinToRedeemCoupons: string;
  readonly earlierIfpromotionSoldOut: string;
}

export interface ILabelTexts extends IMessageGroup {
  readonly bag: string;
  readonly profile: string;
  readonly wishList: string;
  readonly tickets: string;
  readonly home: string;
  readonly winners: string;
  readonly soldOut: string;
  readonly state: string;
  readonly country: string;
  readonly ourProducts: string;
  readonly orderProductAndGetDeal: string;
  readonly premiumCoupons: string;
  readonly livePromotions: string;
  readonly primeDeals: string;
  readonly billingAddress: string;
  readonly phoneSignIN: string;
  readonly emailSignIN: string;
  readonly startShopping: string;
  readonly yourWishlistIsEempty: string;
  readonly addProductToTheBagAndWinPrizes: string;
  readonly launchedRecently: string;
  readonly closingDate: string;
  readonly getTokens: string;
  readonly earlier: string;
  readonly buyItemNow: string;
  readonly winWithPriceAndCurrency: string;
  readonly winPrize: string;
  readonly cashWithPriceAndCurrency: string;
  readonly cashWithCurrency: string;
  readonly redeemed: string;
  readonly redeemedDate: string;
  readonly outOf: string;
  readonly hasWonCash: string;
  readonly hasWon: string;
  readonly ticketNo: string;
  readonly addProductToBagAndWinPrize: string;
  readonly buyOurProductsAndGetTickets: string;
  readonly promotionalTickets: string;
  readonly primeTickets: string;
  readonly tokens: string;
  readonly activeDraws: string;
  readonly orderHistory: string;
  readonly shippingAddress: string;
  readonly referFriends: string;
  readonly officeLocation: string;
  readonly charity: string;
  readonly dubaiEconomy: string;
  readonly language: string;
  readonly currency: string;
  readonly support: string;
  readonly confirmation: string;
  readonly logout: string;
  readonly editProfile: string;
  readonly greetUser: string;
  readonly youHaveNotOrderedAnythingYet: string;
  readonly promotionalTokens: string;
  readonly purchasedTokens: string;
  readonly donationTokens: string;
  readonly referralTokens: string;
  readonly totalEarned: string;
  readonly totalSpent: string;
  readonly getMoreTokens: string;
  readonly topUp: string;
  readonly giftVoucherCode: string;
  readonly recentDraws: string;
  readonly deliveryCharges: string;
  readonly upcommingDraws: string;
  readonly bePatientBestYetToCome: string;
  readonly fullNameLabel: string;
  readonly phoneNoLabel: string;
  readonly emailLabel: string;
  readonly enterOTP: string;
  readonly personalDetails: string;
  readonly accountDetails: string;
  readonly male: string;
  readonly female: string;
  readonly currentPassword: string;
  readonly newPassword: string;
  readonly newPasswordAgain: string;
  readonly dob: string;
  readonly selectCountry: string;
  readonly moreDeals: string;
  readonly morePromotions: string;
  readonly search: string;
  readonly redeemATicketToWin: string;
  readonly couponWithPrice: string;
  readonly redeemWithProductName: string;
  readonly redeemNow: string;
  readonly buyWithProductName: string;
  readonly vatIncludedWithPercentage: string;
  readonly vatIncluded: string;
  readonly addToBag: string;
  readonly buyOurProduct: string;
  readonly getAComplimentoryTicketToWin: string;
  readonly moreCoupons: string;
  readonly welcomeBack: string;
  readonly signin: string;
  readonly labelOr: string;
  readonly password: string;
  readonly changePassword: string;
  readonly forgotPassword: string;
  readonly alreadyHaveAccount: string;
  readonly deliverProductToMe: string;
  readonly addressInformation: string;
  readonly work: string;
  readonly pickUpFromCopodealsHQ: string;
  readonly donateProductsAndGetTokens: string;
  readonly chooseLanguage: string;
  readonly english: string;
  readonly arabic: string;
  readonly priceWithCash: string;
  readonly totalPrice: string;
  readonly remove: string;
  readonly drawInWithData: string;
  readonly addNewAddress: string;
  readonly flat: string;
  readonly area: string;
  readonly payByCard: string;
  readonly weAccept: string;
  readonly network: string;
  readonly internationalPaymentSolution: string;
  readonly cardNo: string;
  readonly cardHolderName: string;
  readonly expiresEnd: string;
  readonly goodThingComeToThoseWhoWait: string;
  readonly backToHome: string;
  readonly register: string;
  readonly termsAndConditions: string;
  readonly privacyPolicy: string;
  readonly prizeDetails: string;
  readonly productDetails: string;
  readonly donateProductsAndGetExtraTicket: string;
  readonly drawDateWas: string;
  readonly viewDetails: string;
  readonly orderId: string;
  readonly productName: string;
  readonly orderDate: string;
  readonly purchasedDate: string;
  readonly cashWithCurrencyWithOutColor: string;
  readonly drawDateWillBeAnnounced: string;
  readonly whenTheLivePromotionIsSoldOut: string;
  readonly drawsIn: string;
  readonly closingSoon: string;
  readonly dontHaveAccount: string;
  readonly verify: string;
  readonly added: string;
  readonly primeDealDetails: string;
  readonly promotionDealDetails: string;
  readonly closingSoonDetails: string;
  readonly premiumCoupon: string;
  readonly notificaitons: string;
  readonly makePayment: string;
  readonly otpVerification: string;
  readonly enterTheOtpYouHaveReceived: string;
  readonly resendCode: string;
  readonly resend: string;
  readonly seconds: string;
  readonly thankYou: string;
  readonly invoice: string;
  readonly orderNo: string;
  readonly invoiceDate: string;
  readonly customerInformation: string;
  readonly name: string;
  readonly email: string;
}

export interface IGeneralMessages extends IMessageGroup {
  readonly default: string;
  readonly cancel: string;
  readonly yes: string;
  readonly save: string;
  readonly done: string;
  readonly show: string;
  readonly hide: string;
  readonly congratulation: string;
  readonly back: string;
  readonly continue: string;
}

export interface IApiErrorMessages extends IMessageGroup {
  readonly authTokenExpired: string;
}

export interface ISystemMessages {
  readonly apiError: IApiErrorMessages;
  readonly error: IErrorMessages;
  readonly general: IGeneralMessages;
  readonly instruction: IInstructionMessages;
  readonly label: ILabelTexts;
}
