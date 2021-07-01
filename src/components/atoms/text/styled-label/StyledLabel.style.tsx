import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 6,
	},
	textNecessary: {
		height: 21,
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 20,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 21,
		letterSpacing: -0.58,
		textAlign: 'left',
		color: '#000000',
	},
	textNotNecessary: {
		width: 110,
		height: 24,
		opacity: 0.73,
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 20,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 24,
		letterSpacing: -0.64,
		textAlign: 'left',
		color: '#000000',
	},
	point: {
		width: 9,
		height: 21,
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 23,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 23,
		letterSpacing: 0,
		textAlign: 'right',
		color: '#ff0000',
	},
});

export default style;
