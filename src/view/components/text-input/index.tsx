import { createWebStyles } from '@/utils/string-utils';
import React, { ChangeEvent, FocusEvent } from 'react';

interface TextInputProps {
    value: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    style?: any,
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps | any> = ({
    value,
    onChangeText,
    style,
    secureTextEntry,
    onBlur,
    ...rest
}) => {
    const { className, style: mergedStyle } = createWebStyles(style);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        if (onChangeText) {
            onChangeText(text);
        }
    };

    return (
        <input
            type={secureTextEntry ? 'password' : 'text'}
            value={value}
            style={mergedStyle}
            className={className}
            onChange={handleChange}
            onBlur={onBlur}
            {...rest}
        />
    );
};