

export enum TicketsTabs {
  Promotional = "promotion",
  Prime = "prime",
  Coupon = "coupon",
}

export enum DrawsTabs {
  Recent = "Recent",
  Upcomming = "Upcomming",
}

export enum PromotionalDetailsTabs {
  PriceDetails = "PriceDetails",
  ProductDetails = "ProductDetails",
}

export interface ITab {
  label: string;
  tabName: TicketsTabs | DrawsTabs | PromotionalDetailsTabs;
  isFeatureDisabled?: boolean;
  onPress: () => void;
}

export interface TabsProps {
  selectedTab: TicketsTabs | DrawsTabs | PromotionalDetailsTabs;
  containerStyles?: any;
  tabs?: ITab[];
  activeTabBg?: string;
  activeTabFg?: string;
  inActiveTabBg?: string;
  inActiveTabFg?: string;
}
