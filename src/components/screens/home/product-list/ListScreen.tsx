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

	console.log('aaaaa');
	console.log(route.params);

	const [updateCompleteOverlayVisible, setUpdateCompleteOverlayVisible] =
		React.useState<boolean>(false);
	const handleUpdateCompleteOverlay = () => {
		setUpdateCompleteOverlayVisible(!updateCompleteOverlayVisible);
	};

	return (
		<SafeAreaView>
			<View style={styles.upContainer}>
				<UpContainer />
				<ProductListComponent handleUpdateCompleteOverlay={handleUpdateCompleteOverlay} />
			</View>

			<Overlay
				isVisible={updateCompleteOverlayVisible}
				onBackdropPress={handleUpdateCompleteOverlay}
				overlayStyle={styles.updateCompleteOverlay}
			>
				<View style={styles.updateCompleteContainer}>
					<View style={styles.updateCompleteContainer}>
						<TouchableOpacity
							onPress={handleUpdateCompleteOverlay}
							style={styles.updateCompleteTouchableOpacity}
						>
							<Image
								source={require('../../../../assets/images/product-list/4114.png')}
								style={styles.updateCompleteExitImage}
							/>
						</TouchableOpacity>

						<View style={styles.updateCompleteImageTextContainer}>
							<Image
								source={require('../../../../assets/images/product-list/299.png')}
								style={styles.updateCompleteCheckImage}
							/>
							<Text style={styles.updateCompleteText}>상품정보 수정 완료!</Text>
						</View>
					</View>
				</View>
			</Overlay>
		</SafeAreaView>
	);
}
