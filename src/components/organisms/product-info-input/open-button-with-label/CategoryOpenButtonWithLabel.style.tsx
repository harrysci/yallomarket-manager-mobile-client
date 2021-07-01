import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {
		marginBottom: 32,
	},
	touchArea: {
		width: '100%',
		height: 50,
		borderRadius: 9,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#d5d5d5',
		alignSelf: 'center',
		paddingLeft: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		width: 83,
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 22,
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'left',
		color: '#3c3c3c',
	},
	image: {
		width: 16,
		height: 16,
		marginRight: 12,
	},
});

export default style;
