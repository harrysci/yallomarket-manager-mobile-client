import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

import style from './CategoryListItem.style';

export interface CategoryListItemProps {
	title: string;
	isSelected: boolean;
	handleCategoryIndex: (newNumebr: number) => void;
	currIndex: number;
}

/**
 * @name 카테고리선택_바텀시트_리스트_아이템_Atom_컴포넌트
 * @param props CategoryListItemProps
 * @returns JSX.Element
 */
const CategoryListItem = (props: CategoryListItemProps): JSX.Element => {
	const { title, isSelected, handleCategoryIndex, currIndex } = props;

	return (
		<TouchableOpacity
			style={isSelected ? style.selectedTouchArea : style.notSelectedTouchArea}
			onPress={() => {
				handleCategoryIndex(currIndex);
			}}
		>
			<Text style={style.text}>{title}</Text>
			{isSelected ? (
				<Image
					source={require('../../../../assets/images/product-info-input/selected-check.png')}
					style={style.image}
				/>
			) : (
				<Image
					source={require('../../../../assets/images/product-info-input/gray-check.png')}
					style={style.image}
				/>
			)}
		</TouchableOpacity>
	);
};

export default CategoryListItem;
