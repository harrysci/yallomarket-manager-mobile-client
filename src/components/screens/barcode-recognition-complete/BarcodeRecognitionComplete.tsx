import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';

/* 구성 organisms 컴포넌트 import */
import BoxWithBarcode from '../../organisms/barcode-recognition-complete/box-with-barcode/BoxWithBarcode';
import ButtonGroup from '../../organisms/barcode-recognition-complete/button-group/ButtonGroup';
import TopTitle from '../../organisms/barcode-recognition-complete/top-title/TopTitle';

/* 스타일 시트 import */
import styles from './styles';

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

	const [productName, setProductName] = React.useState<string>('포카칩');
	const [barcode, setBarcode] = React.useState<string>(
		route.params.barcode ? route.params.barcode : '',
	);

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				{/* 텍스트 섹션 */}
				<TopTitle />

				{/* 박스 섹션 */}
				<BoxWithBarcode productName={productName} barcode={barcode} />

				{/* 버튼 섹션 */}
				<ButtonGroup />
			</View>
		</SafeAreaView>
	);
}

export default BarcodeRecognitionComplete;
