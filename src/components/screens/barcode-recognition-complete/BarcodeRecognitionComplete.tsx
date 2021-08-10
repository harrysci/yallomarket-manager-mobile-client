import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* 구성 organisms 컴포넌트 import */
import BoxWithBarcode from '../../organisms/barcode-recognition-complete/box-with-barcode/BoxWithBarcode';
import ButtonGroup from '../../organisms/barcode-recognition-complete/button-group/ButtonGroup';
import TopTitle from '../../organisms/barcode-recognition-complete/top-title/TopTitle';
import AlreadyRegistedAlertOverlay from '../../organisms/barcode-recognition-complete/already-registed-alert/AlreadyRegistedAlertOverlay';

/* axios hook */
import useAxios from 'axios-hooks';

/* 스타일 시트 import */
import styles from './styles';

/* stack param */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * @example 바코드 인식 완료 화면 stack param 예시
 * const routeParams: BarcodeRecognitionCompleteStackParams = {
		barcode: '201 2232 1111',
	};
 */

/**
 * @name 바코드_인식_완료_화면
 * @returns JSX.Element
 */
function BarcodeRecognitionComplete(): JSX.Element {
	/* route params */
	const route = useRoute<RouteProp<StackParamList, '바코드 인식 완료'>>();

	/* navigate params */
	const navigation = useNavigation<StackNavigationProp<StackParamList, '상품 상세 정보'>>();

	/* 상품 정보 핸들러 */
	const [barcode, setBarcode] = React.useState<string>(
		route.params && route.params.barcode ? route.params.barcode : '123123123123',
	);

	/* 바코드를 통한 상품 정보 조회 핸들러 */
	const [
		{
			data: getCheckProductByBarcodeData,
			loading: getCheckProductByBarcodeLoading,
			error: getCheckProductByBarcodeError,
		},
	] = useAxios({
		url: `/product/readProductData/${1}/${barcode}`,
		method: 'get',
	});

	/* 이미 등록된 상품 overlay 핸들러 */
	const [alreadyRegistedAlertOverlayOpen, setAlreadyRegistedAlertOverlayOpen] =
		React.useState<boolean>(false);
	const handleAlreadyRegistedAlertOverlay = (value: boolean) => {
		setAlreadyRegistedAlertOverlayOpen(value);
	};

	React.useEffect(() => {
		if (
			!getCheckProductByBarcodeLoading &&
			!getCheckProductByBarcodeError &&
			getCheckProductByBarcodeData &&
			getCheckProductByBarcodeData.productName
		) {
			setAlreadyRegistedAlertOverlayOpen(true);
		}
	}, [getCheckProductByBarcodeData]);

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				{/* 텍스트 섹션 */}
				<TopTitle />

				{/* 박스 섹션 */}
				<BoxWithBarcode
					productName={
						!getCheckProductByBarcodeLoading &&
						!getCheckProductByBarcodeError &&
						getCheckProductByBarcodeData &&
						getCheckProductByBarcodeData.productName
							? getCheckProductByBarcodeData.productName
							: ''
					}
					barcode={barcode}
				/>

				{/* 버튼 섹션 */}
				<ButtonGroup handleUploadOverlay={route.params.handleUploadOverlay} />

				{/* 이미 등록된 상품 Overlay */}
				<AlreadyRegistedAlertOverlay
					isOpen={alreadyRegistedAlertOverlayOpen}
					handleOpen={handleAlreadyRegistedAlertOverlay}
					navigation={navigation}
				/>
			</View>
		</SafeAreaView>
	);
}

export default BarcodeRecognitionComplete;
