import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	text1: {
		fontSize: 17,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: -0.85,
		textAlign: 'left',
		color: '#000000',
	},
	text2: {
		fontSize: 14,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: -0.85,
		textAlign: 'left',
		color: 'gray',
	},

	flexWithCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	root1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 50,
		backgroundColor: 'white',
		paddingLeft: 24,
		paddingRight: 24,

		marginBottom: 8,
	},
	sub1: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textOrder: {
		fontSize: 17,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: -0.85,
		textAlign: 'center',
		color: '#000000',
	},

	sub2: {
		paddingLeft: 24,
		paddingRight: 24,
		marginBottom: 8,
		backgroundColor: 'white',

		paddingTop: 24,
		paddingBottom: 24,
	},
	sub3: {
		height: 140,
		backgroundColor: 'white',

		paddingLeft: 24,
		paddingRight: 24,
		paddingTop: 24,

		marginBottom: 8,
	},
	sub4: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},

	root3: {
		width: '100%',
		flex: 1,
		backgroundColor: '#f4f4f4',
		// position: 'absolute',
		// bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		height: 16,
		width: 24,
	},
	scrollRoot: {
		height: 400,
		backgroundColor: '#f4f4f4',
	},

	button1: {
		width: 328,
		height: 49,
		borderRadius: 3,
		backgroundColor: '#ffd02e',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000000',
		marginBottom: 16,

		alignItems: 'center',
		justifyContent: 'center',
	},
	button2: {
		width: 328,
		height: 48,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#a5a5a5',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText1: {
		fontSize: 17,
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
	},

	eachRoot: {
		borderBottomWidth: 1,
		borderColor: '#dddddd',
		height: 90,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',

		paddingLeft: 24,
		marginBottom: 0,
	},
});

export default styles;
