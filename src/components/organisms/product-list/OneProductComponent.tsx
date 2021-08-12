import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';

import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { ProductDetailInfoPageParams } from '../../../navigations/stack-params/ProductDetailInfoPageParams';
import { GetImageProductListRes } from '../../screens/home/dto/GetImageProductListDto';

import styles from './style/style';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']); // Ignore log notification by message

export interface OneProductComponentProps {
	productData: GetImageProductListRes;
	executeGetHandler: () => void;
	handleDeleteOverlay: () => void;
	handleUpdateCompleteOverlay: () => void;
}

const OneProductComponent = (props: OneProductComponentProps) => {
	const navigation = useNavigation();
	const { productData, executeGetHandler, handleDeleteOverlay, handleUpdateCompleteOverlay } =
		props;

	const productParams: ProductDetailInfoPageParams = {
		product: productData,
		storeName: '경동빅마,트',
		ownerId: 1,
		executeGetHandler: executeGetHandler,
		handleSetDeleteState: handleDeleteOverlay,
		handleUpdateCompleteOverlay: handleUpdateCompleteOverlay,
	};

	return (
		<TouchableOpacity
			style={styles.item_container}
			onPress={() => {
				navigation.navigate('상품 상세 정보', productParams);
			}}
		>
			<View style={styles.image_container}>
				<Image
					style={styles.product_image}
					source={{
						uri: productData.representativeProductImage
							? productData.representativeProductImage
							: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MThfMTg1%2FMDAxNjIzOTQ2NjUxOTc0.wUfnn86EWZvVnac4gj5kvruZD3pflMQRxLNbRqC-jhYg.RPT3uPkhDvI-F_ApoizqYiy9tEW55ZP3jRwMUK9SNUUg.JPEG.ana_ad%2FKakaoTalk_20210608_104228055_03.jpg&type=ofullfill340_600',
					}}
				></Image>
			</View>
			<View style={styles.detail_container}>
				<Text style={styles.barcode}>바코드 {productData.productBarcode}</Text>

				<Text style={styles.product_name}>{productData.productName}</Text>

				<View style={styles.last_container}>
					<View style={styles.priceContainer}>
						<Text style={styles.product_price}>
							{productData.productCurrentPrice}원
						</Text>
					</View>
					<View style={styles.go_detail}>
						<Text style={styles.go_detail_text}>상세보기</Text>
						<Image
							style={styles.go_detail_image}
							source={require('../../../assets/icons/product-list/icon_forward.png')}
						/>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default OneProductComponent;
