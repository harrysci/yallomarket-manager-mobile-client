import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Input, Button, Image, BottomSheet } from 'react-native-elements';
import useEventTargetValue from '../../../../utils/hooks/useEventTargetValue';

interface InputTextBoxWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void;
	inputType: 'numeric' | 'date' | 'any' | 'currency';
	rightIconType?: 'won' | 'gram';
}
interface InputDescriptionBoxWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void;
}
interface FinishButtonProps {
	title: string;
	callBack: any;
	isAvaliable: boolean;
}
interface CheckBoxProps {
	title: string;
	state: boolean;
	callBack: any;
}
interface CheckBoxGroupWithLabelProps {
	title: string;
	isNecessary: boolean;
	isPossible: boolean;
	callBack: any;
}
interface CategoryListItemProps {
	title: string;
	isSelected: boolean;
	handleCategoryIndex: (newNumebr: number) => void;
	currIndex: number;
}
interface CategoryBottomSheetProps {
	isVisiable: boolean;
	handleClose: () => void;
	handleCategoryIndex: (param: number) => void;
	categoryArray: Array<string>;
}
interface CategoryOpenButtonWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleOpen: () => void;
}

const LIST_WIDTH = '87.5%';

function ProductInfoInput() {
	/**
	 * @name 상품_코드_핸들러
	 */
	const barcodeInput = useEventTargetValue();

	/**
	 * @name 상품명_핸들러
	 */
	const productNameInput = useEventTargetValue();

	/**
	 * @name 판매가_핸들러
	 */
	const currentPriceInput = useEventTargetValue();

	/**
	 * @name 상품_카테고리_핸들러
	 */
	const [category] = React.useState<Array<string>>(['저울상품', '가공상품']);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
	const handleCategoryIndex = (newIndex: number) => {
		setSelectedCategoryIndex(newIndex);
	};

	/**
	 * @name 카테고리선택_BottomSheet_핸들러
	 */
	const [open, setOpen] = React.useState(false);

	/**
	 * @name 상품_판매_게시일_핸들러
	 */
	const openDateInput = useEventTargetValue();

	/**
	 * @name 상품_규격_핸들러
	 */
	const volumeInput = useEventTargetValue();

	/**
	 * @name 상품_판매_가능_체크박스_핸들러
	 */
	const [availableForSale, setAvailableForSale] = React.useState<boolean>(true);
	const handleAvailableForSale = () => {
		setAvailableForSale(!availableForSale);
	};

	/**
	 * @name 매입처_핸들러
	 */
	const productOriginInput = useEventTargetValue();

	/**
	 * @name 원가_핸들러
	 */
	const originPriceInput = useEventTargetValue();

	/**
	 * @name 상품설명_핸들러
	 */
	const productDescription = useEventTargetValue();

	return (
		<ScrollView
			style={{
				flex: 1,
				width: '100%',
				flexDirection: 'column',
			}}
			contentContainerStyle={{
				alignItems: 'center',
			}}
			showsVerticalScrollIndicator={false}
		>
			<CategoryBottomSheet
				isVisiable={open}
				handleClose={() => setOpen(false)}
				categoryArray={category}
				handleCategoryIndex={handleCategoryIndex}
			/>

			<View style={{ width: LIST_WIDTH }}>
				<InputTextBoxWithLabel
					title={'바코드'}
					isNecessary={true}
					value={barcodeInput.value}
					handleChange={barcodeInput.handleChange}
					inputType="numeric"
				/>
				<InputTextBoxWithLabel
					title={'상품명'}
					isNecessary={true}
					value={productNameInput.value}
					handleChange={productNameInput.handleChange}
					inputType="any"
				/>
				<InputTextBoxWithLabel
					title={'상품 현재 판매가'}
					isNecessary={true}
					value={currentPriceInput.value}
					handleChange={
						currentPriceInput.handleChangeCurrencyNumber
							? currentPriceInput.handleChangeCurrencyNumber
							: currentPriceInput.handleChange
					}
					inputType="numeric"
					rightIconType="won"
				/>
				<CategoryOpenButtonWithLabel
					title={'상품 카테고리'}
					isNecessary={true}
					value={category[selectedCategoryIndex]}
					handleOpen={() => setOpen(true)}
				/>
				<InputTextBoxWithLabel
					title={'얄로마켓 시스템 내 상품 게시일'}
					isNecessary={true}
					value={openDateInput.value}
					handleChange={openDateInput.handleChange}
					inputType="date"
				/>
				<InputTextBoxWithLabel
					title={'규격'}
					isNecessary={true}
					value={volumeInput.value}
					handleChange={volumeInput.handleChange}
					inputType="numeric"
					rightIconType="gram"
				/>

				<CheckBoxGroupWithLabel
					title={'판매 가능 여부'}
					isNecessary={true}
					isPossible={availableForSale}
					callBack={() => handleAvailableForSale()}
				/>
			</View>

			<DividerWithInterval />

			<View style={{ width: LIST_WIDTH }}>
				<InputTextBoxWithLabel
					title={'매입처'}
					isNecessary={false}
					value={productOriginInput.value}
					handleChange={productOriginInput.handleChange}
					inputType="any"
				/>
				<InputTextBoxWithLabel
					title={'상품 매입 원가'}
					isNecessary={false}
					value={originPriceInput.value}
					handleChange={
						originPriceInput.handleChangeCurrencyNumber
							? originPriceInput.handleChangeCurrencyNumber
							: originPriceInput.handleChange
					}
					inputType="numeric"
					rightIconType="won"
				/>
				<InputDescriptionBoxWithLabel
					title={'상품 설명'}
					isNecessary={false}
					value={productDescription.value}
					handleChange={productDescription.handleChange}
				/>
				<FinishButton
					title={'등록하기'}
					callBack={() =>
						console.log(
							barcodeInput.value,
							productNameInput.value,
							currentPriceInput.value,
							category[selectedCategoryIndex],
							openDateInput.value,
							volumeInput.value,
							availableForSale,
							productOriginInput.value,
							productDescription.value,
						)
					}
					isAvaliable={
						barcodeInput.value.length > 0 &&
						productNameInput.value.length > 0 &&
						currentPriceInput.value.length > 0 &&
						category[selectedCategoryIndex].length > 0 &&
						openDateInput.value.length > 0 &&
						volumeInput.value.length > 0
					}
				/>
			</View>
		</ScrollView>
	);
}

