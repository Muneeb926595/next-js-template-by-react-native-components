import React from 'react'

import { makeStyles } from '@material-ui/core';
import { Colors, Fonts, Layout } from '@/globals';
import { View } from '../view';
import { Micro } from '../text';
import { FormattedMessage } from '@/localisations/locale-formatter';
import { LocaleProvider } from '@/localisations/locale-provider';

const useStyles = makeStyles({
    container: {
        backgroundColor: Colors.background,
        width: Layout.full,
        marginBottom: Layout.heightPercentageToDP(
            Layout.medium / Layout.divisionFactorForHeight
        ),
        borderRadius: Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        ),
        ...Layout.shadowBox.shallow,
    },
    image: {
        width: Layout.full,
        borderTopLeftRadius: Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        ),
        borderTopRightRadius: Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        ),
        height: Layout.heightPercentageToDP(
            (Layout.xxxlarge * 2.4) / Layout.divisionFactorForHeight
        ),
    },
    won: {
        color: Colors.gray[700],
        marginBottom: Layout.heightPercentageToDP(
            Layout.micro / Layout.divisionFactorForHeight
        ),
        textAlign: "center",
    },
    congrats: {
        ...Fonts.bold,
        color: Colors.gray[700],
        textAlign: "center",
    },
    detailsContainer: {
        borderBottomLeftRadius: Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        ),
        borderBottomRightRadius: Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        ),
        padding: Layout.widthPercentageToDP(
            Layout.small / Layout.divisionFactorForWidth
        ),
        alignSelf: "center",
    },
});


export const WinnerCard = () => {
    const styles = useStyles()
    return (
        <View style={styles.container} >
            <View style={styles.detailsContainer}>
                <Micro style={styles.congrats} >
                    <FormattedMessage id={LocaleProvider.IDs.general.congratulation} values={{ currency: "AED", price: "5000" }} />
                </Micro>
                <Micro style={styles.won} >
                    <FormattedMessage id={LocaleProvider.IDs.label.hasWon} values={{ userName: "Muneeb", price: "10000 cash" }} />
                </Micro>
            </View>
        </View>
    )
}
