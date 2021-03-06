import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: { flex: 1 },
	text: {
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 16,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: -0.51,
		textAlign: 'center',
		color: '#848484',
		alignSelf: 'center',
	},
	touchAreaReScan: {
		width: '100%',
		height: 48,
		borderRadius: 3,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
		justifyContent: 'center',
		marginTop: 38,
	},
	reScanText: {
		fontSize: 17,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 20,
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},
	touchAreaSave: {
		width: '100%',
		height: 48,
		borderRadius: 3,
		backgroundColor: '#fbd145',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
		justifyContent: 'center',
		marginTop: 16,
	},
	saveText: {
		fontSize: 17,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 20,
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},
});

export default style;
