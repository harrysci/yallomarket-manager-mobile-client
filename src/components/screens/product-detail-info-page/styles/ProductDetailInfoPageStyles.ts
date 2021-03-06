import { StyleSheet } from 'react-native';

const ProductDetailInfoPageStyles = StyleSheet.create({
	top: {
		flex: 1,
		backgroundColor: 'white',
	},
	container: {
		flex: 1,
		width: '87.2%',
		alignSelf: 'center',
	},
	titleTextButtonContainer: {
		height: '10%',
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
	},
	imageContainer: {
		height: '18.6%',
		marginBottom: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	productInformationContainer: {
		height: '10%',
	},
	productNamePriceContainer: {
		flexDirection: 'row',
	},
	productDetailInformationContainer: {
		height: '34.9%',
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	titleText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 21,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 25,
		letterSpacing: -0.67,
		textAlign: 'left',
		color: '#000000',
	},
	exitButton: {
		position: 'absolute',
		zIndex: 1,
	},
	productImage: {
		width: '100%',
		height: '100%',
	},
	storeNameText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 13,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 16,
		letterSpacing: -0.13,
		textAlign: 'left',
		color: '#6a6a6a',
		marginBottom: '1%',
	},
	productNameText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 20,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 24,
		letterSpacing: -0.2,
		textAlign: 'center',
		color: '#000000',
		marginRight: '4%',
	},
	productOnSalePriceText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 20,
		fontWeight: 'bold',
		fontStyle: 'normal',
		lineHeight: 24,
		letterSpacing: -0.2,
		textAlign: 'center',
		color: '#d00404',
		marginRight: '4.4%',
	},
	productSalePercentageText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 13,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 16,
		letterSpacing: -0.13,
		textAlign: 'center',
		color: '#6d7278',
		marginRight: '1%',
		alignSelf: 'center',
	},
	productCurrentPriceText: {
		// fontFamily: 'AppleSDGothicNeo',
		textDecorationLine: 'line-through',
		fontSize: 13,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 16,
		letterSpacing: -0.13,
		textAlign: 'center',
		color: '#6d7278',
		alignSelf: 'center',
	},
	productDetailInformationTitleText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 17,
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 20,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#000000',

		marginBottom: 19.2,
	},
	productDetailInformationElement: {
		flexDirection: 'row',
		marginBottom: 15,
	},
	detailTitleText: {
		// fontFamily: 'AppleSDGothicNeo',
		width: '33%',
		fontSize: 15,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 20,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#585858',

		marginRight: '7%',
	},
	detailInformationText: {
		// fontFamily: 'AppleSDGothicNeo',
		flex: 1,
		height: 21,
		fontSize: 18,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 22,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#000000',
	},
	updateButton: {
		height: 48,
		backgroundColor: '#f7d02f',
		borderColor: '#000000',
		borderWidth: 1,
		marginBottom: 16,
	},
	deleteButton: {
		height: 48,
		borderColor: '#000000',
		borderWidth: 1,
	},
	buttonText: {
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 17,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 20,
		letterSpacing: 0,
		alignSelf: 'center',
		color: '#000000',
	},
	deleteOverlay: {
		width: '72%',
		height: '15%',

		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#000000',
		backgroundColor: '#ffffff',
	},
	deleteOverlayContainer: {
		flexDirection: 'column',
	},
	deleteOverlayTitleContainer: {
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	deleteOverlayButtonContainer: {
		flexDirection: 'row',
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	deleteOverlayTitleText: {
		// fontFamily: "AppleSDGothicNeo",
		fontSize: 17,
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 22,
		letterSpacing: -0.54,
		textAlign: 'center',
		color: '#000000',
	},
	deleteOverlayButton: {
		backgroundColor: '#ffffff',
		width: 130,
	},
	deleteOverlayButtonText: {
		// fontFamily: 'AppleSDGothicNeo',
		fontSize: 17,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: 'center',
		justifyContent: 'center',
		color: '#000000',
	},
	loadingComponentContainer: {
		flex: 1,
		justifyContent: 'center',
	},
});

export default ProductDetailInfoPageStyles;
