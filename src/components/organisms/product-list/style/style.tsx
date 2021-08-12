import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	up: {
		backgroundColor: 'white',
		marginTop: 43,
	},
	title: {
		//fontFamily: "AppleSDGothicNeo",
		height: 25,
		fontSize: 21,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 25,
		letterSpacing: -0.67,
		alignContent: 'center',
		marginBottom: 26,
	},
	productListComponentContainer: {
		backgroundColor: 'white',
		flex: 1,
	},
	middleContainer: {
		width: '100%',
		height: 31,
		backgroundColor: '#efefef',
		marginBottom: 24,
	},
	middleView: {
		width: '100%',
		height: 31,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginHorizontal: 17,
	},
	martname: {
		//fontFamily: "AppleSDGothicNeo",
		height: 15,
		fontSize: 12,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 15,
		letterSpacing: -0.38,
		textAlign: 'center',
		color: '#000000',
	},
	root: {
		flex: 1,
		backgroundColor: '#ffff',
	},
	item_container: {
		flexDirection: 'row',
		marginHorizontal: 17,
		marginBottom: 16,
	},
	image_container: {},
	detail_container: {
		width: '100%',
		flexDirection: 'column',
		marginLeft: 10,
	},
	last_container: {
		flexDirection: 'row',
		flex: 1,
	},
	sectionListFooter: {
		width: '100%',
		height: 8,
		opacity: 0.48,
		backgroundColor: '#efefef',
		marginBottom: 16,
	},
	barcode: {
		//fontFamily: "AppleSDGothicNeo",
		width: '100%',
		fontSize: 11,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 14,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#000000',
		marginBottom: 8,
	},
	product_name: {
		width: 212,
		fontSize: 18,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 28,
		letterSpacing: -0.43,
		textAlign: 'left',
		color: '#000000',
		marginBottom: 15,
	},
	product_price: {
		fontSize: 17,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 28,
		letterSpacing: -0.41,
		textAlign: 'left',
		color: '#d00404',
		marginRight: 99,
	},
	product_image: {
		width: 107,
		height: 90,
		borderRadius: 5,
	},
	go_detail: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	go_detail_text: {
		//fontFamily: "AppleSDGothicNeo",
		opacity: 0.77,
		fontSize: 12,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 28,
		letterSpacing: -0.29,
		textAlign: 'left',
		color: '#000000',
	},
	go_detail_image: {
		width: 20,
		height: 20,
	},

	priceContainer: {
		width: '51%',
	},
	createdDateContainer: {
		flexDirection: 'row',
		marginHorizontal: 17,
		marginBottom: 5,
	},
	createdDateText: {
		fontSize: 9,
	},
	createdDateString: {
		fontSize: 9,
		fontWeight: '600',
	},
});

export default styles;
