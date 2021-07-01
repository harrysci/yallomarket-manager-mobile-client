import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Input, Button, Image, BottomSheet } from 'react-native-elements';
import useEventTargetValue from '../../../../utils/hooks/useEventTargetValue';

interface InputTextBoxWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void;
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
	const categoryInput = useEventTargetValue();
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
			<CategoryBottomSheet isVisiable={open} handleClose={() => setOpen(false)} />

			<View style={{ width: '87.5%' }}>
				<InputTextBoxWithLabel
					title={'바코드'}
					isNecessary={true}
					value={barcodeInput.value}
					handleChange={barcodeInput.handleChange}
				/>
				<InputTextBoxWithLabel
					title={'상품명'}
					isNecessary={true}
					value={productNameInput.value}
					handleChange={productNameInput.handleChange}
				/>
				<InputTextBoxWithLabel
					title={'상품 현재 판매가'}
					isNecessary={true}
					value={currentPriceInput.value}
					handleChange={currentPriceInput.handleChange}
				/>
				<Button title="open" onPress={() => setOpen(true)} />

				<InputTextBoxWithLabel
					title={'상품 카테고리'}
					isNecessary={true}
					value={categoryInput.value}
					handleChange={categoryInput.handleChange}
				/>
				<InputTextBoxWithLabel
					title={'얄로마켓 시스템 내 상품 게시일'}
					isNecessary={true}
					value={openDateInput.value}
					handleChange={openDateInput.handleChange}
				/>
				<InputTextBoxWithLabel
					title={'규격'}
					isNecessary={true}
					value={volumeInput.value}
					handleChange={volumeInput.handleChange}
				/>

				<CheckBoxGroupWithLabel
					title={'판매 가능 여부'}
					isNecessary={true}
					isPossible={availableForSale}
					callBack={() => handleAvailableForSale()}
				/>
			</View>

			<DividerWithInterval />

			<View style={{ width: '87.5%' }}>
				<InputTextBoxWithLabel
					title={'매입처'}
					isNecessary={false}
					value={productOriginInput.value}
					handleChange={productOriginInput.handleChange}
				/>
				<InputTextBoxWithLabel
					title={'상품 매입 원가'}
					isNecessary={false}
					value={originPriceInput.value}
					handleChange={originPriceInput.handleChange}
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
							categoryInput.value,
							openDateInput.value,
							volumeInput.value,
							availableForSale,
							productOriginInput.value,
							productDescription.value,
						)
					}
				/>
			</View>
		</ScrollView>
	);
}

export default ProductInfoInput;

const FinishButton = (props: FinishButtonProps) => {
	const { title, callBack } = props;
	return (
		<Button
			title={title}
			style={{}}
			containerStyle={{
				marginBottom: 24,
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
				width: 78,
				height: 18,
				// fontFamily: "AppleSDGothicNeo",
				fontSize: 18,
				fontWeight: '500',
				fontStyle: 'normal',
				letterSpacing: 0,
				textAlign: 'center',
				color: '#000000',
			}}
			onPress={callBack}
		/>
	);
};

const CategoryBottomSheet = (props: any) => {
	const { isVisiable, handleClose } = props;
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
					<Button title="close" onPress={handleClose} />
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
						}}
					>
						상품 카테고리
					</Text>

					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: 328,
							height: 32,
							// opacity: 0.12,
							borderRadius: 3,
							padding: 12,
							// backgroundColor: '#ffd02e',
						}}
					>
						<Text>저울 상품</Text>
						<Image
							source={require('../../../../assets/images/product-info-input/selected-check.png')}
							style={{
								width: 24,
								height: 24,
							}}
						/>
					</TouchableOpacity>

					<Button
						title={'카테고리 선택 완료'}
						style={{}}
						containerStyle={{
							marginBottom: 24,
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
						// onPress={callBack}
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
					borderRadius: 6,
					backgroundColor: '#ffffff',
					borderStyle: 'solid',
					borderWidth: 1.5,
					borderColor: '#e2e2e2',
					marginRight: 6,
				}}
			>
				{state ? (
					<Image
						// source={{ uri: './images/product-info-input/checked.png' }}
						source={require('../../../../assets/images/product-info-input/checked.png')}
						style={{
							width: 24,
							height: 24,
						}}
					/>
				) : (
					<View style={{ width: 24, height: 24 }} />
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
						fontSize: 18,
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
						fontSize: 18,
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

			<Input
				value={value}
				onChange={handleChange}
				inputContainerStyle={{
					width: 327,
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
	const { title, isNecessary, value, handleChange } = props;
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
						fontSize: 18,
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

			<Input
				value={value}
				onChange={handleChange}
				inputContainerStyle={{
					width: 327,
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
					lineHeight: 23,
					letterSpacing: 0,
					textAlign: 'left',
					color: '#3c3c3c',
				}}
			/>
		</View>
	);
};
