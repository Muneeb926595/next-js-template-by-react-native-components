"use client";
import React from 'react';
import { ParagraphLinkBoldProps, ParagraphLinkProps, Props, SmallParagraphLinkProps } from './types';
import { makeStyles } from '@material-ui/core';
import { Colors, Fonts, Layout } from '@/globals';
import { createWebStyles } from '@/utils/string-utils';

const useStyles = makeStyles((theme) => ({
  subtitle1: {
    fontSize: "16px",
    letterSpacing: "0.15px",
    fontWeight: "normal",
  },
  subtitle2: {
    fontSize: "14px",
    letterSpacing: '0.1px',
    fontWeight: 500,
  },
  body1: {
    fontSize: "16px",
    letterSpacing: "0.5px",
    fontWeight: "normal",
  },
  body2: {
    fontSize: "14px",
    letterSpacing: "0.25px",
    fontWeight: "normal",
  },
  button: {
    fontSize: "14px",
    letterSpacing: "1.25px",
    fontWeight: 500,
  },

  caption: {
    fontSize: "12px",
    letterSpacing: "0.4px",
    fontWeight: "normal",
  },
  overline: {
    fontSize: "10px",
    letterSpacing: "1.5px",
    fontWeight: "normal",
  },
  headingWrapper: {
    paddingBottom: Layout.heightPercentageToDP(
      Layout.medium / Layout.divisionFactorForHeight
    ),
  },
  heading1: {
    ...Fonts.heading1,
    color: Colors.primary[500],
  },

  heading2: {
    ...Fonts.heading2,
    color: Colors.foreground,
  },
  heading3: {
    ...Fonts.heading3,
    color: Colors.foreground,
  },
  heading4: {
    ...Fonts.heading4,
  },
  heading5: {
    ...Fonts.heading5,
    color: Colors.foreground,
  },
  heading6: {
    fontSize: 20,
    letterSpacing: 0.15,
    fontWeight: 500,
  },
  paragraph: {
    ...Fonts.paragraph,
    color: Colors.foreground,
  },
  paragraphBold: {
    ...Fonts.paragraphBold,
    color: Colors.foreground,
  },
  paragraphLarge: {
    ...Fonts.paragraphLarge,
    color: Colors.foreground,
  },
  paragraphSmall: {
    ...Fonts.paragraphSmall,
    color: Colors.foreground,
  },
  paragraphTiny: {
    ...Fonts.paragraphTiny,
    color: Colors.foreground,
  },
  paragraphLink: {
    ...Fonts.paragraphLink,
    color: Colors.primary[500],
  },
  paragraphLinkBold: {
    ...Fonts.paragraphLinkBold,
    color: Colors.primary[500],
  },
  textLink: {
    color: Colors.primary[500],
    ...Fonts.bold,
    paddingVertical: Layout.mini,
  },
  micro: {
    ...Fonts.micro,
    color: Colors.foreground,
  },
}));

export const Heading1: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.heading1} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};
export const Heading2: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.heading2} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};
export const Heading3: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.heading3} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};
export const Heading4: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.heading4} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Heading5: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.heading5} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};
export const Paragraph: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.paragraph} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};
export const LargeParagraph: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.paragraphLarge} ${className}`} style={mergedStyle} numberOfLines={props.maxNumberOfLines}>
      {props.children}
    </p>
  );
};
export const BoldParagraph: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.paragraphBold} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};
export const SmallParagraph: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.paragraphSmall} ${className}`} style={mergedStyle} numberOfLines={props.maxNumberOfLines}>
      {props.children}
    </p>
  );
};
export const TinyParagraph: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.paragraphTiny} ${className}`} style={mergedStyle} numberOfLines={props.maxNumberOfLines}>
      {props.children}
    </p>
  );
};
export const Micro: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.micro} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Heading6: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.heading6} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Subtitle1: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.subtitle1} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Subtitle2: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.subtitle2} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Body1: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.body1} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Body2: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.body2} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Caption: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.caption} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const Overline: Props = (props) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return (
    <p {...newProps} allowFontScaling={false} className={`${styles.overline} ${className}`} style={mergedStyle} >
      {props.children}
    </p>
  );
};

export const ParagraphLinkBold = (props: ParagraphLinkBoldProps) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newContainerStyles = props.containerStyle

  return (
    <button onClick={props?.onPress} className={newContainerStyles}>
      <p className={`${styles.paragraphLinkBold} ${className}`} style={mergedStyle} >{props?.title}</p>
    </button>
  )
}
export const ParagraphLink = (props: ParagraphLinkProps) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newContainerStyles = props.containerStyle
  return (
    <button onClick={props?.onPress} style={newContainerStyles}>
      <p className={`${styles.paragraphLink} ${className}`} style={mergedStyle}  >{props?.title}</p>
    </button>
  );
}
export const SmallParagraphLink = (props: SmallParagraphLinkProps) => {
  const styles = useStyles();
  const { className, style: mergedStyle } = createWebStyles(props?.style);
  const newProps = {
    ...props,
    style: {}
  }
  return <p {...newProps} onClick={() => props.onPress()} className={`${styles.textLink} ${className}`} style={mergedStyle} />;
}