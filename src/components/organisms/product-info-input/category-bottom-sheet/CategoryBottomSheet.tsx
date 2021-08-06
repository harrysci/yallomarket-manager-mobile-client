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

/**
 * @name 카테고리선택_바텀시트_컴포넌트
 * @param props CategoryBottomSheetProps
 * @returns
 */
const CategoryBottomSheet = (props: CategoryBottomSheetProps): JSX.Element => {
	const { isVisiable, handleClose, handleCategoryIndex, categoryArray } = props;

	/* 선택가능한 상품 카테고리 배열 */
	const [arr, setArr] = React.useState(categoryArray);

	/* 선택된 상품 카테고리 핸들러 */
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
					{/* 상품 카테고리 선택 바텀 시트 Close 버튼 */}
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
									key={eachCategory + String(index)}
								/>
							);
						})}

					{/* 카테고리 선택 완료 버튼 */}
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
