import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { ProductInfoInputStackParams } from '../../../navigations/stack-params/ProductInfoInputStackParams';

const styles = StyleSheet.create({
	testContainer: {
		justifyContent: 'center',
		backgroundColor: '#f234',
	},
	testText: {
		fontSize: 40,
		textAlign: 'center',
	},
});
export default function Test(): JSX.Element {
	const navigation = useNavigation();
	const routeParams: ProductInfoInputStackParams = {
		mode: 'update',
		initBarcode: '123123123123',
		initProductName: '적양배추',
		initCurrentPrice: 3120,
		initCategory: '신선식품',
		initOpenData: '2021-07-06',
		initVolume: 400,
		initProductOrigin: '부산광역시',
		initOriginPrice: 4620,
		initProductDescription: '개맛있는 적양배추',
	};

	return (
		<SafeAreaView>
			<View style={styles.testContainer}>
				<Text style={styles.testText}>Test</Text>
			</View>

			<TouchableOpacity
				style={{
					backgroundColor: 'yellow',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				onPress={() => navigation.navigate('상품 정보 입력', routeParams)}
			>
				<Text h1>Go to stack</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
