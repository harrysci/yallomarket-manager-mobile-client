import React from 'react';
import { View, Text } from 'react-native';
import BarcodeScanner from '../../organisms/barcode/BarcodeScanner';
// import {RNScanner} from '../../organisms/barcode/RNScanner';
import { BarCodeReadEvent } from 'react-native-camera';
import { styles } from '../../organisms/barcode/styles/styles';

export const ScannerScreen = (): JSX.Element => {
	const [barcodeNum, setCodeInfo] = React.useState<string>();
	const onBarcodeScan = (event: BarCodeReadEvent) => {
		console.log('barcode on');
		console.log('number : ' + barcodeNum);
		setCodeInfo(event.data);
	};
	return (
		<View style={styles.capture}>
			<View style={styles.scannerStyle}>
				<BarcodeScanner onBarcodeScan={onBarcodeScan} barcodeNum={barcodeNum} />
			</View>
			<View style={styles.InfoText}>
				<Text style={styles.font}>등록할 상품의 바코드</Text>
				<Text style={styles.fontRight}>를 카메라로 스캔하세요</Text>
			</View>
		</View>
	);
};
