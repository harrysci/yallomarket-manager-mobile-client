import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';
import { GetImageProductListRes } from '../../screens/home/dto/GetImageProductListDto';
import styles from './style/style';

export interface OneProductComponentProps {
	productData: GetImageProductListRes;
	executeGetHandler: () => void;
	handleDeleteOverlay: ()=> void;
	handleUpdateCompleteOverlay: () => void;
}

export interface Props {
	product: GetImageProductListRes;
	storeName: string;
	ownerId: number;
	executeGetHandler: () => void;
	handleSetDeleteState: ()=>void;
	handleUpdateCompleteOverlay: () => void;
}

const OneProductComponent = (props: OneProductComponentProps) => {
	const navigation = useNavigation();
	const { productData, executeGetHandler,handleDeleteOverlay  } = props;

	const ProductParams: Props = {
		product: productData,
		storeName: '경동빅마트',
		ownerId: 1,
		executeGetHandler: executeGetHandler,
		handleSetDeleteState: handleDeleteOverlay,
		handleUpdateCompleteOverlay: props.handleUpdateCompleteOverlay,
	};

	return (
		<TouchableOpacity style={styles.item_container}
		onPress={() => {
			navigation.navigate('상품 상세 정보', ProductParams);
		}}>
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
				<View style={styles.last_containner}>
					<Text style={styles.product_price}>{productData.productCurrentPrice}원</Text>
					<View
						style={styles.go_detail}
						
					>
						<Text>상세보기</Text>
						<Image
							style={styles.go_detail_image}
							source={require('../../../assets/icons/product-list/icon_forward.png')}
						></Image>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default OneProductComponent;
