import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BarcodeRecognitionComplete from './src/components/screens/barcode-recognition-complete/BarcodeRecognitionComplete';

const App = () => {
	return (
		<SafeAreaView style={styles.testContainer}>
			<BarcodeRecognitionComplete />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	testContainer: {
		flex: 1,
		// justifyContent: 'center',
		// backgroundColor: '#fdbd39',
	},
	testText: {
		fontSize: 40,
		textAlign: 'center',
	},
});

export default App;
