import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import DeleteOverComponent from '../../../organisms/product-list/DeleteOverComponent';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { StackParamList } from '../../../../navigations/stack-param-list/StackParamList';
import ProductListComponent from '../../../organisms/product-list/ProductListComponent';
import UpContainer from '../../../organisms/product-list/UpContainer';
import styles from './style';

export interface deleteProps {
	overState: boolean;
	handleDeleteOverlay: ()=> void;
}


export default function ListScreen(): JSX.Element {
	const [overState,setOverState]=useState<boolean>(false);
	/*삭제 handler*/
  const handleDeleteOverlay=()=>{
    setOverState(!overState);
    /*상세 정보 페이지의 delete state도 변경*/
  };
	const route = useRoute<RouteProp<StackParamList, '메인화면'>>();


	const [updateCompleteOverlayVisible, setUpdateCompleteOverlayVisible] =
		React.useState<boolean>(false);
	/*수정 handler*/
	const handleUpdateCompleteOverlay = () => {
		setUpdateCompleteOverlayVisible(!updateCompleteOverlayVisible);
	};

	return (
		<View style={styles.upContainer}>
				<UpContainer />
				<ProductListComponent overState={overState} handleDeleteOverlay={handleDeleteOverlay} handleUpdateCompleteOverlay={handleUpdateCompleteOverlay}/>
				

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

			{/*  */}
			<Overlay
				isVisible={overState===true?true:false}
				onBackdropPress={handleDeleteOverlay}
				overlayStyle={styles.deleteOver}
			>
        <TouchableOpacity style={styles.xbutton} onPress={handleDeleteOverlay}>
          
          <Image
            style={{width:16, height:16}}
            source={require('../../../../assets/images/product-list/xbutton.png')}
            />
          </TouchableOpacity>
          
        
        <View style={styles.deleteView}>
          <Image
            source={require('../../../../assets/images/product-list/deletecheck.png')}
            style={{ width:32, height:32}}/>
          <Text style={styles.deleteText}>상품 삭제 정보 삭제 완료!</Text>
        </View>
        
			</Overlay>
			{/*  */}
		</View>
	);
}
