import { CSSProperties, ReactElement } from "react";

export interface StepperProps {
  active: number;
  content: ReactElement[];
  onNext: Function;
  onBack: Function;
  onFinish: Function;
  wrapperStyle?: CSSProperties;
  buttonContainerStyle?: CSSProperties;
  contentContainerStyles?: CSSProperties;
  stepsContainerStyles?: CSSProperties;
  stepStyle?: CSSProperties;
  stepTextStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  buttonTextStyle?: CSSProperties;
  showButton?: boolean;
}
