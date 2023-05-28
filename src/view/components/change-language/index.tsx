'use client'
import React, { useEffect, useState } from 'react'
import _ from 'lodash';

import { LocaleProvider } from '../../../localisations/locale-provider';
import { BoldParagraph, } from '../text';
import { FormattedMessage } from '../../../localisations/locale-formatter';
import { Button } from '../button';
import { Colors, Layout } from '../../../globals';
import { Languages } from './types';
import { injectIntl } from 'react-intl';
import StorageHelper, { StorageKeys } from '../../../utils/StorageHelper';
import { Conditional } from '../conditional';
import { AnimatedLoader } from '../animated-loader';
import { makeStyles } from '@material-ui/core';
import { View } from '../view';
import { FlatList } from '../flatlist';

const useStyles = makeStyles({
    container: {
        padding: Layout.widthPercentageToDP(Layout.medium / Layout.divisionFactorForWidth)
    },
    header: {
        marginBottom: Layout.heightPercentageToDP(Layout.small / Layout.divisionFactorForHeight)
    },
})

export const ChangeLanguage = injectIntl((props) => {
    const styles = useStyles()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [supportedLanguages, setSupportedLanguages] = useState([
        {
            id: Languages.English,
            title: LocaleProvider.formatMessage(LocaleProvider.IDs.label.english),
            isSelected: true,
        },
        {
            id: Languages.Arabic,
            title: LocaleProvider.formatMessage(LocaleProvider.IDs.label.arabic),
            isSelected: false,
        }
    ])

    const initialRender = async () => {
        // when user visit this screen first check if user has set language
        // inside of setting before or not if yes then enable that option 
        // else check if user device language is other then english then 
        // set that language as setlected as that will be the lanaguage the 
        // app will be using else if none of them found then choose the default app language
        try {
            const appLocale = await StorageHelper.getItem(StorageKeys.SELECTED_APP_LANGUAGE) as string;
            const deviceLocale = props?.intl?.locale
            if (appLocale) {
                const updatedOptions = supportedLanguages?.map(item => item.id === appLocale ? { ...item, isSelected: true } : { ...item, isSelected: false })
                setSupportedLanguages(updatedOptions)
            } else if (deviceLocale) {
                const updatedOptions = supportedLanguages?.map(item => item.id === deviceLocale ? { ...item, isSelected: true } : { ...item, isSelected: false })
                setSupportedLanguages(updatedOptions)
            }
        } catch (err) {
            setSupportedLanguages([{
                id: Languages.English,
                title: LocaleProvider.formatMessage(LocaleProvider.IDs.label.english),
                isSelected: true,
            },
            {
                id: Languages.Arabic,
                title: LocaleProvider.formatMessage(LocaleProvider.IDs.label.arabic),
                isSelected: false,
            }])
        }
    }

    useEffect(() => {
        initialRender()
    }, [])

    const handleIssueChange = async (selectedId: string) => {
        //when user selecte new language from options first update all of the message accordingley
        //then store that language in user mobile so if user restart app then inside of app.ts we can use that language
        try {
            setIsLoading(true)
            //update current user language
            await LocaleProvider.init(selectedId);

            //set in device settings
            await StorageHelper.saveItem(StorageKeys.SELECTED_APP_LANGUAGE, selectedId);
            //focely change the local language for language-list
            setSupportedLanguages([
                {
                    id: Languages.English,
                    title: LocaleProvider.t(LocaleProvider.IDs.label.english),
                    isSelected: selectedId === Languages.English,
                },
                {
                    id: Languages.Arabic,
                    title: LocaleProvider.t(LocaleProvider.IDs.label.arabic),
                    isSelected: selectedId === Languages.Arabic,
                },
            ])
        } catch (error) {
            const e = error as any;
            alert(e.details.error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BoldParagraph style={{ textAlign: 'center' }}>
                    <FormattedMessage id={LocaleProvider.IDs.label.chooseLanguage} />
                </BoldParagraph>
            </View>

            <Conditional ifTrue={!isLoading} elseChildren={<AnimatedLoader />} >
                <FlatList
                    data={supportedLanguages}
                    renderItem={(item) => <Button
                        buttonLable={item?.title}
                        onPress={() => { handleIssueChange(item?.id) }}
                        buttonContainer={{
                            backgroundColor: Colors.transparent,
                            borderColor: item?.isSelected ? Colors.blue[500] : Colors.gray[400],
                            borderWidth: 1
                        }}
                        btnLabelStyles={{
                            color: item?.isSelected ? Colors.blue[500] : Colors.gray[400],
                        }}
                    />}
                />
            </Conditional>
        </View>
    )
})