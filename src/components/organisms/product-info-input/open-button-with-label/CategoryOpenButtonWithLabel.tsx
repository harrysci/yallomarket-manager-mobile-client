import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

import StyledLabel from '../../../atoms/text/styled-label/StyledLabel';

import style from './CategoryOpenButtonWithLabel.style';

export interface CategoryOpenButtonWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleOpen: () => void;
}

/**
 * @name 카테고리_바텀시트_open_버튼_컴포넌트
 * @param props CategoryOpenButtonWithLabelProps
 * @returns JSX.Element
 */
const CategoryOpenButtonWithLabel = (props: CategoryOpenButtonWithLabelProps): JSX.Element => {
	const { title, isNecessary, value, handleOpen } = props;

	return (
		<View style={style.root}>
			<StyledLabel title={title} isNecessary={isNecessary} />

			<TouchableOpacity style={style.touchArea} onPress={handleOpen}>
				<Text style={style.text}>{value}</Text>

				<Image
					source={require('../../../../assets/images/product-info-input/arrow-down-black.png')}
					style={style.image}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default CategoryOpenButtonWithLabel;
