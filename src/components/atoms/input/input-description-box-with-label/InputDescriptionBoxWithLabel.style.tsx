import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {
		marginBottom: 8,
	},
	inputContainer: {
		minHeight: 120,
		borderRadius: 9,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#d5d5d5',
		alignSelf: 'center',
		padding: 12,
	},
	input: {
		width: 83,
		minHeight: 29,
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 22,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 23,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#3c3c3c',
	},
});

export default style;
