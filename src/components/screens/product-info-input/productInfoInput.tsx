/* eslint-disable @typescript-eslint/no-empty-function */
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
import YellowScreenCenterLoading from '../../atoms/loading/yellowScreenCenterLoading';
import ErrorOverlay from '../../atoms/overlay/ErrorOverlay';

/* style 파일 Import */
import productInfoStyle from './productInfoInput.style';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';
import useAxios from 'axios-hooks';
import { updateBarcodeProductInfoReq } from './dto/updateBarcodeProductInfoReq.dto';
import moment from 'moment';
import { CreateBarcodeProcessedProductReq } from './dto/CreateBarcodeProcessedProductReq.dto';
import { CreateBarcodeWeightedProductReq } from './dto/CreateBarcodeWeightedProductReq.dto';

/* async storage Import */
import AsyncStorage from '@react-native-community/async-storage';

/* screen Layout 상수값 */
const LIST_WIDTH = '87.5%';

/**
 * @example 상품 정보 입력 페이지 stack param 예시
 * const routeParams: ProductInfoInputStackParams = {
		mode: 'update',

		ownerId?: number;
		productId?: number;

		initBarcode: '123123123123',
		initProductName: '적양배추',
		initCurrentPrice: 3120,
		initCategory: '신선식품',
		initOpenData: '2021-07-06',
		initVolume: 400,
		initProductOrigin: '부산광역시',
		initOriginPrice: 4620,
		initProductDescription: '개맛있는 적양배추',

		representativeProductImage?: string; // 대표 이미지
		detailProductImage?: string; // 상세 이미지
		additionalProductImage?: string; // 추가 이미지
	};
 */

/**
 * @name 상품_정보_입력_화면
 * @returns JSX.Element
 */
