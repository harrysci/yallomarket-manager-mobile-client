import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import BarcodeScanner from '../../organisms/barcode/BarcodeScanner';
import { BarCodeReadEvent } from 'react-native-camera';
import { styles } from '../../organisms/barcode/styles/styles';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useNavigation } from '@react-navigation/native';
import { Overlay } from 'react-native-elements';

export const ScannerScreen = (): JSX.Element => {
	const [barcodeNum, setCodeInfo] = React.useState<string>();
	const onBarcodeScan = (event: BarCodeReadEvent): string => {
		setCodeInfo(event.data);

		return event.data;
	};

	const navigation = useNavigation();

	/*assets/images/product-list/4114.png    assets/images/product-list/299.png*/
	const [uploadOverlayVisible, setUploadCompleteOverlay] = React.useState<boolean>(false);

	/*등록 handler*/
	const handleUploadOverlay = () => {
		setUploadCompleteOverlay(!uploadOverlayVisible);
	};

	return (
		<View style={styles.capture}>
			<View style={styles.scannerStyle}>
				<BarcodeScanner
					onBarcodeScan={onBarcodeScan}
					barcodeNum={barcodeNum}
					handleUploadOverlay={handleUploadOverlay}
				/>
			</View>

			<View style={styles.InfoText}>
				<Text style={styles.font}>등록할 상품의 바코드</Text>
				<Text style={styles.fontRight}>를 카메라로 스캔하세요</Text>
			</View>

			{/* 실 디바이스가 아닌 경우 바코드 인식 이후 로직 테스트를 위한 버튼  */}
			{/* <Button
				title="바코드 인식 완료로 이동"
				style={{
					backgroundColor: 'red',
					marginTop: 16,
				}}
				onPress={() =>
					navigation.navigate('바코드 인식 완료', {
						barcode: '7777777',
						handleUploadOverlay,
					})
				}
			/> */}

			<Overlay
				isVisible={uploadOverlayVisible}
				onBackdropPress={() => handleUploadOverlay()}
				overlayStyle={styles.updateCompleteOverlay}
			>
				<View style={styles.updateCompleteContainer}>
					<View style={styles.updateCompleteContainer}>
						<TouchableOpacity
							onPress={handleUploadOverlay}
							style={styles.updateCompleteTouchableOpacity}
						>
							<Image
								source={require('../../../assets/images/product-list/4114.png')}
								style={styles.updateCompleteExitImage}
							/>
						</TouchableOpacity>

						<View style={styles.updateCompleteImageTextContainer}>
							<Image
								source={require('../../../assets/images/product-list/299.png')}
								style={styles.updateCompleteCheckImage}
							/>
							<Text style={styles.updateCompleteText}>상품정보 등록 완료!</Text>
						</View>
					</View>
				</View>
			</Overlay>
		</View>
	);
};
