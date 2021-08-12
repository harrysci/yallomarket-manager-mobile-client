import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';

import ProductListComponent from '../../organisms/product-list/ProductListComponent';
import UpContainer from '../../organisms/product-list/UpContainer';
import YellowScreenCenterLoading from '../../atoms/loading/yellowScreenCenterLoading';

import styles from './style';

import ProductListContext from '../../../utils/contexts/product-list-context/ProductListContext';

export interface deleteProps {
	overState: boolean;
	handleDeleteOverlay: () => void;
}

export default function ListScreen(): JSX.Element {
	const { reload, loading } = React.useContext(ProductListContext);

	const [overState, setOverState] = useState<boolean>(false);

	/*삭제 handler*/
	const handleDeleteOverlay = () => {
		setOverState(!overState);
		/*상세 정보 페이지의 delete state도 변경*/
		if (reload) reload();
	};

	const [updateCompleteOverlayVisible, setUpdateCompleteOverlayVisible] =
		React.useState<boolean>(false);

	/*수정 handler*/
	const handleUpdateCompleteOverlay = () => {
		setUpdateCompleteOverlayVisible(!updateCompleteOverlayVisible);

		if (reload) reload();
	};

	return (
		<View style={styles.upContainer}>
			{/* 상단 컨테이너 섹션 */}
			<UpContainer />

			{/* 상품 리스트 섹션 */}
			<ProductListComponent
				overState={overState}
				handleDeleteOverlay={handleDeleteOverlay}
				handleUpdateCompleteOverlay={handleUpdateCompleteOverlay}
			/>

			{/* 수정 완료 오버레이 */}
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
								source={require('../../../assets/images/product-list/4114.png')}
								style={styles.updateCompleteExitImage}
							/>
						</TouchableOpacity>

						<View style={styles.updateCompleteImageTextContainer}>
							<Image
								source={require('../../../assets/images/product-list/299.png')}
								style={styles.updateCompleteCheckImage}
							/>
							<Text style={styles.updateCompleteText}>상품정보 수정 완료!</Text>
						</View>
					</View>
				</View>
			</Overlay>

			{/* 삭제 완료 오버레이 */}
			<Overlay
				isVisible={overState === true ? true : false}
				onBackdropPress={handleDeleteOverlay}
				overlayStyle={styles.updateCompleteOverlay}
			>
				<View style={styles.updateCompleteContainer}>
					<View style={styles.updateCompleteContainer}>
						<TouchableOpacity
							onPress={handleDeleteOverlay}
							style={styles.updateCompleteTouchableOpacity}
						>
							<Image
								source={require('../../../assets/images/product-list/4114.png')}
								style={styles.updateCompleteExitImage}
							/>
						</TouchableOpacity>

						<View style={styles.updateCompleteImageTextContainer}>
							<Image
								source={require('../../../assets/images/product-list/299.png')}
								style={styles.updateCompleteCheckImage}
							/>
							<Text style={styles.updateCompleteText}>상품 삭제 정보 삭제 완료!</Text>
						</View>
					</View>
				</View>
			</Overlay>

			{loading && <YellowScreenCenterLoading loading={loading} />}
		</View>
	);
}
