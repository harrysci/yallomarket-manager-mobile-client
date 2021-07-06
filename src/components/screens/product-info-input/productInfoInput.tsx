import React from 'react';
import { View, ScrollView } from 'react-native';
import useEventTargetValue from '../../../utils/hooks/useEventTargetValue';

/* 사용자 정의 organisms 컴포넌트 Import */
import InputTextBoxWithLabel from '../../organisms/product-info-input/input-text-box-with-label/InputTextBoxWithLabel';
import InputDescriptionBoxWithLabel from '../../organisms/product-info-input/input-description-box-with-label/InputDescriptionBoxWithLabel';
import CheckBoxGroupWithLabel from '../../organisms/product-info-input/check-box-group/CheckBoxGroupWithLabel';
import CategoryBottomSheet from '../../organisms/product-info-input/category-bottom-sheet/CategoryBottomSheet';
import CategoryOpenButtonWithLabel from '../../organisms/product-info-input/open-button-with-label/CategoryOpenButtonWithLabel';
import FinishButton from '../../atoms/button/finish-or-update-button/FinishButton';
import DividerWithInterval from '../../atoms/divider/divider-with-interval/DividerWithInterval';

/* style 파일 Import */
import productInfoStyle from './productInfoInput.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';

const LIST_WIDTH = '87.5%';

/**
 * @example 상품 정보 입력 페이지 stack param 예시
 * const routeParams: ProductInfoInputStackParams = {
		mode: 'update',
		initBarcode: '123123123123',
		initProductName: '적양배추',
		initCurrentPrice: 3120,
		initCategory: '신선식품',
		initOpenData: '2021-07-06',
		initVolume: 400,
		initProductOrigin: '부산광역시',
		initOriginPrice: 4620,
		initProductDescription: '개맛있는 적양배추',
	};
 */

/**
 * @name 상품_정보_입력_화면
 * @returns JSX.Element
 */
function ProductInfoInput(): JSX.Element {
	/**
	 * @name 네비게이션_route_param_핸들러
	 */
	const route = useRoute<RouteProp<StackParamList, '상품 정보 입력'>>();

	/**
	 * @name 상품_코드_핸들러
	 */
	const barcodeInput = useEventTargetValue(route.params.initBarcode);

	/**
	 * @name 상품명_핸들러
	 */
	const productNameInput = useEventTargetValue(route.params.initProductName);

	/**
	 * @name 판매가_핸들러
	 */
	const currentPriceInput = useEventTargetValue(
		route.params.initCurrentPrice ? String(route.params.initCurrentPrice) : '',
	);

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
	const openDateInput = useEventTargetValue(route.params.initOpenData);

	/**
	 * @name 상품_규격_핸들러
	 */
	const volumeInput = useEventTargetValue(
		route.params.initVolume ? String(route.params.initVolume) : '',
	);

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
	const productOriginInput = useEventTargetValue(route.params.initProductOrigin);

	/**
	 * @name 원가_핸들러
	 */
	const originPriceInput = useEventTargetValue(
		route.params.initOriginPrice ? String(route.params.initOriginPrice) : '',
	);

	/**
	 * @name 상품설명_핸들러
	 */
	const productDescription = useEventTargetValue(
		route.params.initProductDescription
			? route.params.initProductDescription
			: '신선제품의 특성상 상품의 중량의 3% 내외의 차이가 발생할 수 있습니다.',
	);

	return (
		<ScrollView
			style={productInfoStyle.root}
			contentContainerStyle={productInfoStyle.rootContainer}
			showsVerticalScrollIndicator={false}
		>
			<CategoryBottomSheet
				isVisiable={open}
				handleClose={() => setOpen(false)}
				categoryArray={category}
				handleCategoryIndex={handleCategoryIndex}
			/>

			<View style={{ width: LIST_WIDTH, marginTop: 45 }}>
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

			<View style={{ width: LIST_WIDTH, marginBottom: 45 }}>
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
					defaultDescription={
						'신선제품의 특성상 상품의 중량의 3% 내외의 차이가 발생할 수 있습니다.'
					}
				/>
				<FinishButton
					title={route.params.mode === 'regist' ? '등록하기' : '수정하기'}
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
