import { Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#f4f4f4',
	},
	textRoot: {
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		marginBottom: 8,

		...Platform.select({
			ios: {
				shadowColor: 'rgb(50, 50, 50)',
				shadowOpacity: 0.1,
				shadowRadius: 5,
				shadowOffset: {
					height: 1,
					width: 0,
				},
			},
			android: {
				elevation: 1,
			},
		}),
	},
	title: {
		fontSize: 21,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: -0.67,
		textAlign: 'left',
		color: '#000000',
	},
	scrollRoot: {
		flex: 1,
		backgroundColor: '#f4f4f4',
		flexDirection: 'column',
	},

	/** *********************************/
	rootChild: {
		height: 110,
		backgroundColor: 'white',
		flexDirection: 'row',

		paddingLeft: 24,
		marginBottom: 8,

		...Platform.select({
			ios: {
				shadowColor: 'rgb(50, 50, 50)',
				shadowOpacity: 0.1,
				shadowRadius: 5,
				shadowOffset: {
					height: -1,
					width: 0,
				},
			},
			android: {
				elevation: 1,
			},
		}),
	},
	text1: {
		fontSize: 15,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: -0.75,
		textAlign: 'left',
		color: '#000000',

		marginTop: 12,
		marginBottom: 19,
	},
	text2: {
		fontSize: 18,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: -0.9,
		textAlign: 'left',
		color: '#000000',

		marginBottom: 8,
	},
	text3: {
		fontSize: 15,
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: -0.75,
		textAlign: 'left',
		color: '#9f9f9f',
	},
	sub: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	orderStartImage: {
		width: 56,
		height: 72,
	},

	/** *********************************/
	proRoot: {
		alignItems: 'center',
	},
	circleRoot: {
		width: 30,
		height: 30,
		borderRadius: 44 / 2,
		backgroundColor: '#fbd145',

		alignItems: 'center',
		justifyContent: 'center',
	},
	timeText: {
		fontSize: 15,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: -0.75,
		textAlign: 'left',
		color: '#000000',
	},
	stateText: {
		fontSize: 13,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 16,
		letterSpacing: -0.65,
		textAlign: 'left',
		color: '#000000',

		marginTop: 2,
	},

	/** *********************************/
	overlayRoot: {
		width: Dimensions.get('screen').width * 0.872,
		height: 246,
		borderRadius: 100,

		justifyContent: 'center',
		alignItems: 'center',
	},
	overlayText1: {
		fontSize: 18,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',

		marginBottom: 6,
	},
	overlayText2: {
		fontSize: 14,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: 'gray',

		marginBottom: 24,
	},
	overlayText3: {
		fontSize: 28,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},
	overlayButton: {
		width: 280,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
		backgroundColor: '#ffd02e',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
	},
	overlayButtonText: {
		fontSize: 17,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 20,
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},

	overlayButtonGroup: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',

		marginBottom: 36,
	},
	overlayMinus: {
		width: 27,
		height: 3,
	},
	overlayPlus: {
		width: 27,
		height: 27,
	},
	buttonBack: {
		width: 40,
		height: 40,
		borderRadius: 44 / 2,
		backgroundColor: '#f4f4f4',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
