import React, {type PropsWithChildren} from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import Colors from '../../shared/styles/colors';
import { AwesomeTypescaleKey } from '../../types';
import { typescale } from '../../styles/tokens';


const AwesomeText : React.FC<
	PropsWithChildren<{
		style?: StyleProp<TextStyle>
		variant?: keyof typeof AwesomeTypescaleKey
	}>
> = ({children, style, variant}) => {
	const stylesForVariant = pickDefaultStyle(variant);

	return (
		<Text style={[defaultStyle, stylesForVariant, style]}>{children}</Text>
	);
}

const pickDefaultStyle = (variant) => {
	if (!variant) {
		return {};
	}

	return typescale[variant];
}

const defaultStyle: StyleProp<TextStyle> = {
	color: Colors.foreground
}

export default AwesomeText;