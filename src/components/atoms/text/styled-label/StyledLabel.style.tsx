import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 6,
	},
	textNecessary: {
		fontSize: 20,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: -0.58,
		textAlign: 'left',
		color: '#000000',
	},
	textNotNecessary: {
		opacity: 0.73,
		fontSize: 20,
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: -0.64,
		textAlign: 'left',
		color: '#000000',
	},
	point: {
		width: 9,
		height: 21,
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
