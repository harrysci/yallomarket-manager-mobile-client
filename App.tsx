import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import axios from './src/utils/axios';
import { configure } from 'axios-hooks';

import BottomNav from './src/navigations/bottom-nav/BottomNav';
import { StackParamList } from './src/navigations/stack-param-list/StackParamList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import BarcodeRecognitionComplete from './src/components/screens/barcode-recognition-complete/BarcodeRecognitionComplete';

import CameraUploadScreen from './src/components/screens/camera/CameraUploadScreen';
import HowToUpload from './src/components/screens/camera/HowToUpload';
import ConfirmImage from './src/components/organisms/camera/ConfirmImage';
import HowToDetailUpload from './src/components/screens/camera/HowToDetailUpload';
import UploadDetailPhoto from './src/components/organisms/camera/UploadDetailPhoto';
import ConfirmDetailImage from './src/components/organisms/camera/ConfirmDetailImage';

import ProductInfoInput from './src/components/screens/product-info-input/productInfoInput';
import ProductDetailInfoPage from './src/components/screens/product-detail-info-page/ProductDetailInfoPage';
import { ScannerScreen } from './src/components/screens/barcode/ScannerScreen';

/* IOS stack 이동 animation options */
const TransitionScreenOptions = {
	...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator<StackParamList>();
configure({ axios: axios.axiosInstance });

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={TransitionScreenOptions}>
					<Stack.Screen
						name="메인화면"
						component={BottomNav}
						options={{ headerShown: false, title: ' ' }}
					/>
					<Stack.Screen
						name="상품 상세 정보"
						component={ProductDetailInfoPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="바코드 스캔" component={ScannerScreen} />

					<Stack.Screen
						name="바코드 인식 완료"
						component={BarcodeRecognitionComplete}
						options={{
							headerShown: false, // test 를 위해 header 를 보이게 함
						}}
					/>
					<Stack.Screen
						name="상품 정보 입력"
						component={ProductInfoInput}
						options={{
							headerShown: true, // test 를 위해 header 를 보이게 함
							title: '상품 정보입력',
							headerBackTitle: ' ',
						}}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="1단계"
						component={HowToUpload}
					/>
					<Stack.Screen
						name="대표 이미지 촬영"
						options={{ title: '대표 이미지 촬영' }}
						component={CameraUploadScreen}
					/>
					<Stack.Screen
						name="대표 이미지 확인"
						options={{ title: '대표 이미지 촬영' }}
						component={ConfirmImage}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="2단계"
						component={HowToDetailUpload}
					/>
					<Stack.Screen
						name="상세 이미지 촬영"
						options={{ title: '상세 이미지 촬영' }}
						component={UploadDetailPhoto}
					/>
					<Stack.Screen
						name="상세 이미지 확인"
						options={{ title: '상세 이미지 촬영' }}
						component={ConfirmDetailImage}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ffff',
	},
});

export default App;