export default ProductInfoInput;

const FinishButton = (props: FinishButtonProps) => {
	const { title, callBack, isAvaliable } = props;
	return (
		<Button
			title={title}
			style={{}}
			containerStyle={{
				marginBottom: 24,
				width: '100%',
			}}
			buttonStyle={{
				height: 48,
				borderRadius: 3,
				backgroundColor: isAvaliable ? '#fbd145' : '#ededed',
				borderStyle: 'solid',
				borderWidth: 1,
				borderColor: '#000000',
			}}
			titleStyle={{
				width: 78,
				height: 18,
				// fontFamily: "AppleSDGothicNeo",
				fontSize: 18,
				fontWeight: '500',
				fontStyle: 'normal',
				letterSpacing: 0,
				textAlign: 'center',
				color: isAvaliable ? '#000000' : '#707070',
			}}
			onPress={callBack}
			disabled={!isAvaliable}
		/>
	);
};

const CategoryOpenButtonWithLabel = (props: CategoryOpenButtonWithLabelProps) => {
	const { title, isNecessary, value, handleOpen } = props;

	return (
		<View
			style={{
				marginBottom: 24,
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					marginBottom: 6,
				}}
			>
				{isNecessary ? (
					<Text
						style={{
							height: 21,
							// fontFamily: 'AppleSDGothicNeo',
							fontSize: 20,
							fontWeight: '600',
							fontStyle: 'normal',
							lineHeight: 21,
							letterSpacing: -0.58,
							textAlign: 'left',
							color: '#000000',
						}}
					>
						{title}
					</Text>
				) : (
					<Text
						style={{
							width: 110,
							height: 24,
							opacity: 0.73,
							// fontFamily: "AppleSDGothicNeo",
							fontSize: 20,
							fontWeight: '500',
							fontStyle: 'normal',
							lineHeight: 24,
							letterSpacing: -0.64,
							textAlign: 'left',
							color: '#000000',
						}}
					>
						{title}
					</Text>
				)}

				{isNecessary && (
					<Text
						style={{
							width: 9,
							height: 21,
							// fontFamily: 'AppleSDGothicNeo',
							fontSize: 23,
							fontWeight: 'normal',
							fontStyle: 'normal',
							lineHeight: 23,
							letterSpacing: 0,
							textAlign: 'right',
							color: '#ff0000',
						}}
					>
						*
					</Text>
				)}
			</View>

			<TouchableOpacity
				style={{
					width: '100%',
					height: 50,
					borderRadius: 9,
					backgroundColor: '#ffffff',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#d5d5d5',
					alignSelf: 'center',
					paddingLeft: 12,
					justifyContent: 'center',
				}}
				onPress={handleOpen}
			>
				<Text
					style={{
						width: 83,
						// height: 29,
						// fontFamily: 'AppleSDGothicNeo',
						fontSize: 22,
						fontWeight: 'normal',
						fontStyle: 'normal',
						// lineHeight: 28,
						letterSpacing: 0,
						textAlign: 'left',
						color: '#3c3c3c',
					}}
				>
					{value}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const CategoryListItem = (props: CategoryListItemProps) => {
	const { title, isSelected, handleCategoryIndex, currIndex } = props;

	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				width: 328,
				height: 32,
				borderRadius: 3,
				paddingLeft: 12,
				paddingRight: 12,
				backgroundColor: isSelected ? 'rgba(255, 208, 46, 0.12)' : '#ffff',
				alignItems: 'center',
				marginBottom: 4,
			}}
			onPress={() => {
				handleCategoryIndex(currIndex);
			}}
		>
			<Text
				style={{
					height: 19,
					// fontFamily: 'AppleSDGothicNeo',
					fontSize: 16,
					fontWeight: '600',
					fontStyle: 'normal',
					lineHeight: 19,
					letterSpacing: 0,
					textAlign: 'left',
					color: '#000000',
				}}
			>
				{title}
			</Text>
			{isSelected ? (
				<Image
					source={require('../../../../assets/images/product-info-input/selected-check.png')}
					style={{
						width: 24,
						height: 24,
					}}
				/>
			) : (
				<Image
					source={require('../../../../assets/images/product-info-input/selected-check.png')}
					style={{
						width: 24,
						height: 24,
					}}
				/>
			)}
		</TouchableOpacity>
	);
};

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
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					height: 263,
					borderRadius: 13,
					backgroundColor: '#ffffff',
				}}
			>
				<View>
					<TouchableOpacity
						style={{
							alignItems: 'center',
							marginTop: 8,
							height: 12,
							marginBottom: 16,
						}}
						onPress={handleClose}
					>
						<Image
							source={require('../../../../assets/images/product-info-input/arrow-down.png')}
							style={{
								width: 21,
								height: 8,
							}}
						/>
					</TouchableOpacity>
					<Text
						style={{
							width: 109,
							height: 24,
							// fontFamily: "AppleSDGothicNeo",
							fontSize: 20,
							fontWeight: 'bold',
							fontStyle: 'normal',
							lineHeight: 24,
							letterSpacing: 0,
							textAlign: 'left',
							color: '#000000',
							marginBottom: 18,
						}}
					>
						상품 카테고리
					</Text>

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
						style={{}}
						containerStyle={{
							marginBottom: 24,
							marginTop: 28,
						}}
						buttonStyle={{
							width: 327,
							height: 48,
							borderRadius: 3,
							backgroundColor: '#fbd145',
							borderStyle: 'solid',
							borderWidth: 1,
							borderColor: '#000000',
						}}
						titleStyle={{
							// fontFamily: "AppleSDGothicNeo",
							fontSize: 18,
							fontWeight: '500',
							fontStyle: 'normal',
							letterSpacing: 0,
							textAlign: 'center',
							color: '#000000',
						}}
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

