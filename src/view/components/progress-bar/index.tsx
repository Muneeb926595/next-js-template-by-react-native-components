import React from 'react';
import { Micro } from '../text';
import { LocaleProvider } from '../../../localisations/locale-provider';
import { Colors, Layout } from '../../../globals';
import { Conditional } from '../conditional';
import { makeStyles } from '@material-ui/core';

type Props = {
    current?: any,
    total?: any,
    renderProgressBarLeftContent?: any,
    renderProgressBarRightContent?: any
}

const useStyles = makeStyles((theme) => ({
    container: {
        padding: `${Layout.heightPercentageToDP(
            Layout.mini / Layout.divisionFactorForHeight
        )} ${Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        )}
        ${Layout.heightPercentageToDP(
            Layout.mini / Layout.divisionFactorForHeight
        )}
         ${Layout.widthPercentageToDP(
            Layout.mini / Layout.divisionFactorForWidth
        )}`,
    },
    border: {
        borderRadius: Layout.heightPercentageToDP(
            Layout.mini / Layout.divisionFactorForHeight
        ),
        borderWidth: 1,
        borderColor: Colors.primary["DEFAULT"],
        padding: Layout.widthPercentageToDP(
            Layout.micro / Layout.divisionFactorForWidth
        ),
    },
    progress: {
        borderRadius: Layout.widthPercentageToDP(
            Layout.micro / Layout.divisionFactorForWidth
        ),
        backgroundColor: Colors.primary["DEFAULT"],
        height: Layout.heightPercentageToDP(
            Layout.micro / Layout.divisionFactorForHeight
        ),
    },
    count: {
        textAlign: "right",
        color: Colors.primary["DEFAULT"],
        marginTop: Layout.heightPercentageToDP(
            Layout.micro / Layout.divisionFactorForHeight
        ),
    },
}))

export const ProgressBar = (props: Props) => {
    const styles = useStyles()

    const { current, total, renderProgressBarLeftContent, renderProgressBarRightContent } = props

    const progress = (current / total) * 100;

    return (
        <div className={styles.container}>
            <div className={`${styles.border} ${{ borderColor: progress > 80 ? Colors?.red : Colors.primary['DEFAULT'] }}`}>
                <div className={`${styles.progress} ${{ width: `${progress}%`, backgroundColor: progress > 80 ? Colors?.red : Colors.primary['DEFAULT'] }}`}></div>
            </div>
            <div style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: Layout.widthPercentageToDP(Layout.micro / Layout.divisionFactorForWidth),
                paddingLeft: Layout.widthPercentageToDP(Layout.micro / Layout.divisionFactorForWidth)
            }}>
                {renderProgressBarLeftContent}
                <Conditional ifTrue={renderProgressBarRightContent} elseChildren={<Micro style={[styles.count, { color: progress > 80 ? Colors?.red : Colors.primary['DEFAULT'] }]}>{`${current} ${LocaleProvider.formatMessage(LocaleProvider.IDs.label.soldOut)} ${total}`}</Micro>}>
                    {renderProgressBarRightContent}
                </Conditional>
            </div>
        </div>
    );
};
