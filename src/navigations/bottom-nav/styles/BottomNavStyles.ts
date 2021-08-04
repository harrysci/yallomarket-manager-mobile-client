import { StyleSheet } from 'react-native';

const BottomNavStyles = StyleSheet.create({
	tabBar: {
		height: '10.2%',
		backgroundColor: '#FBFBFB',
	},
	productListTabImage: {
		width: 17.1,
		height: 19.6,
	},
	barcodeScanTabImage: {
		width: 22.4,
		height: 20.6,
	},
	androidLabelStyle: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 9,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 12,
		letterSpacing: -0.22,
		textAlign: 'center',

		paddingBottom: 10,
	},
	iosLabelStyle: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 9,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 12,
		letterSpacing: -0.22,
		textAlign: 'center',
	},
});

export default BottomNavStyles;
