'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Colors, Fonts } from '../../../globals';
import { SmallParagraph } from '../text';
import { setCustomAlert } from '../../../stores/customer/CustomerActions';
import { View } from '../view';
import { TouchableOpacity } from '../touchable-opactiy';
import { Modal } from '@material-ui/core';

const redMarks = [
    "CANCEL",
    "OOPS",
    "WARNING",
    "ARE YOU SURE",
    "NO"
];
export const Alert = () => {
    const dispatch = useDispatch()
    const { customAlertData } = useSelector(({ Sooq }: any) => Sooq.customer);
    const { title, message, buttons, visibllity } = customAlertData

    const buttonPress = (selectedButton) => {
        try {
            closeAlert();
            setTimeout(() => {
                if (selectedButton?.onPress) {
                    selectedButton.onPress();
                }
            }, 300);

        } catch (error) {
            console.log("error: ", error)
        }
    }

    const closeAlert = () => {
        try {
            dispatch(setCustomAlert({
                visibllity: false
            }) as any);
        } catch (error) {
            console.log("error: ", error)
        }
    }

    const AlertButton = ({ data, index, isNextLine = false }) => {

        if (redMarks.indexOf(data.text.toUpperCase()) > -1) {

            return isNextLine ? (
                <View style={{
                    flexBasis: '100%',
                    height: 40,
                    margin: 10
                }}>
                    <TouchableOpacity key={`button-${index}`} style={{
                        flex: 1,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: Colors.red,
                        marginLeft: -5,
                        marginRight: 10
                    }} onPress={() => {
                        buttonPress(data);
                    }}>
                        <View style={{}}>
                            <SmallParagraph style={{ color: Colors.red, textAlign: 'center', marginVertical: 10 }}>{data.text}</SmallParagraph>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity key={`button-${index}`} style={{
                    flex: 1,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: Colors.red,
                    marginLeft: 5
                }} onPress={() => {
                    buttonPress(data);
                }}>
                    <View style={{}}>
                        <SmallParagraph style={{ color: Colors.red, textAlign: 'center', marginVertical: 10 }}>{data.text}</SmallParagraph>
                    </View>
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity key={`button-${index}`} style={{
                    flex: 1,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: Colors.primary['DEFAULT'],
                    backgroundColor: Colors.primary['DEFAULT'],
                    marginLeft: 5,
                }} onPress={() => {
                    buttonPress(data);
                }}>
                    <View style={{}}>
                        <SmallParagraph style={{ color: Colors.background, textAlign: 'center', marginVertical: 10 }}>{data.text}</SmallParagraph>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    return (
        <Modal open={visibllity}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'white',
                        marginVertical: 60,
                        width: '90%',
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 7,
                        elevation: 10,
                    }}>
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        {/* {
                            redMarks.filter(x => title?.toUpperCase()?.indexOf(x) > -1).length > 0 || redMarks.filter(x => message?.toUpperCase()?.indexOf(x) > -1).length > 0 ?
                                <Image source={require('../../Assets/Images/icons/alert-custom.png')} style={{ width: 30, height: 30, alignSelf: 'center', marginBottom: 10 }} /> :
                                null
                        } */}
                        {
                            title != '' && <SmallParagraph style={{
                                marginTop: 5,
                                textAlign: 'center',
                                marginBottom: '10px',
                                ...Fonts.bold
                            }}>{title}</SmallParagraph>
                        }

                        <SmallParagraph style={{ marginTop: 5, color: '#2F3545', textAlign: 'center' }}>
                            {message}
                        </SmallParagraph>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: buttons?.length > 1 ? (50 * (buttons?.length - 1)) : 50, display: 'flex', flexWrap: 'wrap', marginTop: 15 }}>
                        {
                            buttons ?
                                buttons.map((i, index) => {
                                    return <AlertButton isNextLine={buttons?.length > 2} data={i} index={index} />
                                })
                                :
                                <TouchableOpacity style={{
                                    flex: 1,
                                    maxWidth: 100,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: Colors.primary['DEFAULT'],
                                    backgroundColor: Colors.primary['DEFAULT'],
                                    // marginLeft: 10
                                }} onPress={() => {
                                    closeAlert()
                                }}>
                                    <View style={{}}>
                                        <SmallParagraph style={{ color: Colors.background, textAlign: 'center', marginVertical: 10 }}>Ok</SmallParagraph>
                                    </View>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </Modal>)
}