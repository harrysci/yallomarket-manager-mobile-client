import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	root: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#ffff',
	},
	androidRoot: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		backgroundColor: '#ffff',
		justifyContent: 'center',
		marginTop: 10,
	},
	camera: {
		flex: 1,
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	cameraStyle: {
		width: '100%',
		height: '40%',
		marginTop: 135,
	},
	androidCameraStyle: {
		height: '35%',
	},
	imageStyle: {
		marginTop: 135,
		width: '100%',
		height: 288,
		zIndex: 0,
	},
	buttonStyle: {
		alignItems: 'center',
		width: 62,
		height: 62,
		borderRadius: 50,

		backgroundColor: '#fbd145',
	},
	buttonStyle2: {
		width: 328,
		height: 48,
		borderRadius: 3,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
	},
	buttonStyle3: {
		width: 328,
		height: 48,
		borderRadius: 3,
		backgroundColor: '#fbd145',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
	},
	flexRow: {
		marginLeft: '6.4%',
		marginTop: 32,
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
	},
	androidFlexRow: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		marginTop: 100,
	},
	font1: {
		height: 23,
		fontSize: 16,
		fontStyle: 'normal',
		lineHeight: 25,
		letterSpacing: -0.17,
		textAlign: 'left',
		alignSelf: 'center',
		color: '#000000',
	},
	font4: {
		fontSize: 21,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 25,
		letterSpacing: -0.17,
		textAlign: 'left',
		alignSelf: 'center',
		color: '#000000',
	},
	font3: {
		height: 23,
		fontSize: 16,
		fontWeight: 'bold',
		fontStyle: 'normal',
		lineHeight: 25,
		letterSpacing: -0.17,
		textAlign: 'left',
		alignSelf: 'center',
		color: '#000000',
		backgroundColor: '#fade7f',
	},
	buttonFlex: {
		alignItems: 'center',
		marginTop: '13.2%',
	},
	textBox: {
		marginTop: '4.8%',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 20,
		fontWeight: '600',
		fontStyle: 'normal',
	},
	buttonTitleFont: {
		fontSize: 17,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 20,
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},
	buttonBox: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 118,
	},
	androidButtonBox: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 118,
	},
	buttonBox2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
	},
	androidButtonBox2: {
		flex: 1,
		alignItems: 'center',
	},
});
