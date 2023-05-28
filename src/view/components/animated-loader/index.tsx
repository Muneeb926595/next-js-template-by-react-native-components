"use client";
import { Colors, } from '@/globals';
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';

export enum AnimatedLoaderType {
    Spinner = 'Spinner',
}

export type Props = {
    size?: number | 'small' | 'large';
    color?: string;
    containerStyle?: object;
    loaderStyle?: object;
    type?: AnimatedLoaderType;
};

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: Colors.background,
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    spinner: {
        border: "4px solid rgba(0, 0, 0, 0.1)",
        borderLeftColor: Colors.gray[400],
        borderTopColor: Colors.gray[400],
        borderRadius: "50%",
        width: "64px",
        height: "64px",
        animation: "spin 1s linear infinite",
    },
    '@keyframes spin': {
        to: {
            transform: 'rotate(360deg)',
        },
    },
}));

export const AnimatedLoader = (props: Props) => {
    const styles = useStyles()

    const { size = 'large', color = '#ccc', containerStyle, type, loaderStyle } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const renderAnimatedLoader = (
        loaderType: AnimatedLoaderType = AnimatedLoaderType.Spinner,
        loaderSize: number | 'small' | 'large' = 'large',
        loaderColor: string = '#ccc',
        loaderStyle: object = {}
    ) => {
        switch (loaderType) {
            case AnimatedLoaderType.Spinner:
            default:
                return (
                    <div className={styles.spinnerContainer}>
                        <div
                            className={styles.spinner}
                            style={{ width: size, height: size, borderTopColor: color, ...loaderStyle }}
                        />
                    </div>
                );
        }
    };

    if (isLoading) {
        return (
            <div className={styles.container} style={containerStyle}>
                {renderAnimatedLoader(type, size, color, loaderStyle)}
            </div>
        );
    }

    return null;
};
