import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {},
	buttonAvaliable: {
		height: 48,
		borderRadius: 3,
		backgroundColor: '#fbd145',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
	},
	buttonContainer: {
		marginBottom: 24,
		width: '100%',
	},
	buttonNotAvaliable: {
		height: 48,
		borderRadius: 3,
		backgroundColor: '#ededed',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
	},
	titleAvaliable: {
		// width: 78,
		// height: 18,
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 18,
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},
	titleNotAvaliable: {
		// width: 78,
		// height: 18,
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 18,
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: '#707070',
	},
});

export default style;
