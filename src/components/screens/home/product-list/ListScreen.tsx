import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { StackParamList } from '../../../../navigations/stack-param-list/StackParamList';
import ProductListComponent from '../../../organisms/product-list/ProductListComponent';
import UpContainer from '../../../organisms/product-list/UpContainer';
import styles from './style';

export default function ListScreen(): JSX.Element {
	const route = useRoute<RouteProp<StackParamList, '메인화면'>>();
	console.log(route.params);
	return (
		<SafeAreaView>
			<View style={styles.upContainer}>
				<UpContainer />
				<ProductListComponent />
			</View>

			<Overlay
				isVisible={route.params ? route.params.updateSuccess : false}
				// onBackdropPress={handleUpdateCompleteOverlay}
				// overlayStyle={styles.updateCompleteOverlay}
			>
				<TouchableOpacity
					style={{
						alignSelf: 'flex-end',
					}}
				>
					{/* <Image
						// source={require('../../../assets/images/product-detail-info/4114.png')}
						style={{ width: 16, height: 16, position: 'absolute' }}
					/> */}
				</TouchableOpacity>
				<View
				// style={styles.updateCompleteContainer}
				>
					{/* <Image
						source={require('../../../assets/images/product-detail-info/299.png')}
						// style={styles.updateCompleteCheckImage}
					/> */}
					<Text
					// style={styles.updateCompleteText}
					>
						상품정보 수정 완료!
					</Text>
				</View>
			</Overlay>
		</SafeAreaView>
	);
}
