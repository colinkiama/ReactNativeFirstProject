import React from "react";
import { View } from "react-native";
import { AwesomeTypescaleKey } from '../types';
import AwesomeText from "./AwesomeText";
import Colors from '../shared/styles/colors';

interface HeaderProps {
	heading: string,
	subheading: string
}

const Header: React.FC<HeaderProps> = ({heading, subheading}) => {
	return (
		<View style={{ paddingTop: 20, paddingBottom: 24}}>
			<AwesomeText variant={AwesomeTypescaleKey.h1}>{heading}</AwesomeText>
			<AwesomeText variant={AwesomeTypescaleKey.h2} style={{color: Colors.foregroundShade}}>{subheading}</AwesomeText>
		</View>
	)
}

export default Header;