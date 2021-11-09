import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	scannerStyle: {
		width: '100%',
		height: 520,
	},
	capture: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	InfoText: {
		marginTop: 32,
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
	},
	font: {
		fontSize: 17,
		fontWeight: 'bold',
		fontStyle: 'normal',
		lineHeight: 25,
		letterSpacing: -0.17,
		textAlign: 'left',
		alignSelf: 'center',
		color: '#000000',
		backgroundColor: '#fade7f',
	},
	fontRight: {
		fontSize: 17,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 25,
		letterSpacing: -0.17,
		textAlign: 'right',
		alignSelf: 'center',
		color: '#000000',
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
