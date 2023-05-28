export interface Dictionary<T> {
  [index: string]: T;
}

export enum ItemType {
  info = "info",
  instruction = "instruction",
  warning = "warning",
  action = "action",
  pending = "pending",
  success = "success",
  error = "error",
  disabled = "disabled",
  primary = "primary",
  secondary = "secondary",
}

export enum LoginTypes {
  ByEmail = "Email",
  ByPhone = "Phone",
}

export enum OrderTypes {
  DeliverToMe = "DeliverToMe",
  PickUpFromHQ = "PickUpFromHQ",
  DonateAndGetCoins = "DonateAndGetCoins",
  DonateAndGetExtraTicket = "DonateAndGetExtraTicket",
}

export enum AddressTypes {
  Home = "HOME",
  Work = "WORK",
}

export interface AddressPayload {
  address_type: AddressTypes;
  phone_number: string;
  apartment_no: string;
  area: string;
  state: string;
  country: string;
}

export interface CardInfo {
  card_number: number;
  card_month: string;
  card_year: string;
  card_cvc: string;
}

export interface BuyProductPayload extends CardInfo {
  products: string; // product_id/token_id
  shipping_address?: any;
  order_option: number; // can be between 1-4
}

export interface BuyTokensPayload extends CardInfo {
  token_id: string;
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE'
}