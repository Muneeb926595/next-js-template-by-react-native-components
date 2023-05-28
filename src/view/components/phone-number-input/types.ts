export type Country = {
    name: string,
    flag: string,
    countryCode: string,
    dialCode: string,
}

export type Props = {
    countryItem: Country;
    value: string;
    onTextChanged: (text: string) => void;
    onCountryCodePress: () => void;
    error?: string;
    containerStyles?: any;
};