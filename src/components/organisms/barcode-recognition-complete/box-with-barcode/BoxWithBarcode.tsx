import React from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';

import style from './styles';

export interface BoxWithBarcodeProps {
	productName: string;
	barcode: string;
}

/**
 * @name 바코드_표시_박스_컴포넌트
 * @param props BoxWithBarcodeProps
 * @returns JSX.Element
 */
const BoxWithBarcode = (props: BoxWithBarcodeProps): JSX.Element => {
	const { productName, barcode } = props;

	return (
		<View style={style.root}>
			<View style={style.boxContainer}>
				<View style={style.productNameContainer}>
					<Image
						source={require('../../../../assets/images/barcode-recognition-complete/mini-badge.png')}
						style={style.image}
					/>
					<Text style={style.productNameInfo}>상품명</Text>
					<Text style={style.productName}>{productName}</Text>
				</View>
				<Text style={style.barcode}>{barcode}</Text>
			</View>
		</View>
	);
};

export default BoxWithBarcode;
