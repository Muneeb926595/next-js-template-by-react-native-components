import React, { useEffect, useState } from 'react';

import { Colors, Constants, } from '../../../globals';
import { Paragraph } from '../text';

import { Props } from './types';
import { LocaleProvider } from '../../../localisations/locale-provider';

import { FormattedMessage } from '../../../localisations/locale-formatter';
import { AppIcon } from '../icon';
import { Conditional } from '../conditional';
import { View } from '../view';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    didntReceiveCodeContainer: {},
    timer: {
        textAlign: "center",
        color: Colors.primary["DEFAULT"],
    },
})

export const ResendOtpTimer = (props: Props) => {
    const styles = useStyles()
    const [otpTimer, setOtpTimer] = useState<number>(props?.timerInSeconds)

    let timerInterval: NodeJS.Timer | undefined = undefined

    const initiateTimer = () => {
        timerInterval = setInterval(() => {
            setOtpTimer((previousTimer) => previousTimer - 1)

            if (otpTimer < 0) {
                clearInterval(timerInterval!)
            }
        }, 1000)
    }
    useEffect(() => {
        initiateTimer()
        return () => {
            clearInterval(timerInterval!)
        }
    }, [])

    useEffect(() => {
        if (props?.resetTimer) {
            clearInterval(timerInterval!)
            setOtpTimer(0)
        }
    }, [props?.resetTimer])

    const resetTimer = () => {
        clearInterval(timerInterval!)
        setOtpTimer(props?.timerInSeconds);
        //avoid race condition for clearinterval and setting new intervale
        setTimeout(() => {
            initiateTimer()
        }, Constants.duration.extraShort)
    }

    const resendOtp = () => {
        resetTimer()

        if (typeof props?.handleResendOtpAction === 'function') {
            props?.handleResendOtpAction()
        }
    }
    const { showOnlyTime, containerStyles, resendLinkTextStyle, resendContainerStyle, timeStyle } = props
    return (
        <View style={[styles.didntReceiveCodeContainer, containerStyles]}>
            {/* <Conditional ifTrue={otpTimer > 0} elseChildren={<CtaLink
                onPress={resendOtp}
                titleText={''}
                linkText={LocaleProvider.t(LocaleProvider.IDs.label.resend)}
            />}  >
                <>

                    <Paragraph style={[styles.timer,]} >
                        {otpTimer}{' '}<FormattedMessage id={LocaleProvider.t(LocaleProvider.IDs.label.seconds)} />
                    </Paragraph>
                </>
            </Conditional> */}
        </View>
    );
}

