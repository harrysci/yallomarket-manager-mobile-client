import React from 'react';
import { View } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import { styles } from './styles/styles';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
/*
****************************
** barcodeProps - by sangeun Park
****************************
onBarcodeScan  :
- 바코드 번호 상태관리 hook
- RNCamera의 onBarcodeRead 에서호출됨

barcodeNum : 바코드 정보
*/
interface barcodeProps {
	onBarcodeScan: (data: BarCodeReadEvent) => void;
	barcodeNum?: string;
	handleUploadOverlay: () => void;
}

export default function BarcodeScanner(BarcodeProps: barcodeProps): JSX.Element {
	const { onBarcodeScan, handleUploadOverlay, barcodeNum } = BarcodeProps;
	const ref = useRef<RNCamera>(null);
	const navigation = useNavigation();

	return (
		<View>
			<RNCamera
				style={styles.scannerStyle}
				type={RNCamera.Constants.Type.back}
				ref={ref}
				captureAudio={false}
				onBarCodeRead={barcode => {
					onBarcodeScan(barcode);

					/*이곳에서 page전환 연결, barcodeNum의 데이터를 Param으로 전달.*/
					/* 네비게이션 테스트 */
					navigation.navigate('바코드 인식 완료', {
						barcodeNum,
						handleUploadOverlay,
					});
				}}
				autoFocus={RNCamera.Constants.AutoFocus.on}
			/>
		</View>
	);
}
