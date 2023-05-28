import React from 'react'

import { Colors, Fonts, Layout, } from '../../../globals'
import { SmallParagraph } from '../text';
import { ITab, TabsProps } from './types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tabsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: Layout.small,
        backgroundColor: Colors.gray[100],
        padding: Layout.widthPercentageToDP(Layout.micro / Layout.divisionFactorForWidth),
        borderRadius: Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        ),
    },
    tab: {
        flex: 1,
        backgroundColor: Colors.primary['DEFAULT'],
        borderRadius: Layout.widthPercentageToDP(Layout.mini / Layout.divisionFactorForWidth),
        paddingVertical: Layout.heightPercentageToDP(
            Layout.mini / Layout.divisionFactorForHeight
        ),
    },
    textCenter: {
        textAlign: "center",
    },
}))

export const Tabs = ({ selectedTab, tabs, containerStyles, activeTabBg, activeTabFg, inActiveTabBg, inActiveTabFg }: TabsProps) => {
    const styles = useStyles()
    return (
        <div className={`${styles.tabsContainer} ${containerStyles}`} >
            {
                tabs?.map((tab: ITab) =>
                    <>
                        {!tab?.isFeatureDisabled &&
                            <button
                                className={`${styles.tab}`}
                                style={{ backgroundColor: selectedTab === tab?.tabName ? activeTabBg ?? Colors.primary['DEFAULT'] : inActiveTabBg ?? Colors.gray[100] }}
                                onClick={tab?.onPress} >
                                <SmallParagraph style={[styles.textCenter, { ...Fonts.bold }, { color: selectedTab === tab?.tabName ? activeTabFg ?? Colors.background : inActiveTabFg ?? Colors.foreground }]} >
                                    {tab?.label}
                                </SmallParagraph>
                            </button>}
                    </>
                )
            }
        </div>
    )
}

