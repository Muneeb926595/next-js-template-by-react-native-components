import { OtpError } from "./types";
import { Colors, Constants, Fonts, Layout } from "../../../globals";

export const cellStyle = (err?: OtpError, mailVerification?: boolean) => ({
  ...{
    width: Constants.OTP_INPUT_CELL_SIZE,
    height: Constants.OTP_INPUT_CELL_SIZE,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: `${Layout.micro}px`,
    borderRadius: "2px",
  },
  width: Constants.OTP_INPUT_CELL_SIZE,
  height: Constants.OTP_INPUT_CELL_SIZE,
  backgroundColor: err ? Colors.accent[200] : "transparent",
});

export const cellTextStyle = (err?: OtpError) => [
  {
    ...Fonts.heading3,
    color: Colors.foreground,
  },
  err ? { color: Colors.red } : { color: Colors.foreground },
];

export const cellBorderStyle = (
  focused?: boolean,
  err?: OtpError,
  mailVerification?: boolean
) => {
  let bgColor = Colors.gray[400];
  if (focused) {
    bgColor = Colors.blue[400];
  }
  if (err) {
    bgColor = Colors.red;
  }

  return {
    ...{
      width: Constants.OTP_INPUT_CELL_SIZE,
      height: 1,
    },
    backgroundColor: bgColor,
    width: Constants.OTP_INPUT_CELL_SIZE,
    height: mailVerification ? Layout.zero : 1,
  };
};
