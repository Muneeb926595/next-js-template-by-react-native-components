import { Constants, } from "../../../globals";
import { Country } from "../phone-number-input/types";

export const pressableStyle = (state: any) => ({
  opacity: state.pressed ? 0.5 : 1,
});

export const itemLayout = (
  data: Country[] | null | undefined,
  index: number
) => ({
  length: Constants.COUNTRY_ITEM_HEIGHT,
  offset: Constants.COUNTRY_ITEM_HEIGHT * index,
  index,
});
