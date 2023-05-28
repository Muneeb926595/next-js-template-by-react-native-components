"use client";
import { Layout } from "./layout";

const primaryFont = "Goldplay Regular";
const secondaryFont = "Goldplay Bold";
const poppinsThin = "Goldplay Thin";
const tertiaryFont = "Roboto-Light";

export const Fonts = {
  heading1: {
    fontFamily: primaryFont,
    fontSize: Layout.RFValue(36),
  },
  heading2: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(28),
  },
  heading3Regular: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(23),
  },
  heading3: {
    fontFamily: `${secondaryFont}`,
    fontSize: Layout.RFValue(20),
  },
  heading4: {
    fontFamily: `${secondaryFont}`,
    fontSize: Layout.RFValue(20),
  },
  heading5: {
    fontFamily: `${secondaryFont}`,
    fontSize: Layout.RFValue(18),
  },
  paragraphLarge: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(20),
  },
  paragraphBold: {
    fontFamily: `${secondaryFont}`,
    fontSize: Layout.RFValue(16),
  },
  paragraph: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(16),
  },
  paragraphSmall: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(14),
  },
  paragraphTiny: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(12),
  },
  paragraphLink: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(16),
  },
  paragraphLinkBold: {
    fontFamily: `${secondaryFont}`,
    fontSize: Layout.RFValue(16),
  },
  bold: {
    fontFamily: `${secondaryFont}`,
  },
  micro: {
    fontFamily: `${primaryFont}`,
    fontSize: Layout.RFValue(13),
  },
  microBold: {
    fontFamily: `${secondaryFont}`,
    fontSize: Layout.RFValue(13),
  },
  tertiary: {
    fontFamily: `${tertiaryFont}`,
  },
  poppinsThin: {
    fontFamily: `${poppinsThin}`,
  },
  primaryFont: {
    fontFamily: `${primaryFont}`,
  },
  secondaryFont: {
    fontFamily: `${secondaryFont}`,
  },
};
