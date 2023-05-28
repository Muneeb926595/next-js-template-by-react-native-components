import { Colors, Layout } from "../../../globals";

export const iconOptions = {
  smallCircle: { ...Layout.icon.smallCircle },
  mediumCircle: { ...Layout.icon.mediumCircle },
  bigCircle: { ...Layout.icon.xxlargeCircle },
  miniIcon: Layout.icon.size.mini,
  smallIcon: Layout.icon.size.xlarge,
  mediumIcon: Layout.icon.size.small,
  bigIcon: Layout.icon.size.xxlarge,

  default: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  primary: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  secondary: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  info: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  instruction: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  action: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  success: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  error: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  warning: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  pending: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
  disabled: {
    color: Colors.primary[500],
    backgroundColor: Colors.primary[100],
  },
};
