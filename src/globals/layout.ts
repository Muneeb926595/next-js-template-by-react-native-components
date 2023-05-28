"use client";
export const Layout = {
  divisionFactorForWidth: 4,
  divisionFactorForHeight: 8,
  screen: {
    headerHeight: 62,
    controlsHeight: 31,
  },

  /**
   * Incremental sizes
   * used for margin, padding
   */
  zero: 0,
  tiny: 2,
  micro: 5,
  mini: 10,
  small: 15,
  medium: 20,
  large: 25,
  xlarge: 27,
  xxlarge: 40,
  xxxlarge: 80,

  /**
   * Dimensional sizes in percentage
   */
  zeroWidth: "0%",
  half: "50%",
  full: "100%",

  /**
   * Loader Width
   */
  loaderWidth: "15%",
  loaderContainerWidth: "85%",

  /**
   * Width of screen
   */
  widthWithMiniPadding: "90%",

  /**
   * Position of an element
   */
  absolutePosition: "absolute" as "absolute",
  relativePosition: "relative" as "relative",

  /**
   * Border sizes
   */
  extraThin: 0.3,
  thin: 1,
  thick: 2,
  extraThick: 3,

  /**
   * Shadow boxes
   */
  shadowBox: {
    lightestShadow: {
      shadowColor: "#cccccc",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 5,
    },
    lightShallow: {
      shadowColor: "#cccccc",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 3,
    },
    shallow: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 3,
      shadowOpacity: 0.3,
      elevation: 2,
    },
    lightDropShadow: {
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowRadius: 4,
      shadowOpacity: 0.05,
      elevation: 3,
      marginBottom: "3px",
    },
    low: {
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 3,
      shadowOpacity: 0.4,
      elevation: 3,
      marginBottom: " 3px",
    },
    deep: {
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowRadius: 8,
      shadowOpacity: 0.6,
      elevation: 8,
    },
  },

  icon: {
    size: {
      tiny: 5,
      micro: 10,
      mini: 15,
      small: 20,
      medium: 22,
      large: 26,
      xlarge: 32,
      xxlarge: 50,
      xxxlarge: 64,
      huge: 80,
    },
    microCircle: {
      width: 14,
      height: 14,
      borderRadius: 16,
    },
    miniCircle: {
      width: 25,
      height: 25,
      borderRadius: 30 / 2,
    },
    smallCircle: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
    },
    mediumCircle: {
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
    },
    largeCircle: {
      width: 52,
      height: 52,
      borderRadius: 52 / 2,
    },
    xlargeCircle: {
      width: 62,
      height: 62,
      borderRadius: 62 / 2,
    },
    xxlargeCircle: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
    },
    hugeCircle: {
      width: 120,
      height: 120,
      borderRadius: 120 / 2,
    },
  },
  image: {
    small: {
      height: 30,
      width: 30,
      borderRadius: 0,
      borderWidth: 0,
    },
    medium: {
      height: 40,
      width: 40,
      borderRadius: 0,
      borderWidth: 0,
    },
  },

  widthPercentageToDP: (
    widthPercent: number | string,
    screenWidth = 1920 // Full HD desktop screen width
  ): string => {
    if (typeof window !== "undefined") {
      // Parse string percentage input and convert it to number.
      const elemWidth =
        typeof widthPercent === "number"
          ? widthPercent
          : parseFloat(widthPercent);

      // Calculate the width in pixels based on the percentage and the screen width.
      const widthInPixels = (screenWidth * elemWidth) / 100;

      // Use the window.devicePixelRatio to convert the pixel value to device-independent pixels (dp).
      const widthInDP = widthInPixels / window.devicePixelRatio;

      // Use Math.round method in order to round the layout size (dp) to the nearest integer.
      return `${Math.round(widthInDP)}px`;
    } else {
      return `0px`
    }
  },

  heightPercentageToDP: (
    heightPercent: number | string,
    screenHeight = 1080 // Full HD desktop screen height
  ): string => {
    if (typeof window !== "undefined") {
      // Parse string percentage input and convert it to number.
      const elemHeight =
        typeof heightPercent === "number"
          ? heightPercent
          : parseFloat(heightPercent);

      // Calculate the height in pixels based on the percentage and the screen height.
      const heightInPixels = (screenHeight * elemHeight) / 100;

      // Use the window.devicePixelRatio to convert the pixel value to device-independent pixels (dp).
      const heightInDP = heightInPixels / window.devicePixelRatio;

      // Use Math.round method in order to round the layout size (dp) to the nearest integer.
      return `${Math.round(heightInDP)}px`;
    } else {
      return `0px`
    }
  },

  RFValue: (
    fontSize: number,
    standardScreenHeight = 1080 // Full HD desktop screen height
  ): string => {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      const standardLength = Math.max(innerWidth, innerHeight);
      const deviceHeight = standardLength;
      const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
      return `${Math.round(heightPercent)}px`;
    } else {
      return `0px`
    }
  },
};

//  Notes for responsivenes
//  If using heightPercentageToDP then make sure to divie layout value with 8
//  If using widthPercentageToDP then make sure to divie layout value with 4
