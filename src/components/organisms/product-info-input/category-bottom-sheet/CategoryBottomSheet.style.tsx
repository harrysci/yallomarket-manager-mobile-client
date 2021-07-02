import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	root: {},
	rootContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: 263,
		borderRadius: 13,
		backgroundColor: '#ffffff',
	},
	touchArea: {
		alignItems: 'center',
		marginTop: 8,
		height: 12,
		marginBottom: 16,
	},
	image: {
		width: 21,
		height: 8,
	},
	text: {
		// width: 109,
		// height: 24,
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 20,
		fontWeight: 'bold',
		fontStyle: 'normal',
		// lineHeight: 24,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#000000',
		marginBottom: 18,
	},
	buttonContainer: {
		marginBottom: 24,
		marginTop: 28,
	},
	button: {
		width: 327,
		height: 48,
		borderRadius: 3,
		backgroundColor: '#fbd145',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
	},
	buttonTitle: {
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 18,
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},
});

export default style;
