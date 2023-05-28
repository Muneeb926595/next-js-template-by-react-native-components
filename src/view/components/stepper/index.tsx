import React, { useEffect, useState, } from 'react';
import { Colors, Layout } from '../../../globals';
import { FormattedMessage } from '../../../localisations/locale-formatter';
import { LocaleProvider } from '../../../localisations/locale-provider';
import { AppIcon } from '../icon';
import { AppIconName, AppIconSize } from '../icon/types';
import { SmallParagraph } from '../text';
import { StepperProps } from './types';

const search = (keyName: number, myArray: number[]): boolean => {
    let value = false;
    myArray.map((val) => {
        if (val === keyName) {
            value = true;
        }
    });
    return value;
};

export const Stepper = (props: StepperProps) => {
    const {
        active,
        content,
        onBack,
        onNext,
        onFinish,
        wrapperStyle,
        stepStyle,
        stepTextStyle,
        buttonStyle,
        buttonTextStyle,
        buttonContainerStyle,
        stepsContainerStyles,
        contentContainerStyles,
        showButton = true,
    } = props;
    const [step, setStep] = useState<number[]>([0]);
    const pushData = (val: number) => {
        setStep((prev) => [...prev, val]);
    };

    useEffect(() => {
        if (active) {
            setStep((prev) => [...prev, active]);
        }
    }, [active])

    const removeData = () => {
        const newSteps = step?.filter((item) => item !== step[step?.length - 1])
        setStep(newSteps);
    };
    return (
        <div style={wrapperStyle}>
            {showButton && (
                <div
                    style={{
                        flexDirection: 'row',
                    }}>
                    {active !== 0 && (
                        <div style={buttonContainerStyle}>
                            <button
                                className={`${{
                                    padding: Layout.widthPercentageToDP(Layout.mini / Layout.divisionFactorForWidth),
                                    backgroundColor: Colors.background,
                                }} ${buttonStyle}`}
                                onClick={() => {
                                    removeData();
                                    onBack();
                                }}>
                                <AppIcon
                                    name={AppIconName.backArrow}
                                    color={Colors.primary['DEFAULT']}
                                    iconSize={AppIconSize.mini}
                                />
                                <SmallParagraph style={`${{ color: 'white' }} ${buttonTextStyle}`}>
                                    <FormattedMessage id={LocaleProvider.IDs.general.back} />
                                </SmallParagraph>
                            </button>
                        </div>
                    )}
                    {/* {content.length - 1 !== active && (
                        <TouchableOpacity
                            style={[
                                {
                                    padding: 10,
                                    borderRadius: 4,
                                    backgroundColor: '#1976d2',
                                    alignSelf: 'flex-start',
                                    marginRight: 10,
                                },
                                buttonStyle,
                            ]}
                            onPress={() => {
                                pushData(active + 1);
                                onNext();
                            }}>
                            <Text style={[{ color: 'white' }, buttonTextStyle]}>Next</Text>
                        </TouchableOpacity>
                    )} */}
                    {/* {content.length - 1 === active && (
                        <TouchableOpacity
                            style={[
                                {
                                    padding: 10,
                                    borderRadius: 4,
                                    backgroundColor: '#1976d2',
                                    alignSelf: 'flex-start',
                                },
                                buttonStyle,
                            ]}
                            onPress={() => onFinish()}>
                            <Text style={[{ color: 'white' }, buttonTextStyle]}>Finish</Text>
                        </TouchableOpacity>
                    )} */}
                </div>
            )}
            <div
                className={`${{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} ${stepsContainerStyles}`}>
                {content.map((_, i) => {
                    return (
                        <React.Fragment key={i}>
                            {i !== 0 && (
                                <div
                                    style={{
                                        flex: 1,
                                        height: 1,
                                        backgroundColor: 'grey',
                                        opacity: 1,
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                />
                            )}
                            <div
                                className={`${{
                                    backgroundColor: Colors.primary['DEFAULT'],
                                    width: 30,
                                    height: 30,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: search(i, step) ? 1 : 0.3,
                                }} ${stepStyle}`}>
                                {search(i, step) ? (
                                    <p
                                        className={`${{ color: 'white', }} ${stepTextStyle}`}>
                                        &#10003;
                                    </p>
                                ) : (
                                    <p
                                        className={`${{ color: 'white' }} ${stepTextStyle}`}>
                                        {i + 1}
                                    </p>
                                )}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className={`${{ flex: 1 }} ${contentContainerStyles}`}>
                {content[active]}
            </div>
        </div>
    );
};