import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {},
	selectedTouchArea: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 328,
		height: 32,
		borderRadius: 3,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: 'rgba(255, 208, 46, 0.12)',
		alignItems: 'center',
		marginBottom: 4,
	},
	notSelectedTouchArea: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 328,
		height: 32,
		borderRadius: 3,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: '#ffff',
		alignItems: 'center',
		marginBottom: 4,
	},
	text: {
		height: 19,
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 16,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 19,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#000000',
	},
	image: {
		width: 24,
		height: 24,
	},
});

export default style;
