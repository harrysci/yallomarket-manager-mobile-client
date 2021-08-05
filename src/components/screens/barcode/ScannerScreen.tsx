import React from 'react';
import { View, Text } from 'react-native';
import BarcodeScanner from '../../organisms/barcode/BarcodeScanner';
import { BarCodeReadEvent } from 'react-native-camera';
import { styles } from '../../organisms/barcode/styles/styles';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useNavigation } from '@react-navigation/native';

export const ScannerScreen = (): JSX.Element => {
	const [barcodeNum, setCodeInfo] = React.useState<string>();
	const onBarcodeScan = (event: BarCodeReadEvent) => {
		setCodeInfo(event.data);
	};

	const navigation = useNavigation();

	return (
		<View style={styles.capture}>
			<View style={styles.scannerStyle}>
				<BarcodeScanner onBarcodeScan={onBarcodeScan} barcodeNum={barcodeNum} />
			</View>

			<View style={styles.InfoText}>
				<Text style={styles.font}>등록할 상품의 바코드</Text>
				<Text style={styles.fontRight}>를 카메라로 스캔하세요</Text>
			</View>

			{/* 실 디바이스가 아닌 경우 바코드 인식 이후 로직 테스트를 위한 버튼  */}
			<Button
				title="바코드 인식 완료로 이동"
				style={{
					backgroundColor: 'red',
					marginTop: 16,
				}}
				onPress={() =>
					navigation.navigate('바코드 인식 완료', {
						barcode: '7777777',
					})
				}
			/>
		</View>
	);
};
