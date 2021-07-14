import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	upContainer: {
		marginTop: 43,
		marginLeft: 24,
	},

	updateCompleteOverlay: {
		width: '87.2%',
		height: '7.4%',
		borderRadius: 30,
		backgroundColor: '#ffffff',

		position: 'absolute',
		bottom: '15%',
	},
	updateCompleteContainer: {
		width: '100%',
		height: '100%',
	},
	updateCompleteImageTextContainer: {
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	updateCompleteTouchableOpacity: {
		width: 16,
		height: 16,

		position: 'absolute',
		zIndex: 1,
		right: '5%',
	},
	updateCompleteExitImage: {
		width: '100%',
		height: '100%',
	},
	updateCompleteCheckImage: {
		width: 32,
		height: 32,
	},
	updateCompleteText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 16,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 19,
		letterSpacing: -0.51,
		textAlign: 'center',
		color: '#000000',

		marginLeft: 5.7,
	},
});
export default styles;
