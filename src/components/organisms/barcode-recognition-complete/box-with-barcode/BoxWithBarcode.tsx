import React from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';

import style from './styles';

const BoxWithBarcode = (props: any) => {
	const { productName, barcode } = props;

	return (
		<View style={style.root}>
			<View style={style.boxContainer}>
				<View style={style.productNameContainer}>
					<Image
						source={require('../../../../assets/images/barcode-recognition-complete/mini-badge.png')}
						style={style.image}
					/>
					<Text style={style.productName}>{productName}</Text>
				</View>
				<Text style={style.barcode}>{barcode}</Text>
			</View>
		</View>
	);
};

export default BoxWithBarcode;
