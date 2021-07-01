import { StyleSheet, Platform } from 'react-native';

const style = StyleSheet.create({
	root: { flex: 1 },
	boxContainer: {
		width: '100%',
		height: 104,
		borderRadius: 13,
		backgroundColor: '#ffffff',
		alignSelf: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		...Platform.select({
			ios: {
				shadowColor: '#4d4d4d',
				shadowOffset: { width: 0.1, height: 5 },
				shadowOpacity: 0.2,
				shadowRadius: 5,
			},
			android: { elevation: 6 },
		}),
	},
	productNameContainer: {
		flexDirection: 'row',
		marginLeft: 24,
		marginBottom: 4,
	},
	image: {
		width: 16,
		height: 16,
	},
	productName: {
		width: 30,
		height: 15,
		opacity: 0.66,
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 12,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 15,
		letterSpacing: -0.29,
		textAlign: 'center',
		color: '#000000',
		marginLeft: 8,
	},
	barcode: {
		height: 37,
		opacity: 1,
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 31,
		fontWeight: '800',
		fontStyle: 'normal',
		lineHeight: 37,
		letterSpacing: -0.74,
		textAlign: 'center',
		color: '#000000',
	},
});

export default style;
