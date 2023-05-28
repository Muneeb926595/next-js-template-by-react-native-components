import { FC, CSSProperties } from "react";

export type Props = FC<
  any & {
    emphasis?: Emphasis;
  } & {
    maxNumberOfLines?: number;
  }
>;

export type SmallParagraphLinkProps = {
  style?: any;
  onPress: Function;
  children?: JSX.Element;
};

export type ParagraphLinkProps = {
  containerStyle?: any;
  style?: any;
  onPress: any;
  title: JSX.Element | string;
};

export type ParagraphLinkBoldProps = {
  containerStyle?: any;
  style?: any;
  onPress: any;
  title: JSX.Element | string;
};

export enum Emphasis {
  low = "low",
  high = "high",
  medium = "medium",
}
