import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import StyledLabel from '../../text/styled-label/StyledLabel';

import style from './CategoryOpenButtonWithLabel.style';

export interface CategoryOpenButtonWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleOpen: () => void;
}

const CategoryOpenButtonWithLabel = (props: CategoryOpenButtonWithLabelProps) => {
	const { title, isNecessary, value, handleOpen } = props;

	return (
		<View style={style.root}>
			<StyledLabel title={title} isNecessary={isNecessary} />

			<TouchableOpacity style={style.touchArea} onPress={handleOpen}>
				<Text style={style.text}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CategoryOpenButtonWithLabel;
