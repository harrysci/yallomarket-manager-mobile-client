import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import style from './StyledLabel.style';

export interface StyledLabelProps {
	title: string;
	isNecessary: boolean;
}

const StyledLabel = (props: StyledLabelProps) => {
	const { title, isNecessary } = props;

	return (
		<View style={style.root}>
			{isNecessary ? (
				<Text style={style.textNecessary}>{title}</Text>
			) : (
				<Text style={style.textNotNecessary}>{title}</Text>
			)}

			{isNecessary && <Text style={style.point}>*</Text>}
		</View>
	);
};

export default StyledLabel;
