import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {
		marginBottom: 8,
	},
	inputContainer: {
		width: '100%',
		height: 50,
		borderRadius: 9,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#d5d5d5',
		alignSelf: 'center',
		paddingLeft: 12,
	},
	input: {
		width: 83,
		height: 29,
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 22,
		fontWeight: 'normal',
		fontStyle: 'normal',
		// lineHeight: 23,
		letterSpacing: 0,
		textAlign: 'left',
	},
	wonImage: {
		width: 23,
		height: 32,
		marginRight: 4,
	},
	gramImage: {
		width: 13,
		height: 32,
		marginRight: 4,
	},
});

export default style;
