import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarcodeRecognitionCompleteStackParams } from '../../../navigations/stack-params/BarcodeRecognitionCompleteStackParams';

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
	const routeParams: BarcodeRecognitionCompleteStackParams = {
		barcode: '201 2232 1111',
	};

	return (
		<SafeAreaView>
			<View style={styles.testContainer}>
				<Text style={styles.testText}>Test</Text>
			</View>

			<TouchableOpacity onPress={() => navigation.navigate('바코드 인식 완료', routeParams)}>
				<Text>aa</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
