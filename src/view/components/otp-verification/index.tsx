import React from "react";
import { Micro, Paragraph, SmallParagraph } from "../text";
import { Colors, Constants, Fonts, Layout } from "../../../globals";
import { FormattedMessage } from "../../../localisations/locale-formatter";
import { LocaleProvider } from "../../../localisations/locale-provider";
import { useDispatch } from "react-redux";
import { setShowOtpModal } from "../../../stores/auth/AuthActions";
import { ResendOtpTimer } from "../resend-otp-timer";
import { makeStyles } from "@material-ui/core";
import { View } from "../view";
import { TouchableOpacity } from "../touchable-opactiy";
import { OtpInput } from "../otp-input";

type Props = {
    handleOtpCodeChange: (code: string) => void;
    handleResend: () => void;
    otpError: string;
    contact: string;
}

const useStyles = makeStyles({
    container: {
        flex: 1,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        alignItems: "center",
        display: 'flex',
        justifyContent: "center",
    },
    wrapper: {
        alignItems: "center",
        backgroundColor: "white",
        marginVertical: 60,
        width: "90%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 7,
        elevation: 10,
    },
    title: {
        textAlign: "left",
        color: Colors.foreground,
        ...Fonts.bold,
        marginBottom: `${Layout.small}px`,
    },
    didntReceiveCodeContainer: {
        alignItems: "center",
        display: 'flex',
        justifyContent: "center",
        marginTop: `${Layout.small}px`,
    },
})

export const OtpVerification = (props: Props) => {
    const dispatch = useDispatch()
    const styles = useStyles()

    const handleCloseModal = () => {
        dispatch(setShowOtpModal(false) as any)
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{ margin: 10, }}>
                    <Paragraph style={styles.title}>
                        <FormattedMessage id={LocaleProvider.IDs.label.otpVerification} />
                    </Paragraph>
                    <SmallParagraph style={{ textAlign: 'left', marginBottom: `${Layout.micro}px` }}>
                        <FormattedMessage id={LocaleProvider.IDs.label.enterTheOtpYouHaveReceived} />
                    </SmallParagraph>
                    <Micro style={{ textAlign: 'left', ...Fonts.bold, marginBottom: `${Layout.small}px` }}>
                        {props?.contact}
                    </Micro>
                    <View style={{ alignSelf: 'center' }}>
                        <OtpInput
                            onCodeChanged={props?.handleOtpCodeChange}
                            cellsLength={Constants.MAXIMUM_OTP_CODE_LENGTH}
                            error={props?.otpError}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <View style={styles.didntReceiveCodeContainer}>
                            <ResendOtpTimer
                                timerInSeconds={Constants.MAX_TIME_ALLOW_TO_RESEND_OTP}
                                handleResendOtpAction={props?.handleResend}
                            />
                        </View>
                        <TouchableOpacity onPress={handleCloseModal} style={{ borderColor: Colors.red, borderRadius: Layout.widthPercentageToDP(Layout.mini / Layout.divisionFactorForWidth), padding: `0px ${Layout.widthPercentageToDP(Layout.large / Layout.divisionFactorForWidth)} 0px ${Layout.widthPercentageToDP(Layout.large / Layout.divisionFactorForWidth)}` }}>
                            <SmallParagraph style={{ color: Colors.red }}>
                                <FormattedMessage id={LocaleProvider.IDs.general.cancel} />
                            </SmallParagraph>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}