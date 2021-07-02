import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginBottom: 24,
		marginRight: 24,
	},
	imageContainer: {
		width: 25,
		height: 25,
		marginRight: 6,
	},
	image: {
		width: 24,
		height: 24,
	},
	text: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 20,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 23,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#000000',
	},
});

export default style;
