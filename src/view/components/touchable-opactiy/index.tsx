'use client'
import { createWebStyles } from '@/utils/string-utils';
import React, { useState } from 'react';

type Props = {
    onPress?: () => void,
    children?: any,
    style?: any
}
export const TouchableOpacity = (props: Props) => {
    const [opacity, setOpacity] = useState(1);

    const handlePress = () => {
        setOpacity(0.5);
        if (typeof props?.onPress === 'function') {
            props?.onPress()
        }
    };

    const { className, style: mergedStyle } = createWebStyles(props?.style);

    const handleRelease = () => {
        setOpacity(1);
    };

    return (
        <div
            style={{ ...mergedStyle, opacity }}
            className={className}
            onMouseDown={handlePress}
            onMouseUp={handleRelease}
            onMouseLeave={handleRelease}
        >
            {props?.children}
        </div>
    );
};