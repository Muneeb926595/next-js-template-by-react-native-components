"use client";
import { useState } from 'react';
import { AppIcon } from '../icon';
import { AppIconSize } from '../icon/types';
import { useSelector } from 'react-redux';
import { Colors, Fonts, Layout } from '../../../globals';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { Props } from './types';
import { Paragraph } from '../text';
import { createWebStyles } from '@/utils/string-utils';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        marginTop: "1.5rem",
        width: "100%",
        backgroundColor: Colors.blue[400],
        padding: "0.5rem 1rem",
        borderRadius: "0.2rem",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    btnLabel: {
        textAlign: "center",
        color: Colors.background,
        fontWeight: "bold",
    },
    disabled: {
        backgroundColor: Colors.gray[400],
        cursor: "not-allowed",
    },
    icon: {
        marginRight: "0.5rem",
    },

    iconLeft: {
        marginRight: "0.5rem",
    },

    iconRight: {
        marginLeft: " 0.5rem",
    },

}))

export const Button = ({
    onPress,
    buttonLable,
    buttonContainer,
    btnLabelStyles,
    loading,
    disabled,
    iconName,
    iconOnLeft,
    iconSize,
    authenticationRequired,
    iconColor,
    disableBgColor,
}: Props) => {
    const styles = useStyles()

    const [hovered, setHovered] = useState(false);
    const { authenticated } = useSelector(({ Sooq }: any) => Sooq.auth);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const renderButtonContent = () => {
        if (loading) {
            return <CircularProgress style={{ color: Colors.background }} />;
        }

        return (
            <>
                {iconName && iconOnLeft && (
                    <AppIcon
                        name={iconName}
                        iconSize={iconSize ?? AppIconSize.primary}
                        color={iconColor ?? Colors.gray[700]}
                    />
                )}
                <Paragraph style={`${styles.btnLabel} ${btnLabelStyles}`}>{buttonLable}</Paragraph>
                {iconName && !iconOnLeft && (
                    <AppIcon
                        name={iconName}
                        iconSize={iconSize ?? AppIconSize.primary}
                        color={iconColor ?? Colors.gray[700]}
                    />
                )}
            </>
        );
    };

    const { className: buttonContainerClassName, style: buttonContainerMergedStyle } = createWebStyles(buttonContainer);
    return (
        <button
            onClick={() => {
                if (authenticationRequired && !authenticated) {
                    return;
                }
                onPress();
            }}
            className={`${styles.buttonContainer} ${buttonContainerClassName}`}
            disabled={disabled || loading}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ...buttonContainerMergedStyle,
                backgroundColor: disabled ? disableBgColor ?? Colors.gray[400] : hovered ? Colors.blue[600] : Colors.blue[400],
            }}
        >
            {renderButtonContent()}
        </button>
    );
};