function ProductInfoInput(): JSX.Element {
	const navigation = useNavigation();
	const { inputCurrencyNumber } = useEventTargetValue();

	const [errorOverlayVisible, setErrorOverlayVisible] = React.useState(false);
	const handleErrorOverlayVisible = (newState: boolean) => {
		setErrorOverlayVisible(newState);
	};

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
		route.params.initCurrentPrice
			? inputCurrencyNumber(String(route.params.initCurrentPrice))
			: '',
	);

	/**
	 * @name 상품_카테고리_핸들러
	 */
	const [category] = React.useState<Array<string>>(['저울상품', '가공상품']);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(
		category.indexOf(route.params.initProductCategory),
	);
	const handleCategoryIndex = (newIndex: number) => {
		setSelectedCategoryIndex(newIndex);
	};

	/**
	 * @name 카테고리선택_BottomSheet_핸들러
	 */
	const [open, setOpen] = React.useState(false);

	/**
	 * @name 상품_판매_게시일_핸들러
	 * 1. 초기값은 route param 이 존재 하는 경우 (update mode) 해당 날짜의 yyyy-mm-dd 포맷 저장
	 * 2. route param 이 없는 경우 (regist mode) 현재 날짜의 yyyy-mm-dd 포맷 저장
	 */
	const openDateInput = useEventTargetValue(
		route.params.initOpenData
			? moment(route.params.initOpenData).format('yyyy/MM/DD')
			: moment(new Date()).format('yyyy/MM/DD'),
	);

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
		route.params.initOriginPrice
			? inputCurrencyNumber(String(route.params.initOriginPrice))
			: '',
	);

	/**
	 * @name 상품설명_핸들러
	 */
	const productDescription = useEventTargetValue(
		route.params.initProductDescription
			? route.params.initProductDescription
			: '신선제품의 특성상 상품의 중량의 3% 내외의 차이가 발생할 수 있습니다.',
	);

	/**
	 * @name 상품_갱신_axios
	 */
	const [{ loading: updateProductLoading }, executeUpdate] = useAxios<any>(
		{
			method: 'PUT',
			url: `/product/updateProductData/${Number(route.params.ownerId)}/${String(
				route.params.initBarcode,
			)}`,
		},
		{ manual: true },
	);

	/**
	 * @name 상품_갱신_axios_요청_핸들러
	 */
	const updateProductInfoButtonHandler = () => {
		if (route.params.mode === 'update' && route.params.productId) {
			const updateProductDataReq: updateBarcodeProductInfoReq = {
				productId: route.params.productId,
				productIsProcessed: selectedCategoryIndex === 1 ? true : false,
				productBarcode: barcodeInput.value,
				productName: productNameInput.value,
				productCurrentPrice: Number(currentPriceInput.value.replace(/,/g, '')),
				productCategory: category[selectedCategoryIndex],
				productCreatedAt: new Date(openDateInput.value),
				productVolume: volumeInput.value,
				productIsSoldout: !availableForSale,
				productOriginPrice: Number(originPriceInput.value.replace(/,/g, '')),
				productDescription: productDescription.value,
			};

			/* executeUpdate 를 통한 update axios 요청부 */
			executeUpdate({
				data: updateProductDataReq,
			})
				.then(() => {
					if (route.params.handleUpdateCompleteOverlay) {
						route.params.handleUpdateCompleteOverlay();
						navigation.navigate('메인화면');
					}
				})
				.catch(err => {
					// console.log('executeUpdate failed');
					console.log(err);
				});
		} else {
			/* route param mode 오류 발생 시 예외 처리 */
		}
	};

	/**
	 * @name 이미지파일추가_Form_data_생성_핸들러
	 * @param obj 서버로 저장요청 할 데이터 Object
	 * @returns axios form data 형태로 포맷팅된 데이터 (image files 포함)
	 */
	const handleGetImgFromAsyncStorage = async (
		obj: CreateBarcodeProcessedProductReq | CreateBarcodeWeightedProductReq | any,
	) => {
		/* 이미지 파일의 형태 */
		type ImageFile = {
			uri: string | null;
			type: 'image/jpg';
			name: 'repImage.jpg' | 'detailImage.jpg';
		};
		/* async storage 로 부터 이미지 파일 cache 추출 */
		const repImgUrl = await AsyncStorage.getItem('imgUrl');
		const detailImgUrl = await AsyncStorage.getItem('detailImgUrl');

		if (!repImgUrl || !detailImgUrl || repImgUrl.length <= 0 || detailImgUrl.length <= 0) {
			throw new Error();
		}

		/* form data 생성 */
		const formData = new FormData();

		/* 이미지 파일로 변환 */
		const repImageFile: ImageFile = {
			uri: repImgUrl,
			type: 'image/jpg',
			name: 'repImage.jpg',
		};
		const detailImageFile: ImageFile = {
			uri: detailImgUrl,
			type: 'image/jpg',
			name: 'detailImage.jpg',
		};

		/* 이미지 파일 form data 에 Multer File Blob Array 로 추가 */
		formData.append('images', repImageFile);
		formData.append('images', detailImageFile);

		/* 이미지를 제외한 기존 입력 데이터를 추가 */
		formData.append('productData', JSON.stringify(obj));

		return formData;
	};

	/**
	 * @name 가공상품_생성_axios
	 * ownerId 가 더미인 상태, context 를 통해 받아오도록 수정
	 */
	const [{ loading: saveProcessedProductLoading }, executeSaveProcessedProduct] = useAxios<any>(
		{
			method: 'POST',
			url: `/product/createProcessedProduct/${Number(route.params.ownerId)}`,
		},
		{ manual: true },
	);

	/**
	 * @name 가공상품_생성_axios_요청_핸들러
	 */
	const saveProcessedProductButtonHandler = async () => {
		if (route.params.mode === 'regist') {
			const saveProcessedProductReq: CreateBarcodeProcessedProductReq = {
				productBarcode: barcodeInput.value,
				productName: productNameInput.value,

				productIsProcessed: selectedCategoryIndex === 1 ? true : false,
				productCreatedAt: new Date().toISOString(),
				productVolume: volumeInput.value,
				productIsSoldout: !availableForSale,

				// 매입처 DB 칼럼에 없음.
				productCurrentPrice: Number(currentPriceInput.value.replace(/,/g, '')),
				productOriginPrice: Number(originPriceInput.value.replace(/,/g, '')),
				productDescription: productDescription.value,
			};

			try {
				const formDataWithImagesFile = await handleGetImgFromAsyncStorage(
					saveProcessedProductReq,
				);

				executeSaveProcessedProduct({
					data: formDataWithImagesFile,
				})
					.then(() => {
						/* 저장 완료 후 로직 */
						if (route.params.handleUploadOverlay) {
							route.params.handleUploadOverlay();
							navigation.navigate('메인화면');
						}
					})
					.catch(() => {
						/* 저장 에러 발생 후 로직 */
						setErrorOverlayVisible(true);
					});
			} catch {
				handleErrorOverlayVisible(true);
			}
		}
	};

	/**
	 * @name 저울상품_생성_axios
	 * ownerId 가 더미인 상태, context 를 통해 받아오도록 수정
	 */
	const [{ loading: saveWeightedProductLoading }, executeSaveWeightedProduct] = useAxios<any>(
		{
			method: 'POST',
			url: `/product/createWeightedProduct/${Number(route.params.ownerId)}`,
		},
		{ manual: true },
	);

	/**
	 * @name 저울상품_생성_axios_요청_핸들러
	 */
	const saveWeightedProductButtonHandler = async () => {
		if (route.params.mode === 'regist') {
			const saveWeightedProductReq: CreateBarcodeWeightedProductReq = {
				productBarcode: barcodeInput.value,
				productName: productNameInput.value,

				productIsProcessed: selectedCategoryIndex === 1 ? true : false,
				productCreatedAt: new Date().toISOString(),
				productVolume: volumeInput.value,
				productIsSoldout: !availableForSale,

				// 매입처 DB 칼럼에 없음.
				productCurrentPrice: Number(currentPriceInput.value.replace(/,/g, '')),
				productOriginPrice: Number(originPriceInput.value.replace(/,/g, '')),
				productDescription: productDescription.value,
			};

			try {
				const formDataWithImagesFile = await handleGetImgFromAsyncStorage(
					saveWeightedProductReq,
				);

				executeSaveWeightedProduct({
					data: formDataWithImagesFile,
				})
					.then(() => {
						/* 저장 완료 후 로직 */
						if (route.params.handleUploadOverlay) {
							route.params.handleUploadOverlay();
							navigation.navigate('메인화면');
						}
					})
					.catch(() => {
						/* 저장 에러 발생 후 로직 */
						setErrorOverlayVisible(true);
					});
			} catch {
				handleErrorOverlayVisible(true);
			}
		}
	};

	return (
		<ScrollView
			style={productInfoStyle.root}
			contentContainerStyle={productInfoStyle.rootContainer}
			showsVerticalScrollIndicator={false}
		>
			{/* 카테고리 선택 바텀시트 컴포넌트 */}
			<CategoryBottomSheet
				isVisiable={route.params.mode === 'regist' ? open : false}
				handleClose={() => setOpen(false)}
				categoryArray={category}
				handleCategoryIndex={handleCategoryIndex}
			/>

			<ErrorOverlay visible={errorOverlayVisible} toggleOverlay={handleErrorOverlayVisible} />

			{/* 각 상품 정보 입력창 컴포넌트 */}
			<View style={{ width: LIST_WIDTH, marginTop: 45 }}>
				<InputTextBoxWithLabel
					title={'바코드'}
					isNecessary={true}
					value={barcodeInput.value}
					handleChange={barcodeInput.handleChange}
					inputType="any"
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
					handleChange={currentPriceInput.handleChangeCurrencyNumber}
					inputType="numeric"
					rightIconType="won"
				/>
				<CategoryOpenButtonWithLabel
					title={'상품 카테고리'}
					isNecessary={true}
					value={category[selectedCategoryIndex]}
					handleOpen={() => setOpen(true)}
					isSaveMode={route.params.mode === 'regist'}
				/>
				<InputTextBoxWithLabel
					title={'얄로마켓 시스템 내 상품 게시일'}
					isNecessary={true}
					value={openDateInput.value}
					handleChange={openDateInput.handleChangeISODateNumber}
					inputType="date"
				/>
				<InputTextBoxWithLabel
					title={'규격'}
					isNecessary={true}
					value={volumeInput.value}
					handleChange={volumeInput.handleChange}
					inputType="any"
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
					handleChange={originPriceInput.handleChangeCurrencyNumber}
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

				{/* 등록하기/수정하기 버튼 컴포넌트 */}
				<FinishButton
					title={route.params.mode === 'regist' ? '등록하기' : '수정하기'}
					callBack={() => {
						if (route.params.mode === 'update') {
							updateProductInfoButtonHandler();
						} else {
							if (category[selectedCategoryIndex] === '가공상품') {
								saveProcessedProductButtonHandler();
							} else {
								saveWeightedProductButtonHandler();
							}
						}
					}}
					isAvailable={
						barcodeInput.value.length > 0 &&
						productNameInput.value.length > 0 &&
						currentPriceInput.value.length > 0 &&
						category[selectedCategoryIndex].length > 0 &&
						openDateInput.value.length > 0 &&
						volumeInput.value.length > 0
					}
				/>
			</View>

			<YellowScreenCenterLoading
				loading={
					updateProductLoading ||
					saveProcessedProductLoading ||
					saveWeightedProductLoading
				}
			/>
		</ScrollView>
	);
}

export default ProductInfoInput;
