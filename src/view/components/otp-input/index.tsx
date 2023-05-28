'use client'
import React, { ReactNode, useState, useRef, } from 'react';

import { Props } from './types';
import { cellBorderStyle, cellStyle, cellTextStyle, } from './styles';
import { SmallParagraph } from '../text';
import { Colors, Constants, Fonts, Layout } from '../../../globals';
import { makeStyles } from '@material-ui/core';
import { View } from '../view';
import { TextInput } from '../text-input';

const useStyles = makeStyles({
  container: { alignItems: "center" },
  subContainer: { alignItems: "flex-start" },
  input: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    color: "transparent",
  },
  cellRaw: { display: 'flex', flexDirection: "row", marginBottom: `${Layout.small}px` },
  cellContainer: { marginHorizontal: Layout.micro },
  cell: {
    width: Constants.OTP_INPUT_CELL_SIZE,
    height: Constants.OTP_INPUT_CELL_SIZE,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: `${Layout.micro}px`,
    borderRadius: "2px",
  },
  cellText: {
    ...Fonts.heading3,
    color: Colors.foreground,
  },
  cellBorder: {
    width: Constants.OTP_INPUT_CELL_SIZE,
    height: "1px",
  },
  errorText: {
    color: Colors.red,
    paddingLeft: Layout.micro,
  },
})

export const OtpInput = (props: Props) => {
  const styles = useStyles()

  const [otpValue, setOtpValue] = useState(props.defaultValue ?? '');
  const inputRef = useRef<any>(null);

  const generateCells = (): ReactNode[] => {
    const cells: ReactNode[] = [];
    for (let i = 0; i < props?.cellsLength; i++) {
      cells.push(
        <View key={i.toString()} style={[styles.cellContainer, { backgroundColor: props?.mailVerification ? Colors.gray[500] : Colors.transparent, marginRight: props.cellSpacing && props.cellSpacing }]}>
          <View style={cellStyle(props.error, props?.mailVerification)}>
            {otpValue.length > i && <SmallParagraph style={cellTextStyle(props.error)}>{
              props?.secureInput ? '*' : otpValue.charAt(i)
            }</SmallParagraph>}
          </View>
          <View style={cellBorderStyle(true, props.error, props?.mailVerification)} />
        </View>
      );
    }
    return cells;
  };

  const handleTextChange = (text: string) => {
    setOtpValue(text);
    props.onCodeChanged(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={[styles.cellRaw, props.rowContainerStyles]}>
          {generateCells()}
        </View>
        <View>
          <SmallParagraph style={styles.errorText}>{props.error}</SmallParagraph>
        </View>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={otpValue}
          onChangeText={handleTextChange}
          maxLength={props?.cellsLength}
          returnKeyType="done"
          textContentType="oneTimeCode"
          underlineColorAndroid="transparent"
          selectionColor="transparent"
        />
      </View>
    </View>
  );
};
