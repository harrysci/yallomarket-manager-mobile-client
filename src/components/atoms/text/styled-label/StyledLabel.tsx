import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import style from './StyledLabel.style';

export interface StyledLabelProps {
	title: string;
	isNecessary: boolean;
}

/**
 * @name 상품정보_입력창_label_Atom_컴포넌트
 * @param props StyledLabelProps
 * @returns JSX.Element
 */
const StyledLabel = (props: StyledLabelProps): JSX.Element => {
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