const CheckBox = (props: CheckBoxProps) => {
	const { title, state, callBack } = props;
	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-end',
				marginBottom: 24,
				marginRight: 24,
			}}
			onPress={callBack}
		>
			<View
				style={{
					width: 25,
					height: 25,
					marginRight: 6,
				}}
			>
				{state ? (
					<Image
						// source={{ uri: './images/product-info-input/checked.png' }}
						source={require('../../../../assets/images/product-info-input/selected-radio.png')}
						style={{
							width: 24,
							height: 24,
						}}
					/>
				) : (
					<Image
						// source={{ uri: './images/product-info-input/checked.png' }}
						source={require('../../../../assets/images/product-info-input/not-selected-radio.png')}
						style={{
							width: 24,
							height: 24,
						}}
					/>
				)}
			</View>

			<Text
				style={{
					width: 35,
					height: 24,
					// fontFamily: 'AppleSDGothicNeo',
					fontSize: 20,
					fontWeight: 'normal',
					fontStyle: 'normal',
					lineHeight: 23,
					letterSpacing: 0,
					textAlign: 'left',
					color: '#000000',
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const CheckBoxGroupWithLabel = (props: CheckBoxGroupWithLabelProps) => {
	const { title, isNecessary, isPossible, callBack } = props;
	return (
		<View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					marginBottom: 6,
				}}
			>
				<Text
					style={{
						height: 21,
						// fontFamily: 'AppleSDGothicNeo',
						fontSize: 20,
						fontWeight: '600',
						fontStyle: 'normal',
						lineHeight: 21,
						letterSpacing: -0.58,
						textAlign: 'left',
						color: '#000000',
					}}
				>
					{title}
				</Text>
				{isNecessary && (
					<Text
						style={{
							width: 9,
							height: 21,
							// fontFamily: 'AppleSDGothicNeo',
							fontSize: 23,
							fontWeight: 'normal',
							fontStyle: 'normal',
							lineHeight: 23,
							letterSpacing: 0,
							textAlign: 'right',
							color: '#ff0000',
						}}
					>
						*
					</Text>
				)}
			</View>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'flex-end',
				}}
			>
				<CheckBox title={'가능'} state={isPossible} callBack={callBack} />
				<CheckBox title={'품절'} state={!isPossible} callBack={callBack} />
			</View>
		</View>
	);
};

