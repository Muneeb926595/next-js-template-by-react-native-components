import React, { useState } from 'react';

import { AppIcon, Heading2, Paragraph, TextInput, TouchableOpacity, View, } from '..';
import { LocaleProvider } from '../../../localisations/locale-provider';
import { pressableStyle, itemLayout } from './styles';
import _ from 'lodash';
import { Colors, Constants, Fonts, Layout } from '../../../globals';
import { AppIconName } from '../icon/types';
import { Country } from '../phone-number-input/types';
import { FlatList } from '../flatlist';
import { makeStyles } from '@material-ui/core';

type Props = {
  setSelectedCountry: (item: Country) => void,
  setIsCountryModalVisible: (value: boolean) => void,
}

const useStyles = makeStyles({
  container: {
    paddingTop: Layout.heightPercentageToDP(Layout.xxlarge / Layout.divisionFactorForHeight),
    backgroundColor: Colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth),
    justifyContent: 'space-between'
  },
  screenTitle: {
    marginBottom: Layout.heightPercentageToDP(Layout.mini / Layout.divisionFactorForHeight),
    color: Colors.foreground,
  },
  searchInput: {
    marginHorizontal: Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth),
    ...Fonts.paragraph,
    color: Colors.gray[500],
  },
  itemContainer: {
    height: Constants.COUNTRY_ITEM_HEIGHT,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0px ${Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth)} 0px ${Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth)}`,
  },
  countryName: {
    flex: 1,
    paddingRight: Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth),
    marginBottom: '0px',
    color: Colors.foreground,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.gray[200],
    marginHorizontal: Layout.widthPercentageToDP(Layout.small / Layout.divisionFactorForWidth),
  },
})

// eslint-disable-next-line react/display-name
const CountryListItemView = React.memo(
  (props: { item: any; onPress: () => void }) => {
    const styles = useStyles()
    return (
      <TouchableOpacity style={pressableStyle} onPress={props.onPress}>
        <View style={styles.itemContainer}>
          <Paragraph
            style={styles.countryName}
            maxNumberOfLines={1}
          >{`${props.item.flag} ${props.item.name}`}</Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>{props.item.dialCode}</Paragraph>
        </View>
      </TouchableOpacity>
    );
  },
  (prev, next) => {
    return prev.item === next.item;
  }
);

export const CountryList = (props: Props) => {
  const styles = useStyles()

  const [countriesToShow, setCountriesToShow] = useState(COUNTRIES)

  const handleOnPress = (countryItem: Country) => () => {
    props?.setSelectedCountry(countryItem)
    props?.setIsCountryModalVisible(false)
  };

  const renderItem = (info: any) => {
    return <CountryListItemView item={info.item} onPress={handleOnPress(info.item)} />;
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const onTextChanged = _.debounce((text: string) => {
    const filtered = COUNTRIES.filter((v) => {
      const searchValue = text.toLowerCase();
      return (
        (v.name as string).toLowerCase().includes(searchValue) ||
        (v.countryCode as string).toLowerCase().includes(searchValue) ||
        (v.dialCode as string).toLowerCase().includes(searchValue)
      );
    });
    setCountriesToShow(filtered);
  }, Constants.duration.short);

  return (
    <View style={styles.container} >
      <View style={styles.headerContainer}>
        <Heading2 style={styles.screenTitle}>{LocaleProvider.t(LocaleProvider.IDs.label.selectCountry)}</Heading2>
        <TouchableOpacity onPress={() => { props.setIsCountryModalVisible(false) }} >
          <AppIcon
            name={AppIconName.home}
            color={Colors.foreground}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={onTextChanged}
        style={styles.searchInput}
        placeholderTextColor={Colors.gray[500]}
        placeholder={LocaleProvider.t(LocaleProvider.IDs.label.search)}
      />
      <FlatList
        keyExtractor={(i) => i.countryCode + i.dialCode}
        data={countriesToShow}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        getItemLayout={itemLayout}
      />
    </View>
  );
};

const COUNTRIES: Country[] = [
  // { name: 'Afghanistan', flag: '🇦🇫', countryCode: 'AF', dialCode: '+93' },
  // { name: 'Åland Islands', flag: '🇦🇽', countryCode: 'AX', dialCode: '+358' },
  // { name: 'Albania', flag: '🇦🇱', countryCode: 'AL', dialCode: '+355' },
  // { name: 'Algeria', flag: '🇩🇿', countryCode: 'DZ', dialCode: '+213' },
  // { name: 'American Samoa', flag: '🇦🇸', countryCode: 'AS', dialCode: '+1684' },
  // { name: 'Andorra', flag: '🇦🇩', countryCode: 'AD', dialCode: '+376' },
  // { name: 'Angola', flag: '🇦🇴', countryCode: 'AO', dialCode: '+244' },
  // { name: 'Anguilla', flag: '🇦🇮', countryCode: 'AI', dialCode: '+1264' },
  // { name: 'Antarctica', flag: '🇦🇶', countryCode: 'AQ', dialCode: '+672' },
  // { name: 'Antigua and Barbuda', flag: '🇦🇬', countryCode: 'AG', dialCode: '+1268' },
  // { name: 'Argentina', flag: '🇦🇷', countryCode: 'AR', dialCode: '+54' },
  // { name: 'Armenia', flag: '🇦🇲', countryCode: 'AM', dialCode: '+374' },
  // { name: 'Aruba', flag: '🇦🇼', countryCode: 'AW', dialCode: '+297' },
  // { name: 'Australia', flag: '🇦🇺', countryCode: 'AU', dialCode: '+61' },
  // { name: 'Austria', flag: '🇦🇹', countryCode: 'AT', dialCode: '+43' },
  // { name: 'Azerbaijan', flag: '🇦🇿', countryCode: 'AZ', dialCode: '+994' },
  // { name: 'Bahamas', flag: '🇧🇸', countryCode: 'BS', dialCode: '+1242' },
  // { name: 'Bahrain', flag: '🇧🇭', countryCode: 'BH', dialCode: '+973' },
  // { name: 'Bangladesh', flag: '🇧🇩', countryCode: 'BD', dialCode: '+880' },
  // { name: 'Barbados', flag: '🇧🇧', countryCode: 'BB', dialCode: '+1246' },
  // { name: 'Belarus', flag: '🇧🇾', countryCode: 'BY', dialCode: '+375' },
  // { name: 'Belgium', flag: '🇧🇪', countryCode: 'BE', dialCode: '+32' },
  // { name: 'Belize', flag: '🇧🇿', countryCode: 'BZ', dialCode: '+501' },
  // { name: 'Benin', flag: '🇧🇯', countryCode: 'BJ', dialCode: '+229' },
  // { name: 'Bermuda', flag: '🇧🇲', countryCode: 'BM', dialCode: '+1441' },
  // { name: 'Bhutan', flag: '🇧🇹', countryCode: 'BT', dialCode: '+975' },
  // { name: 'Bolivia, Plurinational State of bolivia', flag: '🇧🇴', countryCode: 'BO', dialCode: '+591' },
  // { name: 'Bosnia and Herzegovina', flag: '🇧🇦', countryCode: 'BA', dialCode: '+387' },
  // { name: 'Botswana', flag: '🇧🇼', countryCode: 'BW', dialCode: '+267' },
  // { name: 'Bouvet Island', flag: '🇧🇻', countryCode: 'BV', dialCode: '+47' },
  // { name: 'Brazil', flag: '🇧🇷', countryCode: 'BR', dialCode: '+55' },
  // { name: 'British Indian Ocean Territory', flag: '🇮🇴', countryCode: 'IO', dialCode: '+246' },
  // { name: 'Brunei Darussalam', flag: '🇧🇳', countryCode: 'BN', dialCode: '+673' },
  // { name: 'Bulgaria', flag: '🇧🇬', countryCode: 'BG', dialCode: '+359' },
  // { name: 'Burkina Faso', flag: '🇧🇫', countryCode: 'BF', dialCode: '+226' },
  // { name: 'Burundi', flag: '🇧🇮', countryCode: 'BI', dialCode: '+257' },
  // { name: 'Cambodia', flag: '🇰🇭', countryCode: 'KH', dialCode: '+855' },
  // { name: 'Cameroon', flag: '🇨🇲', countryCode: 'CM', dialCode: '+237' },
  // { name: 'Canada', flag: '🇨🇦', countryCode: 'CA', dialCode: '+1' },
  // { name: 'Cape Verde', flag: '🇨🇻', countryCode: 'CV', dialCode: '+238' },
  // { name: 'Cayman Islands', flag: '🇰🇾', countryCode: 'KY', dialCode: '+345' },
  // { name: 'Central African Republic', flag: '🇨🇫', countryCode: 'CF', dialCode: '+236' },
  // { name: 'Chad', flag: '🇹🇩', countryCode: 'TD', dialCode: '+235' },
  // { name: 'Chile', flag: '🇨🇱', countryCode: 'CL', dialCode: '+56' },
  // { name: 'China', flag: '🇨🇳', countryCode: 'CN', dialCode: '+86' },
  // { name: 'Christmas Island', flag: '🇨🇽', countryCode: 'CX', dialCode: '+61' },
  // { name: 'Cocos (Keeling) Islands', flag: '🇨🇨', countryCode: 'CC', dialCode: '+61' },
  // { name: 'Colombia', flag: '🇨🇴', countryCode: 'CO', dialCode: '+57' },
  // { name: 'Comoros', flag: '🇰🇲', countryCode: 'KM', dialCode: '+269' },
  // { name: 'Congo', flag: '🇨🇬', countryCode: 'CG', dialCode: '+242' },
  // { name: 'Congo, The Democratic Republic of the Congo', flag: '🇨🇩', countryCode: 'CD', dialCode: '+243' },
  // { name: 'Cook Islands', flag: '🇨🇰', countryCode: 'CK', dialCode: '+682' },
  // { name: 'Costa Rica', flag: '🇨🇷', countryCode: 'CR', dialCode: '+506' },
  // { name: "Cote d'Ivoire", flag: '🇨🇮', countryCode: 'CI', dialCode: '+225' },
  // { name: 'Croatia', flag: '🇭🇷', countryCode: 'HR', dialCode: '+385' },
  // { name: 'Cuba', flag: '🇨🇺', countryCode: 'CU', dialCode: '+53' },
  // { name: 'Cyprus', flag: '🇨🇾', countryCode: 'CY', dialCode: '+357' },
  // { name: 'Czech Republic', flag: '🇨🇿', countryCode: 'CZ', dialCode: '+420' },
  // { name: 'Denmark', flag: '🇩🇰', countryCode: 'DK', dialCode: '+45' },
  // { name: 'Djibouti', flag: '🇩🇯', countryCode: 'DJ', dialCode: '+253' },
  // { name: 'Dominica', flag: '🇩🇲', countryCode: 'DM', dialCode: '+1767' },
  // { name: 'Dominican Republic', flag: '🇩🇴', countryCode: 'DO', dialCode: '+1849' },
  // { name: 'Ecuador', flag: '🇪🇨', countryCode: 'EC', dialCode: '+593' },
  // { name: 'Egypt', flag: '🇪🇬', countryCode: 'EG', dialCode: '+20' },
  // { name: 'El Salvador', flag: '🇸🇻', countryCode: 'SV', dialCode: '+503' },
  // { name: 'Equatorial Guinea', flag: '🇬🇶', countryCode: 'GQ', dialCode: '+240' },
  // { name: 'Eritrea', flag: '🇪🇷', countryCode: 'ER', dialCode: '+291' },
  // { name: 'Estonia', flag: '🇪🇪', countryCode: 'EE', dialCode: '+372' },
  // { name: 'Ethiopia', flag: '🇪🇹', countryCode: 'ET', dialCode: '+251' },
  // { name: 'Falkland Islands (Malvinas)', flag: '🇫🇰', countryCode: 'FK', dialCode: '+500' },
  // { name: 'Faroe Islands', flag: '🇫🇴', countryCode: 'FO', dialCode: '+298' },
  // { name: 'Fiji', flag: '🇫🇯', countryCode: 'FJ', dialCode: '+679' },
  // { name: 'Finland', flag: '🇫🇮', countryCode: 'FI', dialCode: '+358' },
  // { name: 'France', flag: '🇫🇷', countryCode: 'FR', dialCode: '+33' },
  // { name: 'French Guiana', flag: '🇬🇫', countryCode: 'GF', dialCode: '+594' },
  // { name: 'French Polynesia', flag: '🇵🇫', countryCode: 'PF', dialCode: '+689' },
  // { name: 'French Southern Territories', flag: '🇹🇫', countryCode: 'TF', dialCode: '+262' },
  // { name: 'Gabon', flag: '🇬🇦', countryCode: 'GA', dialCode: '+241' },
  // { name: 'Gambia', flag: '🇬🇲', countryCode: 'GM', dialCode: '+220' },
  // { name: 'Georgia', flag: '🇬🇪', countryCode: 'GE', dialCode: '+995' },
  // { name: 'Germany', flag: '🇩🇪', countryCode: 'DE', dialCode: '+49' },
  // { name: 'Ghana', flag: '🇬🇭', countryCode: 'GH', dialCode: '+233' },
  // { name: 'Gibraltar', flag: '🇬🇮', countryCode: 'GI', dialCode: '+350' },
  // { name: 'Greece', flag: '🇬🇷', countryCode: 'GR', dialCode: '+30' },
  // { name: 'Greenland', flag: '🇬🇱', countryCode: 'GL', dialCode: '+299' },
  // { name: 'Grenada', flag: '🇬🇩', countryCode: 'GD', dialCode: '+1473' },
  // { name: 'Guadeloupe', flag: '🇬🇵', countryCode: 'GP', dialCode: '+590' },
  // { name: 'Guam', flag: '🇬🇺', countryCode: 'GU', dialCode: '+1671' },
  // { name: 'Guatemala', flag: '🇬🇹', countryCode: 'GT', dialCode: '+502' },
  // { name: 'Guernsey', flag: '🇬🇬', countryCode: 'GG', dialCode: '+44' },
  // { name: 'Guinea', flag: '🇬🇳', countryCode: 'GN', dialCode: '+224' },
  // { name: 'Guinea-Bissau', flag: '🇬🇼', countryCode: 'GW', dialCode: '+245' },
  // { name: 'Guyana', flag: '🇬🇾', countryCode: 'GY', dialCode: '+592' },
  // { name: 'Haiti', flag: '🇭🇹', countryCode: 'HT', dialCode: '+509' },
  // { name: 'Heard Island and Mcdonald Islands', flag: '🇭🇲', countryCode: 'HM', dialCode: '+672' },
  // { name: 'Holy See (Vatican City State)', flag: '🇻🇦', countryCode: 'VA', dialCode: '+379' },
  // { name: 'Honduras', flag: '🇭🇳', countryCode: 'HN', dialCode: '+504' },
  // { name: 'Hong Kong', flag: '🇭🇰', countryCode: 'HK', dialCode: '+852' },
  // { name: 'Hungary', flag: '🇭🇺', countryCode: 'HU', dialCode: '+36' },
  // { name: 'Iceland', flag: '🇮🇸', countryCode: 'IS', dialCode: '+354' },
  // { name: 'India', flag: '🇮🇳', countryCode: 'IN', dialCode: '+91' },
  // { name: 'Indonesia', flag: '🇮🇩', countryCode: 'ID', dialCode: '+62' },
  // { name: 'Iran, Islamic Republic of Persian Gulf', flag: '🇮🇷', countryCode: 'IR', dialCode: '+98' },
  // { name: 'Iraq', flag: '🇮🇶', countryCode: 'IQ', dialCode: '+964' },
  // { name: 'Ireland', flag: '🇮🇪', countryCode: 'IE', dialCode: '+353' },
  // { name: 'Isle of Man', flag: '🇮🇲', countryCode: 'IM', dialCode: '+44' },
  // { name: 'Israel', flag: '🇮🇱', countryCode: 'IL', dialCode: '+972' },
  // { name: 'Italy', flag: '🇮🇹', countryCode: 'IT', dialCode: '+39' },
  // { name: 'Jamaica', flag: '🇯🇲', countryCode: 'JM', dialCode: '+1876' },
  // { name: 'Japan', flag: '🇯🇵', countryCode: 'JP', dialCode: '+81' },
  // { name: 'Jersey', flag: '🇯🇪', countryCode: 'JE', dialCode: '+44' },
  // { name: 'Jordan', flag: '🇯🇴', countryCode: 'JO', dialCode: '+962' },
  // { name: 'Kazakhstan', flag: '🇰🇿', countryCode: 'KZ', dialCode: '+7' },
  // { name: 'Kenya', flag: '🇰🇪', countryCode: 'KE', dialCode: '+254' },
  // { name: 'Kiribati', flag: '🇰🇮', countryCode: 'KI', dialCode: '+686' },
  // { name: "Korea, Democratic People's Republic of Korea", flag: '🇰🇵', countryCode: 'KP', dialCode: '+850' },
  // { name: 'Korea, Republic of South Korea', flag: '🇰🇷', countryCode: 'KR', dialCode: '+82' },
  // { name: 'Kosovo', flag: '🇽🇰', countryCode: 'XK', dialCode: '+383' },
  // { name: 'Kuwait', flag: '🇰🇼', countryCode: 'KW', dialCode: '+965' },
  // { name: 'Kyrgyzstan', flag: '🇰🇬', countryCode: 'KG', dialCode: '+996' },
  // { name: 'Laos', flag: '🇱🇦', countryCode: 'LA', dialCode: '+856' },
  // { name: 'Latvia', flag: '🇱🇻', countryCode: 'LV', dialCode: '+371' },
  // { name: 'Lebanon', flag: '🇱🇧', countryCode: 'LB', dialCode: '+961' },
  // { name: 'Lesotho', flag: '🇱🇸', countryCode: 'LS', dialCode: '+266' },
  // { name: 'Liberia', flag: '🇱🇷', countryCode: 'LR', dialCode: '+231' },
  // { name: 'Libyan Arab Jamahiriya', flag: '🇱🇾', countryCode: 'LY', dialCode: '+218' },
  // { name: 'Liechtenstein', flag: '🇱🇮', countryCode: 'LI', dialCode: '+423' },
  // { name: 'Lithuania', flag: '🇱🇹', countryCode: 'LT', dialCode: '+370' },
  // { name: 'Luxembourg', flag: '🇱🇺', countryCode: 'LU', dialCode: '+352' },
  // { name: 'Macao', flag: '🇲🇴', countryCode: 'MO', dialCode: '+853' },
  // { name: 'Macedonia', flag: '🇲🇰', countryCode: 'MK', dialCode: '+389' },
  // { name: 'Madagascar', flag: '🇲🇬', countryCode: 'MG', dialCode: '+261' },
  // { name: 'Malawi', flag: '🇲🇼', countryCode: 'MW', dialCode: '+265' },
  // { name: 'Malaysia', flag: '🇲🇾', countryCode: 'MY', dialCode: '+60' },
  // { name: 'Maldives', flag: '🇲🇻', countryCode: 'MV', dialCode: '+960' },
  // { name: 'Mali', flag: '🇲🇱', countryCode: 'ML', dialCode: '+223' },
  // { name: 'Malta', flag: '🇲🇹', countryCode: 'MT', dialCode: '+356' },
  // { name: 'Marshall Islands', flag: '🇲🇭', countryCode: 'MH', dialCode: '+692' },
  // { name: 'Martinique', flag: '🇲🇶', countryCode: 'MQ', dialCode: '+596' },
  // { name: 'Mauritania', flag: '🇲🇷', countryCode: 'MR', dialCode: '+222' },
  // { name: 'Mauritius', flag: '🇲🇺', countryCode: 'MU', dialCode: '+230' },
  // { name: 'Mayotte', flag: '🇾🇹', countryCode: 'YT', dialCode: '+262' },
  // { name: 'Mexico', flag: '🇲🇽', countryCode: 'MX', dialCode: '+52' },
  // { name: 'Micronesia, Federated States of Micronesia', flag: '🇫🇲', countryCode: 'FM', dialCode: '+691' },
  // { name: 'Moldova', flag: '🇲🇩', countryCode: 'MD', dialCode: '+373' },
  // { name: 'Monaco', flag: '🇲🇨', countryCode: 'MC', dialCode: '+377' },
  // { name: 'Mongolia', flag: '🇲🇳', countryCode: 'MN', dialCode: '+976' },
  // { name: 'Montenegro', flag: '🇲🇪', countryCode: 'ME', dialCode: '+382' },
  // { name: 'Montserrat', flag: '🇲🇸', countryCode: 'MS', dialCode: '+1664' },
  // { name: 'Morocco', flag: '🇲🇦', countryCode: 'MA', dialCode: '+212' },
  // { name: 'Mozambique', flag: '🇲🇿', countryCode: 'MZ', dialCode: '+258' },
  // { name: 'Myanmar', flag: '🇲🇲', countryCode: 'MM', dialCode: '+95' },
  // { name: 'Namibia', flag: '🇳🇦', countryCode: 'NA', dialCode: '+264' },
  // { name: 'Nauru', flag: '🇳🇷', countryCode: 'NR', dialCode: '+674' },
  // { name: 'Nepal', flag: '🇳🇵', countryCode: 'NP', dialCode: '+977' },
  // { name: 'Netherlands', flag: '🇳🇱', countryCode: 'NL', dialCode: '+31' },
  // { name: 'Netherlands Antilles', flag: '', countryCode: 'AN', dialCode: '+599' },
  // { name: 'New Caledonia', flag: '🇳🇨', countryCode: 'NC', dialCode: '+687' },
  // { name: 'New Zealand', flag: '🇳🇿', countryCode: 'NZ', dialCode: '+64' },
  // { name: 'Nicaragua', flag: '🇳🇮', countryCode: 'NI', dialCode: '+505' },
  // { name: 'Niger', flag: '🇳🇪', countryCode: 'NE', dialCode: '+227' },
  // { name: 'Nigeria', flag: '🇳🇬', countryCode: 'NG', dialCode: '+234' },
  // { name: 'Niue', flag: '🇳🇺', countryCode: 'NU', dialCode: '+683' },
  // { name: 'Norfolk Island', flag: '🇳🇫', countryCode: 'NF', dialCode: '+672' },
  // { name: 'Northern Mariana Islands', flag: '🇲🇵', countryCode: 'MP', dialCode: '+1670' },
  // { name: 'Norway', flag: '🇳🇴', countryCode: 'NO', dialCode: '+47' },
  // { name: 'Oman', flag: '🇴🇲', countryCode: 'OM', dialCode: '+968' },
  // { name: 'Pakistan', flag: '🇵🇰', countryCode: 'PK', dialCode: '+92' },
  // { name: 'Palau', flag: '🇵🇼', countryCode: 'PW', dialCode: '+680' },
  // { name: 'Palestinian Territory, Occupied', flag: '🇵🇸', countryCode: 'PS', dialCode: '+970' },
  // { name: 'Panama', flag: '🇵🇦', countryCode: 'PA', dialCode: '+507' },
  // { name: 'Papua New Guinea', flag: '🇵🇬', countryCode: 'PG', dialCode: '+675' },
  // { name: 'Paraguay', flag: '🇵🇾', countryCode: 'PY', dialCode: '+595' },
  // { name: 'Peru', flag: '🇵🇪', countryCode: 'PE', dialCode: '+51' },
  // { name: 'Philippines', flag: '🇵🇭', countryCode: 'PH', dialCode: '+63' },
  // { name: 'Pitcairn', flag: '🇵🇳', countryCode: 'PN', dialCode: '+64' },
  // { name: 'Poland', flag: '🇵🇱', countryCode: 'PL', dialCode: '+48' },
  // { name: 'Portugal', flag: '🇵🇹', countryCode: 'PT', dialCode: '+351' },
  // { name: 'Puerto Rico', flag: '🇵🇷', countryCode: 'PR', dialCode: '+1939' },
  // { name: 'Qatar', flag: '🇶🇦', countryCode: 'QA', dialCode: '+974' },
  // { name: 'Romania', flag: '🇷🇴', countryCode: 'RO', dialCode: '+40' },
  // { name: 'Russia', flag: '🇷🇺', countryCode: 'RU', dialCode: '+7' },
  // { name: 'Rwanda', flag: '🇷🇼', countryCode: 'RW', dialCode: '+250' },
  // { name: 'Reunion', flag: '🇷🇪', countryCode: 'RE', dialCode: '+262' },
  // { name: 'Saint Barthelemy', flag: '🇧🇱', countryCode: 'BL', dialCode: '+590' },
  // { name: 'Saint Helena, Ascension and Tristan Da Cunha', flag: '🇸🇭', countryCode: 'SH', dialCode: '+290' },
  // { name: 'Saint Kitts and Nevis', flag: '🇰🇳', countryCode: 'KN', dialCode: '+1869' },
  // { name: 'Saint Lucia', flag: '🇱🇨', countryCode: 'LC', dialCode: '+1758' },
  // { name: 'Saint Martin', flag: '🇲🇫', countryCode: 'MF', dialCode: '+590' },
  // { name: 'Saint Pierre and Miquelon', flag: '🇵🇲', countryCode: 'PM', dialCode: '+508' },
  // { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', countryCode: 'VC', dialCode: '+1784' },
  // { name: 'Samoa', flag: '🇼🇸', countryCode: 'WS', dialCode: '+685' },
  // { name: 'San Marino', flag: '🇸🇲', countryCode: 'SM', dialCode: '+378' },
  // { name: 'Sao Tome and Principe', flag: '🇸🇹', countryCode: 'ST', dialCode: '+239' },
  // { name: 'Saudi Arabia', flag: '🇸🇦', countryCode: 'SA', dialCode: '+966' },
  // { name: 'Senegal', flag: '🇸🇳', countryCode: 'SN', dialCode: '+221' },
  // { name: 'Serbia', flag: '🇷🇸', countryCode: 'RS', dialCode: '+381' },
  // { name: 'Seychelles', flag: '🇸🇨', countryCode: 'SC', dialCode: '+248' },
  // { name: 'Sierra Leone', flag: '🇸🇱', countryCode: 'SL', dialCode: '+232' },
  // { name: 'Singapore', flag: '🇸🇬', countryCode: 'SG', dialCode: '+65' },
  // { name: 'Slovakia', flag: '🇸🇰', countryCode: 'SK', dialCode: '+421' },
  // { name: 'Slovenia', flag: '🇸🇮', countryCode: 'SI', dialCode: '+386' },
  // { name: 'Solomon Islands', flag: '🇸🇧', countryCode: 'SB', dialCode: '+677' },
  // { name: 'Somalia', flag: '🇸🇴', countryCode: 'SO', dialCode: '+252' },
  // { name: 'South Africa', flag: '🇿🇦', countryCode: 'ZA', dialCode: '+27' },
  // { name: 'South Sudan', flag: '🇸🇸', countryCode: 'SS', dialCode: '+211' },
  // { name: 'South Georgia and the South Sandwich Islands', flag: '🇬🇸', countryCode: 'GS', dialCode: '+500' },
  // { name: 'Spain', flag: '🇪🇸', countryCode: 'ES', dialCode: '+34' },
  // { name: 'Sri Lanka', flag: '🇱🇰', countryCode: 'LK', dialCode: '+94' },
  // { name: 'Sudan', flag: '🇸🇩', countryCode: 'SD', dialCode: '+249' },
  // { name: 'Suriname', flag: '🇸🇷', countryCode: 'SR', dialCode: '+597' },
  // { name: 'Svalbard and Jan Mayen', flag: '🇸🇯', countryCode: 'SJ', dialCode: '+47' },
  // { name: 'Swaziland', flag: '🇸🇿', countryCode: 'SZ', dialCode: '+268' },
  // { name: 'Sweden', flag: '🇸🇪', countryCode: 'SE', dialCode: '+46' },
  // { name: 'Switzerland', flag: '🇨🇭', countryCode: 'CH', dialCode: '+41' },
  // { name: 'Syrian Arab Republic', flag: '🇸🇾', countryCode: 'SY', dialCode: '+963' },
  // { name: 'Taiwan', flag: '🇹🇼', countryCode: 'TW', dialCode: '+886' },
  // { name: 'Tajikistan', flag: '🇹🇯', countryCode: 'TJ', dialCode: '+992' },
  // { name: 'Tanzania, United Republic of Tanzania', flag: '🇹🇿', countryCode: 'TZ', dialCode: '+255' },
  // { name: 'Thailand', flag: '🇹🇭', countryCode: 'TH', dialCode: '+66' },
  // { name: 'Timor-Leste', flag: '🇹🇱', countryCode: 'TL', dialCode: '+670' },
  // { name: 'Togo', flag: '🇹🇬', countryCode: 'TG', dialCode: '+228' },
  // { name: 'Tokelau', flag: '🇹🇰', countryCode: 'TK', dialCode: '+690' },
  // { name: 'Tonga', flag: '🇹🇴', countryCode: 'TO', dialCode: '+676' },
  // { name: 'Trinidad and Tobago', flag: '🇹🇹', countryCode: 'TT', dialCode: '+1868' },
  // { name: 'Tunisia', flag: '🇹🇳', countryCode: 'TN', dialCode: '+216' },
  // { name: 'Turkey', flag: '🇹🇷', countryCode: 'TR', dialCode: '+90' },
  // { name: 'Turkmenistan', flag: '🇹🇲', countryCode: 'TM', dialCode: '+993' },
  // { name: 'Turks and Caicos Islands', flag: '🇹🇨', countryCode: 'TC', dialCode: '+1649' },
  // { name: 'Tuvalu', flag: '🇹🇻', countryCode: 'TV', dialCode: '+688' },
  // { name: 'Uganda', flag: '🇺🇬', countryCode: 'UG', dialCode: '+256' },
  // { name: 'Ukraine', flag: '🇺🇦', countryCode: 'UA', dialCode: '+380' },
  { name: 'United Arab Emirates', flag: '🇦🇪', countryCode: 'AE', dialCode: '+971' },
  // { name: 'United Kingdom', flag: '🇬🇧', countryCode: 'GB', dialCode: '+44' },
  // { name: 'United States', flag: '🇺🇸', countryCode: 'US', dialCode: '+1' },
  // { name: 'Uruguay', flag: '🇺🇾', countryCode: 'UY', dialCode: '+598' },
  // { name: 'Uzbekistan', flag: '🇺🇿', countryCode: 'UZ', dialCode: '+998' },
  // { name: 'Vanuatu', flag: '🇻🇺', countryCode: 'VU', dialCode: '+678' },
  // { name: 'Venezuela, Bolivarian Republic of Venezuela', flag: '🇻🇪', countryCode: 'VE', dialCode: '+58' },
  // { name: 'Vietnam', flag: '🇻🇳', countryCode: 'VN', dialCode: '+84' },
  // { name: 'Virgin Islands, British', flag: '🇻🇬', countryCode: 'VG', dialCode: '+1284' },
  // { name: 'Virgin Islands, U.S.', flag: '🇻🇮', countryCode: 'VI', dialCode: '+1340' },
  // { name: 'Wallis and Futuna', flag: '🇼🇫', countryCode: 'WF', dialCode: '+681' },
  // { name: 'Yemen', flag: '🇾🇪', countryCode: 'YE', dialCode: '+967' },
  // { name: 'Zambia', flag: '🇿🇲', countryCode: 'ZM', dialCode: '+260' },
  // { name: 'Zimbabwe', flag: '🇿🇼', countryCode: 'ZW', dialCode: '+263' },
];


export const countryCodeToCountry = (dialCode: string): Country => {
  const foundCountry = COUNTRIES?.find((item) => item?.dialCode?.trim() === dialCode?.toString()?.trim())
  return foundCountry as Country
}