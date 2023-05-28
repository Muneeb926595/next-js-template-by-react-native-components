'use client'
import { createWebStyles } from '@/utils/string-utils';
import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
interface ViewProps {
    children?: ReactNode;
    style?: any;
}

const useStyles = makeStyles({
    container: { display: 'flex', flexDirection: 'column' },
})

export const View: React.FC<ViewProps> = ({ children, style, ...props }) => {
    const componentStyles = useStyles()
    const { className, style: mergedStyle } = createWebStyles(style);
    return (
        <div className={`${componentStyles?.container} ${className}`} style={{ ...mergedStyle }} {...props}>
            {children}
        </div>
    );
};