const DividerWithInterval = () => {
	return (
		<View
			style={{
				width: '100%',
				height: 8,
				opacity: 1,
				backgroundColor: '#f4f4f4',
				marginBottom: 16,
			}}
		/>
	);
};

const InputDescriptionBoxWithLabel = (props: InputDescriptionBoxWithLabelProps) => {
	const { title, isNecessary, value, handleChange } = props;

	return (
		<View style={{}}>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					marginBottom: 6,
				}}
			>
				{isNecessary ? (
					<Text
						style={{
							height: 21,
							// fontFamily: 'AppleSDGothicNeo',
							fontSize: 20,
							fontWeight: '600',
							fontStyle: 'normal',
							lineHeight: 21,
							letterSpacing: -0.58,
							textAlign: 'left',
							color: '#000000',
						}}
					>
						{title}
					</Text>
				) : (
					<Text
						style={{
							width: 110,
							height: 24,
							opacity: 0.73,
							// fontFamily: "AppleSDGothicNeo",
							fontSize: 20,
							fontWeight: '500',
							fontStyle: 'normal',
							lineHeight: 24,
							letterSpacing: -0.64,
							textAlign: 'left',
							color: '#000000',
						}}
					>
						{title}
					</Text>
				)}
				{isNecessary && (
					<Text
						style={{
							width: 9,
							height: 21,
							// fontFamily: 'AppleSDGothicNeo',
							fontSize: 23,
							fontWeight: 'normal',
							fontStyle: 'normal',
							lineHeight: 23,
							letterSpacing: 0,
							textAlign: 'right',
							color: '#ff0000',
						}}
					>
						*
					</Text>
				)}
			</View>

			<Input
				value={value}
				onChange={handleChange}
				containerStyle={{ paddingHorizontal: 0 }}
				inputContainerStyle={{
					minHeight: 120,
					borderRadius: 9,
					backgroundColor: '#ffffff',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#d5d5d5',
					alignSelf: 'center',
					padding: 12,
				}}
				inputStyle={{
					width: 83,
					minHeight: 29,
					// fontFamily: 'AppleSDGothicNeo',
					fontSize: 22,
					fontWeight: 'normal',
					fontStyle: 'normal',
					lineHeight: 23,
					letterSpacing: 0,
					textAlign: 'left',
					color: '#3c3c3c',
				}}
				multiline={true}
				maxLength={500}
				numberOfLines={4}
			/>
		</View>
	);
};

