import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { LocaleProvider } from '../../../localisations/locale-provider';
import { LoginTypes } from '../../../types';
import { validatePhoneNumber } from '../../../utils/string-utils';
import { FormattedMessage } from '../../../localisations/locale-formatter';
import { SmallParagraph } from '../text';
import { Colors, Constants, Fonts, Images, Layout } from '../../../globals';
import { Button } from '../button';
import { registerUserByMail, registerUserByPhone, requestMailOtp, requestPhoneOtp, setShowOtpModal, verifyMailOtp, verifyPhoneOtp } from '../../../stores/auth/AuthActions';
import { Modal, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import { View } from '../view';
import { TouchableOpacity } from '../touchable-opactiy';
import { TextInput } from '../text-input';
import { HorizontalDivider } from '../horizental-divider';
import PhoneNumberInput from '../phone-number-input';
import { Country } from '../phone-number-input/types';
import { CountryList } from '../country-list';

const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: Colors.background,
        height: '80vh',
        width: '60vw',
        display: 'flex',
        borderRadius: Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: "absolute",
        top: Layout.half,
        transform: `translate(-${Layout.half}, -${Layout.half})`,
        left: Layout.half,
    },
    container: { flex: 1, backgroundColor: Colors.background, marginTop: 10 },
    screenContent: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        padding: `0px ${Layout.widthPercentageToDP(Layout.tiny)} 0px ${Layout.widthPercentageToDP(Layout.tiny)}`,
    },
    input: {
        borderRadius: Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        ),
        color: "#000000",
        backgroundColor: Colors.background,
        paddingVertical: Layout.heightPercentageToDP(
            Layout.small /
            Layout.divisionFactorForHeight
        ),
        borderColor: Colors.gray[50],
        borderWidth: 1,
        padding: `0px ${Layout.widthPercentageToDP(
            Layout.medium / Layout.divisionFactorForWidth
        )} 0px ${Layout.widthPercentageToDP(
            Layout.medium / Layout.divisionFactorForWidth
        )}`,
        marginVertical: `${Layout.heightPercentageToDP(
            Layout.micro / Layout.divisionFactorForHeight
        )} 0px ${Layout.heightPercentageToDP(
            Layout.micro / Layout.divisionFactorForHeight
        )} 0px`,
    },
    sortSection: {
        padding: `0px ${Layout.medium}px 0p ${Layout.medium}px`
    },
    existingUserLogin: {
        display: 'flex',
        flexDirection: "row",
        marginVertical: Layout.heightPercentageToDP(
            Layout.small / Layout.divisionFactorForHeight
        ),
    },
    error: {
        color: Colors.red,
    },
    divider: { margin: `${Layout.tiny}px` },
    dividerContainer: { margin: `0px`, padding: `0px` },
    dividerText: { ...Fonts.paragraphSmall },
})

