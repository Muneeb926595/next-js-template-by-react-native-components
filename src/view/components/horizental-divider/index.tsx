import React from 'react';

import { Heading3 } from '../text';
import { Props } from './types';
import { Conditional } from '../conditional';
import { makeStyles } from '@material-ui/core';
import { Colors, Layout } from '@/globals';
import { View } from '../view';

const useStyles = makeStyles({
    componentWrapper: {
        marginVertical: Layout.xlarge,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        marginVertical: Layout.mini,
        borderWidth: 1,
        flex: 1,
        borderColor: Colors.gray[50],
    },
    text: {
        color: Colors.foreground,
        textAlign: 'center',
        marginBottom: `${Layout.zero}px`,
        marginHorizontal: Layout.mini,
    },
})

export const HorizontalDivider = (props: Props) => {
    const styles = useStyles()
    const HorizontalLine = <View style={[styles.divider, props.dividerStyle]} />;
    return (
        <Conditional ifTrue={props.text} elseChildren={HorizontalLine}>
            <View style={[styles.componentWrapper, props.containerStyle]}>
                {HorizontalLine}
                <Heading3 style={[styles.text, props.textStyle]}>{props.text}</Heading3>
                {HorizontalLine}
            </View>
        </Conditional>
    );
};
