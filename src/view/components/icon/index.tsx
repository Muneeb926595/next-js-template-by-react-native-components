/* 
in order to add new icons to the app 
1. create a new font using nucleo
2. then create a new name for icon in icon/types file
3. also create a new class in glbals.css with the same name you created in icon/types
for more refernce follow this linkl => https://nucleoapp.com/blog/post/how-to-add-and-manage-icons-in-web-projects-using-icon-fonts
 */
"use client";
import React from 'react';

import { Props, AppIconSize } from './types';
import { iconOptions, } from './styles';
import { Colors, Layout } from '@/globals';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  microCircle: { ...Layout.icon.microCircle },
  miniCircle: { ...Layout.icon.miniCircle },
  smallCircle: { ...Layout.icon.smallCircle, backgroundColor: Colors.primary[500] },
  mediumCircle: { ...Layout.icon.mediumCircle },
  largeCircle: { ...Layout.icon.largeCircle },
  xlargeCircle: { ...Layout.icon.xlargeCircle },
  xxlargeCircle: { ...Layout.icon.xxlargeCircle },
  bigCircle: { ...Layout.icon.xxlargeCircle },
  hugeCircle: { ...Layout.icon.hugeCircle },
  iconPosition: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const AppIcon = ({
  name,
  iconSize,
  type,
  backgroundColor,
  style,
  color,
  className,
}: Props) => {
  const styles = useStyles()

  const getIconSize = () => {
    if (iconSize && iconSize !== 0) {
      return iconSize;
    } else {
      return AppIconSize.primary;
    }
  }
  return (
    <div
      className={`${styles.iconPosition} ${style}`}
      style={{ backgroundColor: backgroundColor ?? iconOptions[type!]?.backgroundColor }}
    >
      <i className={`icon ${name} ${className}`} style={{ color: color ?? Colors.primary['DEFAULT'], width: getIconSize(), height: getIconSize() }}></i>
    </div>
  )
}

