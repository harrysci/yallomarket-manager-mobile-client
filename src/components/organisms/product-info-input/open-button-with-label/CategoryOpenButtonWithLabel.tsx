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
	isSaveMode: boolean;
}

/**
 * @name 카테고리_바텀시트_open_버튼_컴포넌트
 * @param props CategoryOpenButtonWithLabelProps
 * @returns JSX.Element
 */
const CategoryOpenButtonWithLabel = (props: CategoryOpenButtonWithLabelProps): JSX.Element => {
	const { title, isNecessary, value, handleOpen, isSaveMode } = props;

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

			{!isSaveMode && (
				<Text
					style={{
						fontSize: 12,
						color: 'red',
						marginTop: 4,
						marginLeft: 2,
					}}
				>
					이미 등록된 상품의 카테고리는 수정 할 수 없습니다.
				</Text>
			)}
		</View>
	);
};

export default CategoryOpenButtonWithLabel;
