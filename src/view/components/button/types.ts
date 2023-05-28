import { AppIconName, AppIconSize } from "../icon/types";

export type Props = {
  onPress: () => void;
  buttonLable: string;
  buttonContainer?: any;
  btnLabelStyles?: any;
  loading?: boolean;
  disabled?: boolean;
  authenticationRequired?: boolean;
  iconName?: AppIconName;
  iconOnLeft?: boolean;
  iconSize?: AppIconSize;
  iconColor?: string;
  disableBgColor?: string;
};
