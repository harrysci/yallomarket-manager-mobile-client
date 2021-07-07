import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
	root: {
		width: Dimensions.get('screen').width * 0.872,
		height: 130,
		borderRadius: 7,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1.5,
		borderColor: '#191919',
		padding: 0,
	},
	container: {
		flex: 2,
		flexDirection: 'column',
	},
	upperContainer: {
		flex: 1,
		borderBottomWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 17,
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: -0.54,
		textAlign: 'center',
		color: '#000000',
	},

	lowerContainer: {
		height: 40,
		flexDirection: 'row',
	},
	lowerButton: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRightWidth: 1,
	},
});

export default style;