export const Signup = () => {
    const dispatch = useDispatch()
    const styles = useStyles()

    const { loading, showOtpModal } = useSelector(({ Sooq }: any) => Sooq.auth)

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        }
    });

    const [showPass, setShowPass] = useState(false)

    const [otpError, setOtpError] = useState("")
    const [isCountryModalVisible, setIsCountryModalVisible] = useState<boolean>(false)

    const [userMail, setUserMail] = useState<string>("")
    const [byEmail, setByEmail] = useState<boolean>(false)
    const [phoneNo, setPhoneNo] = useState<string>('')
    const [phoneNoError, setPhoneNoError] = useState<boolean>(false)

    const [selectedCountry, setSelectedCountry] = useState<Country>({ name: 'United Arab Emirates', flag: '🇦🇪', countryCode: 'AE', dialCode: '+971' },)

    // const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
    //     {
    //         id: '1',
    //         label: LocaleProvider.formatMessage(LocaleProvider.IDs.label.phoneSignIN),
    //         value: LoginTypes.ByPhone,
    //         selected: true,
    //         labelStyle: {
    //             ...Fonts.primaryFont
    //         }
    //     },
    //     {
    //         id: '2',
    //         label: LocaleProvider.formatMessage(LocaleProvider.IDs.label.emailSignIN),
    //         value: LoginTypes.ByEmail,
    //         labelStyle: {
    //             ...Fonts.primaryFont
    //         }
    //     }
    // ]);

    // const handleSortingOptionChange = (radioButtonsArray: RadioButtonProps[]) => {
    //     const selectedItem = radioButtonsArray?.find((item) => item?.selected === true)
    //     if (selectedItem?.value === LoginTypes.ByEmail) {
    //         setByEmail(true)
    //     } else {
    //         setByEmail(false)
    //     }
    // }

    useEffect(() => {
        // validate only if user is typing phone no
        if (phoneNo?.length > 0) {
            const isValid = validatePhoneNumber(selectedCountry?.dialCode + phoneNo)
            if (isValid) {
                setPhoneNoError(false)
            } else {
                setPhoneNoError(true)
            }
        } else {
            setPhoneNoError(false)
        }
    }, [selectedCountry, phoneNo])

    const handleCountryCodePress = () => {
        // NOTE : if need multiple countries then uncomment this line
        // setIsCountryModalVisible(true)
    };

    const handleRegisterUser = (data) => {
        if (!(phoneNo?.length > 0)) {
            setPhoneNoError(true)
            return;
        }

        if (phoneNoError) {
            return;
        }

        setUserMail(data?.email) // for otp 

        const fullPhoneNo = `${phoneNo}`
        if (byEmail) {
            dispatch(registerUserByMail(data?.fullName, data?.email, fullPhoneNo, data?.password) as any)
        } else {
            dispatch(registerUserByPhone(data?.fullName, data?.email, fullPhoneNo, data?.password) as any)
        }
    }

    const handleSignIn = () => {
        // magicSheet.hide()

        // setTimeout(async () => {
        //     await magicSheet.show(() => <Login />, { backgroundStyle: { backgroundColor: Colors.background }, animationConfigs: { duration: 5 }, snapPoints: [Layout.heightPercentageToDP((Layout.xxxlarge * 5.5) / Layout.divisionFactorForHeight)] });
        // }, 100)
    }

    const handleTogglePassword = () => {
        setShowPass(!showPass)
    }

    const handleOtpCodeChange = (code: string) => {
        if (code?.length === Constants.MAXIMUM_OTP_CODE_LENGTH) {
            // call api for otp
            if (byEmail) {
                dispatch(verifyMailOtp(userMail, code, (error) => { setOtpError(error) }) as any)
            } else {
                dispatch(verifyPhoneOtp(phoneNo, code, (error) => { setOtpError(error) }) as any)
            }
        }
    }

    const handleResend = () => {
        // call api for otp
        if (byEmail) {
            dispatch(
                requestMailOtp(userMail, () => {
                    dispatch(setShowOtpModal(true) as any);
                }) as any
            );
        } else {
            dispatch(
                requestPhoneOtp(phoneNo, () => {
                    dispatch(setShowOtpModal(true) as any);
                }) as any
            );
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Image
                src={Images.HeaderLogo}
                alt="header logo"
                width={+(Layout.widthPercentageToDP((Layout.xxxlarge * 1.5) / Layout.divisionFactorForWidth)?.replace("px", ''))}
                height={+(Layout.heightPercentageToDP(Layout.large / Layout.divisionFactorForHeight)?.replace('px', ''))}
                style={{
                    objectFit: 'contain',
                    marginLeft: Layout.widthPercentageToDP(Layout.micro / Layout.divisionFactorForWidth)
                }}
            />
            <SmallParagraph style={{ color: Colors.foreground, fontSize: "18px", fontWeight: "bold", paddingLeft: "20px", paddingTop: "10px" }}>
                <FormattedMessage id={LocaleProvider.IDs.label.register} /> Now,
            </SmallParagraph>

            <div className={styles.sortSection}  >

                <View style={styles.container}>

                    <View style={styles.screenContent} >


                        <View style={{ alignSelf: 'center', marginBottom: Layout.heightPercentageToDP(Layout.small / Layout.divisionFactorForHeight) }}>
                            {/* <RadioGroup
                                layout='row'
                                radioButtons={radioButtons}
                                onPress={handleSortingOptionChange}
                            /> */}
                        </View>

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    style={styles.input}

                                    placeholder={LocaleProvider.formatMessage(LocaleProvider.IDs.label.fullNameLabel)}
                                />
                            )}
                            name="fullName"
                        />
                        {errors?.fullName && <SmallParagraph style={styles.error}>
                            <FormattedMessage id={LocaleProvider.IDs.error.fieldIsRequired} />
                        </SmallParagraph>}

                        <Controller
                            control={control}
                            rules={{
                                pattern: Constants.REGEX_EMAIL,
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}

                                    placeholder={LocaleProvider.formatMessage(LocaleProvider.IDs.label.emailLabel)}
                                    style={styles.input}
                                />
                            )}
                            name="email"
                        />
                        {errors?.email && <SmallParagraph style={styles.error} >
                            <FormattedMessage id={LocaleProvider.IDs.error.mailIsInvalid} />
                        </SmallParagraph>}

                        <PhoneNumberInput
                            countryItem={selectedCountry}
                            onCountryCodePress={handleCountryCodePress}
                            value={phoneNo}
                            onTextChanged={setPhoneNo}
                            containerStyles={{
                                borderColor: Colors.gray[50],
                                borderWidth: 1,
                                marginVertical: Layout.heightPercentageToDP(Layout.micro / Layout.divisionFactorForHeight),
                                paddingVertical: Layout.heightPercentageToDP(Layout.mini / Layout.divisionFactorForHeight),
                            }}
                        />
                        {phoneNoError && <SmallParagraph style={styles.error} >
                            <FormattedMessage id={LocaleProvider.IDs.error.phoneNoRequired} />
                        </SmallParagraph>
                        }

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderColor: Colors.gray[50],
                                    borderWidth: 1,
                                    borderRadius: Layout.widthPercentageToDP(
                                        Layout.mini / Layout.divisionFactorForWidth
                                    ),
                                    marginVertical: Layout.heightPercentageToDP(
                                        Layout.micro / Layout.divisionFactorForHeight
                                    ),
                                }}>
                                    <TextInput
                                        value={value}
                                        secureTextEntry={showPass ? false : true}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        style={[styles.input, {
                                            flex: 1,
                                            height: '100%',
                                            borderWidth: 0,
                                            marginVertical: Layout.zero,

                                        }]}

                                        placeholder={LocaleProvider.formatMessage(LocaleProvider.IDs.label.password)}
                                    />
                                    <TouchableOpacity onPress={handleTogglePassword} style={{ paddingRight: Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth) }}>
                                        <SmallParagraph style={{ color: Colors.blue?.[400], ...Fonts.bold }}>
                                            {showPass ? <FormattedMessage id={LocaleProvider.IDs.general.hide} /> : <FormattedMessage id={LocaleProvider.IDs.general.show} />}
                                        </SmallParagraph>
                                    </TouchableOpacity>
                                </View>
                            )}
                            name="password"
                        />
                        {errors?.password && <SmallParagraph style={styles.error}>
                            <FormattedMessage id={LocaleProvider.IDs.error.fieldIsRequired} />
                        </SmallParagraph>}

                        <View style={styles.existingUserLogin}>
                            <Button
                                buttonLable={LocaleProvider.formatMessage(LocaleProvider.IDs.label.register)}
                                loading={loading}
                                onPress={handleSubmit(handleRegisterUser)}
                                buttonContainer={{ margin: Layout.zero, marginTop: Layout.zero, backgroundColor: Colors.primary['DEFAULT'] }}
                            />
                        </View>
                        <HorizontalDivider
                            text={LocaleProvider.t(LocaleProvider.IDs.label.labelOr)}
                            dividerStyle={styles.divider}
                            textStyle={styles.dividerText}
                            containerStyle={styles.dividerContainer}
                        />

                        <View style={[styles.existingUserLogin, { flexDirection: 'column', }]}>
                            <SmallParagraph style={{ color: Colors.foreground, textAlign: 'center', marginBottom: Layout.heightPercentageToDP(Layout.mini / Layout.divisionFactorForHeight) }} >
                                <FormattedMessage id={LocaleProvider.IDs.label.alreadyHaveAccount} />
                            </SmallParagraph>
                            <TouchableOpacity onPress={handleSignIn} style={{}}>
                                <SmallParagraph style={{ color: Colors.primary['DEFAULT'], textDecorationLine: 'underline', textAlign: 'center', }} >
                                    <FormattedMessage id={LocaleProvider.IDs.label.signin} />
                                </SmallParagraph>
                            </TouchableOpacity>
                        </View>
                        <Modal open={isCountryModalVisible} >
                            <CountryList setSelectedCountry={setSelectedCountry} setIsCountryModalVisible={setIsCountryModalVisible} />
                        </Modal>
                    </View>
                </View>
                {/* <Modal
                    open={true}
                    visible={showOtpModal}>
                    <OtpVerification handleOtpCodeChange={handleOtpCodeChange} otpError={otpError} contact={byEmail ? userMail : `${selectedCountry?.dialCode} ${phoneNo}`} handleResend={handleResend} />
                </Modal> */}
            </div>

        </View>
    )
}