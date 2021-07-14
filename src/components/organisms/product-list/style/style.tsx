import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#ffff',
	},
	item_container: {
		flexDirection: 'row',
		marginVertical: 8,
	},
	image_container: {},
	detail_container: {
		flexDirection: 'column',
		marginLeft: 10,
	},
	last_containner: {
		flexDirection: 'row',
	},
	barcode: {
		width: 139,
		//fontFamily: "AppleSDGothicNeo",
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
		width: 72,
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
		//backgroundColor:'#123424',
		borderRadius: 5,
	},
	go_detail: {
		flexDirection: 'row',
		width: 62,
		opacity: 0.77,
		//fontFamily: "AppleSDGothicNeo",
		fontSize: 12,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 28,
		letterSpacing: -0.29,
		textAlign: 'left',
		color: '#000000',
		alignItems: 'center',
	},
	go_detail_image: {
		width: 20,
		height: 20,
	},
});

export default styles;
