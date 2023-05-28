export type OtpError = string | null;

export type Props = {
  onCodeChanged: (text: string) => void;
  defaultValue?: string;
  secureInput?: boolean;
  mailVerification?: boolean;
  cellSpacing?: number;
  rowContainerStyles?: any;
  error?: OtpError;
  cellsLength: number
};