const InputTextBoxWithLabel = (props: InputTextBoxWithLabelProps) => {
	const numericReg = /^\d+$/;
	const reg = {
		pattern: new RegExp(''),
	};

	const { title, isNecessary, value, handleChange, inputType, rightIconType } = props;

	if (inputType === 'numeric') {
		reg.pattern = numericReg;
	} else if (inputType === 'currency') {
		reg.pattern = numericReg;
	}

	const handleRightIcon = (rightIconType: 'won' | 'gram' | undefined) => {
		if (rightIconType === 'won') {
			return (
				<Image
					// source={{ uri: './images/product-info-input/checked.png' }}
					source={require('../../../../assets/images/product-info-input/won-mark.png')}
					style={{
						width: 23,
						height: 32,
						marginRight: 4,
					}}
				/>
			);
		} else if (rightIconType === 'gram') {
			return (
				<Image
					// source={{ uri: './images/product-info-input/checked.png' }}
					source={require('../../../../assets/images/product-info-input/g-mark.png')}
					style={{
						width: 13,
						height: 32,
						marginRight: 4,
					}}
				/>
			);
		} else {
			return undefined;
		}
	};

	return (
		<View
			style={{
				marginBottom: 8,
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					marginBottom: 6,
				}}
			>
				{isNecessary ? (
					<Text
						style={{
							height: 21,
							// fontFamily: 'AppleSDGothicNeo',
							fontSize: 20,
							fontWeight: '600',
							fontStyle: 'normal',
							lineHeight: 21,
							letterSpacing: -0.58,
							textAlign: 'left',
							color: '#000000',
						}}
					>
						{title}
					</Text>
				) : (
					<Text
						style={{
							width: 110,
							height: 24,
							opacity: 0.73,
							// fontFamily: "AppleSDGothicNeo",
							fontSize: 20,
							fontWeight: '500',
							fontStyle: 'normal',
							lineHeight: 24,
							letterSpacing: -0.64,
							textAlign: 'left',
							color: '#000000',
						}}
					>
						{title}
					</Text>
				)}

				{isNecessary && (
					<Text
						style={{
							width: 9,
							height: 21,
							// fontFamily: 'AppleSDGothicNeo',
							fontSize: 23,
							fontWeight: 'normal',
							fontStyle: 'normal',
							lineHeight: 23,
							letterSpacing: 0,
							textAlign: 'right',
							color: '#ff0000',
						}}
					>
						*
					</Text>
				)}
			</View>

			<Input
				value={value}
				onChange={handleChange}
				errorMessage={
					!reg.pattern.test(value.replace(/,/g, '')) && value.length > 0
						? '입력값이 올바르지 않습니다.'
						: ''
				}
				rightIcon={handleRightIcon(rightIconType)}
				containerStyle={{ paddingHorizontal: 0 }}
				inputContainerStyle={{
					width: '100%',
					height: 50,
					borderRadius: 9,
					backgroundColor: '#ffffff',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#d5d5d5',
					alignSelf: 'center',
					paddingLeft: 12,
				}}
				inputStyle={{
					width: 83,
					height: 29,
					// fontFamily: 'AppleSDGothicNeo',
					fontSize: 22,
					fontWeight: 'normal',
					fontStyle: 'normal',
					// lineHeight: 23,
					letterSpacing: 0,
					textAlign: 'left',
					color: '#3c3c3c',
				}}
			/>
		</View>
	);
};
