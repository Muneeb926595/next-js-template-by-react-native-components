import _ from 'lodash';
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react'

import { Country } from '../phone-number-input/types';
import { LocaleProvider } from '../../../localisations/locale-provider';
import { LoginTypes } from '../../../types';
import { loginUserByMail, loginUserByPhone } from '../../../stores/auth/AuthActions';
import { Colors, Constants, Fonts, Images, Layout } from '../../../globals';
import PhoneNumberInput from '../phone-number-input';
import { Conditional } from '../conditional';
import { SmallParagraph } from '../text';
import { Button } from '../button';
import { CountryList } from '../country-list';
import { Signup } from '../signup';
import { FormattedMessage } from '../../../localisations/locale-formatter';
import { Modal, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import { TouchableOpacity } from '../touchable-opactiy';
import { View } from '../view';
import { TextInput } from '../text-input';

const useStyles = makeStyles({
    container: { flex: 1, backgroundColor: Colors.background, marginTop: 10 },
    screenContent: {
        flex: 1,
        justifyContent: 'center',
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
        marginVertical: Layout.heightPercentageToDP(
            Layout.micro / Layout.divisionFactorForHeight
        ),
    },
    sortSection: {
        padding: `0px ${Layout.medium}px 0px ${Layout.medium}px`,
    },
    forgotPassword: {
        alignContent: "flex-start",
        width: Layout.half,
        marginTop: Layout.heightPercentageToDP(
            Layout.small / Layout.divisionFactorForHeight
        ),
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
})

export const Login = () => {
    const styles = useStyles()

    const dispatch = useDispatch()
    const { loading } = useSelector(({ Sooq }: any) => Sooq.auth)

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const [showPass, setShowPass] = useState(false)

    const [isCountryModalVisible, setIsCountryModalVisible] = useState<boolean>(false)
    const [byEmail, setByEmail] = useState<boolean>(false)
    const [selectedCountry, setSelectedCountry] = useState<Country>({ name: 'United Arab Emirates', flag: '🇦🇪', countryCode: 'AE', dialCode: '+971' },)
    const [phoneNo, setPhoneNo] = useState<string>('')

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

    const handleCountryCodePress = () => {
        // NOTE : if need multiple countries then uncomment this line
        // setIsCountryModalVisible(true)
    };

    const handleLogin = (data) => {
        if (byEmail) {
            dispatch(loginUserByMail(data?.email?.toLocaleLowerCase()?.trim(), data?.password) as any)
        } else {
            const fullPhoneNo = `${phoneNo}`
            dispatch(loginUserByPhone(fullPhoneNo, data?.password) as any)
        }
    }

    const handleRegister = async () => {
        // magicSheet.hide()

        // setTimeout(async () => {
        //     await magicSheet.show(() => <Signup />, { backgroundStyle: { backgroundColor: Colors.background }, animationConfigs: { duration: 5 }, snapPoints: [Layout.heightPercentageToDP((Layout.xxxlarge * 7.3) / Layout.divisionFactorForHeight)] });
        // }, 100)
    }

    const handleTogglePassword = () => {
        setShowPass(!showPass)
    }

    return (
        <>
            <Image
                alt="logo "
                width={Layout.widthPercentageToDP((Layout.xxxlarge * 1.5) / Layout.divisionFactorForWidth)}
                height={Layout.heightPercentageToDP(Layout.large / Layout.divisionFactorForHeight)}
                src={Images.HeaderLogo}
                style={{
                    objectFit: 'contain',
                    marginLeft: Layout.widthPercentageToDP(Layout.medium / Layout.divisionFactorForWidth)
                }}
            />
            <SmallParagraph style={{ color: "#000000", fontSize: 18, fontWeight: "bold", paddingLeft: 20, paddingTop: 10 }}>
                <FormattedMessage id={LocaleProvider.IDs.label.welcomeBack} />
            </SmallParagraph>
            <SmallParagraph style={{ color: "#000000", fontSize: 18, fontWeight: "bold", paddingLeft: 20, }}>
                <FormattedMessage id={LocaleProvider.IDs.label.signin} />
            </SmallParagraph>
            <div className={styles.sortSection}>
                <View style={styles.container}>
                    <View style={styles.screenContent} >

                        <View style={{ alignSelf: 'center', marginBottom: Layout.heightPercentageToDP(Layout.small / Layout.divisionFactorForHeight) }}>
                            {/* <RadioGroup
                                layout='row'
                                radioButtons={radioButtons}
                                onPress={handleSortingOptionChange}
                            /> */}
                        </View>


                        <Conditional ifTrue={byEmail} elseChildren={<PhoneNumberInput
                            countryItem={selectedCountry}
                            onCountryCodePress={handleCountryCodePress}
                            value={phoneNo}
                            onTextChanged={setPhoneNo}
                            containerStyles={{
                                marginVertical: Layout.heightPercentageToDP(Layout.micro / Layout.divisionFactorForHeight),
                                paddingVertical: Layout.heightPercentageToDP(Layout.mini / Layout.divisionFactorForHeight),
                                borderColor: Colors.gray[50],
                                borderWidth: 1,
                            }}
                        />}>
                            <>
                                <Controller
                                    control={control}
                                    rules={{
                                        pattern: Constants.REGEX_EMAIL,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            value={value}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            placeholderTextColor={Colors.gray[400]}
                                            placeholder={LocaleProvider.formatMessage(LocaleProvider.IDs.label.emailLabel)}
                                            style={styles.input}
                                        />
                                    )}
                                    name="email"
                                />
                                {errors?.email && <SmallParagraph style={styles.error} >
                                    <FormattedMessage id={LocaleProvider.IDs.error.mailIsInvalid} />
                                </SmallParagraph>}
                            </>
                        </Conditional>


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
                                            borderWidth: 0,
                                            height: '100%',
                                            marginVertical: Layout.zero
                                        }]}
                                        placeholderTextColor={Colors.gray[400]}
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

                        {/* 
            <View style={styles.forgotPassword}>
                <Button
                    buttonLable={LocaleProvider.formatMessage(LocaleProvider.IDs.label.forgotPassword)}
                    onPress={() => alert("Click")}
                    buttonContainer={{ backgroundColor: Colors.transparent, }}
                    btnLabelStyles={{ color: Colors.blue[400] }}
                />
            </View> */}
                        <View style={styles.existingUserLogin}>
                            <Button
                                buttonLable={LocaleProvider.formatMessage(LocaleProvider.IDs.label.signin)}
                                loading={loading}
                                onPress={handleSubmit(handleLogin)}
                                buttonContainer={{ margin: Layout.zero, marginTop: Layout.zero, backgroundColor: Colors.primary['DEFAULT'] }}
                            />
                        </View>

                        <View style={[styles.existingUserLogin, { flexDirection: 'column', }]}>
                            <SmallParagraph style={{ color: Colors.foreground, textAlign: 'center', marginBottom: Layout.heightPercentageToDP(Layout.mini / Layout.divisionFactorForHeight) }} >
                                <FormattedMessage id={LocaleProvider.IDs.label.dontHaveAccount} />
                            </SmallParagraph>
                            <TouchableOpacity onPress={handleRegister}>
                                <SmallParagraph style={{ color: Colors.primary['DEFAULT'], textDecorationLine: 'underline', textAlign: 'center', }} >
                                    <FormattedMessage id={LocaleProvider.IDs.label.register} />
                                </SmallParagraph>
                            </TouchableOpacity>
                        </View>
                        <Modal open={isCountryModalVisible} >
                            <CountryList setSelectedCountry={setSelectedCountry} setIsCountryModalVisible={setIsCountryModalVisible} />
                        </Modal>
                    </View>
                </View>
            </div>
        </>
    )
}