import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { Text, Image } from 'react-native-elements';
import BoxWithBarcode from '../../organisms/barcode-recognition-complete/box-with-barcode/BoxWithBarcode';
import ButtonGroup from '../../organisms/barcode-recognition-complete/button-group/ButtonGroup';
import TopTitle from '../../organisms/barcode-recognition-complete/top-title/TopTitle';

const LAYOUT_WIDTH = '87.5%';

function BarcodeRecognitionComplete(): JSX.Element {
	const [productName, setProductName] = React.useState<string>('포카칩');
	const [barcode, setBarcode] = React.useState<string>('2 000010 132605');

	return (
		<View
			style={{
				flex: 1,
				// backgroundColor: 'green',
				width: '100%',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					flex: 1,
					width: LAYOUT_WIDTH,
					// backgroundColor: 'yellow',
					height: '100%',
				}}
			>
				{/* 텍스트 섹션 */}
				<TopTitle />

				{/* 박스 섹션 */}
				<BoxWithBarcode productName={productName} barcode={barcode} />

				{/* 버튼 섹션 */}
				<ButtonGroup />
			</View>
		</View>
	);
}

export default BarcodeRecognitionComplete;
