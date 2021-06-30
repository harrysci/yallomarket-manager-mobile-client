import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import ProductInfoInput from '../../organisms/shared/product-info-input/productInfoInput';

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		alignItems: 'center',
	},
});

function TestScreen() {
	return (
		// <View
		// 	style={{
		// 		backgroundColor: 'blue',
		// 		flex: 1,
		// 		width: '100%',
		// 		alignContent: 'center',
		// 		justifyContent: 'center',
		// 	}}
		// >
		<View
			style={styles.scrollContainer}
			// contentContainerStyle={{
			// 	justifyContent: 'center',
			// 	alignContent: 'center',
			// }}
		>
			<ProductInfoInput />
		</View>
		// </View>
	);
}

export default TestScreen;
