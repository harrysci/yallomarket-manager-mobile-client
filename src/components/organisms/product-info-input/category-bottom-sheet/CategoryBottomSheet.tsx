import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button, Image, BottomSheet } from 'react-native-elements';

import CategoryListItem from '../../../atoms/list/category-list-item/CategoryListItem';

import style from './CategoryBottomSheet.style';

export interface CategoryBottomSheetProps {
	isVisiable: boolean;
	handleClose: () => void;
	handleCategoryIndex: (param: number) => void;
	categoryArray: Array<string>;
}

const CategoryBottomSheet = (props: CategoryBottomSheetProps) => {
	const { isVisiable, handleClose, handleCategoryIndex, categoryArray } = props;

	const [arr, setArr] = React.useState(categoryArray);
	const [selectedItemIndex, setSelectedListItemIndex] = React.useState(0);
	const handleSelectedItemIndex = (newIndex: number) => {
		setSelectedListItemIndex(newIndex);
	};

	return (
		<BottomSheet
			isVisible={isVisiable}
			modalProps={{
				transparent: true,
				animationType: 'slide',
			}}
		>
			<View style={style.rootContainer}>
				<View>
					<TouchableOpacity style={style.touchArea} onPress={handleClose}>
						<Image
							source={require('../../../../assets/images/product-info-input/arrow-down.png')}
							style={style.image}
						/>
					</TouchableOpacity>
					<Text style={style.text}>상품 카테고리</Text>

					{arr &&
						arr.map((eachCategory, index) => {
							return (
								<CategoryListItem
									title={eachCategory}
									isSelected={arr[selectedItemIndex] === eachCategory}
									handleCategoryIndex={handleSelectedItemIndex}
									currIndex={index}
								/>
							);
						})}

					<Button
						title={'카테고리 선택 완료'}
						containerStyle={style.buttonContainer}
						buttonStyle={style.button}
						titleStyle={style.buttonTitle}
						onPress={() => {
							handleCategoryIndex(selectedItemIndex);
							handleClose();
						}}
					/>
				</View>
			</View>
		</BottomSheet>
	);
};

export default CategoryBottomSheet;
