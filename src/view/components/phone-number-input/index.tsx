import _ from 'lodash';
import React from 'react';

import { LocaleProvider } from '../../../localisations/locale-provider';
import { Colors, Layout } from '../../../globals';
import { Heading6 } from '../text';
import { Props } from './types';
import { makeStyles } from '@material-ui/core';
import { View } from '../view';
import { TouchableOpacity } from '../touchable-opactiy';
import { TextInput } from '../text-input';

const INPUT_HEIGHT: number = 48;

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderColor: Colors.gray[600],
    borderRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    padding: `0px ${Layout.widthPercentageToDP(
      Layout.small / Layout.divisionFactorForWidth
    )} 0px ${Layout.widthPercentageToDP(
      Layout.small / Layout.divisionFactorForWidth
    )}`,
  },
  countryPickerButton: { display: "flex", flexDirection: "row", alignItems: "center" },
  errorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent[500],
  },
  errorBg: {
    backgroundColor: Colors.accent[300],
    borderRadius: 2,
    marginVertical: Layout.micro,
    marginLeft: Layout.mini,
    display: 'flex',
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: Layout.mini,
  },
})

export const inputTextStyle = (color: string) => ({
  paddingLeft: Layout.small,
  paddingRight: Layout.large,
  color: color,
});


const PhoneNumberInput = (props: Props) => {
  const styles = useStyles()
  const handleTextChanged = (text: string) => {
    props.onTextChanged(text);
  };

  return (
    <View style={[styles.container, props?.containerStyles]}>
      <TouchableOpacity onPress={props.onCountryCodePress}>
        <View style={styles.countryPickerButton}>
          <Heading6>{props?.countryItem?.flag}</Heading6>
          <View style={{ width: 8 }} />
          <Heading6>{props?.countryItem?.dialCode}</Heading6>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        {!_.isNil(props.error) && (
          <View style={styles.errorBg}>
            <View style={styles.errorDot} />
          </View>
        )}
        <TextInput
          value={props?.value}
          onChangeText={handleTextChanged}
          placeholder={LocaleProvider.formatMessage(LocaleProvider.IDs.label.phoneNoLabel)}
          placeholderTextColor={Colors.gray[600]}
          numberOfLines={1}
          multiline={false}
          style={inputTextStyle(props.error ? Colors.accent[500] : Colors.foreground)}
          keyboardType="phone-pad"
          returnKeyType="done"
          underlineColorAndroid={'transparent'}
          selectionColor={Colors.blue[500]}
        />
      </View>
    </View>
  );
};

export default PhoneNumberInput;
