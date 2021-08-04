import React from 'react';
import BottomNav from './src/navigations/bottom-nav/BottomNav';
import ProductDetailInfoPage from './src/components/screens/product-detail-info-page/ProductDetailInfoPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StackParamList } from './src/navigations/stack-param-list/StackParamList';
import ProductInfoInput from './src/components/screens/product-info-input/productInfoInput';

import BarcodeRecognitionComplete from './src/components/screens/barcode-recognition-complete/BarcodeRecognitionComplete';
import { configure } from 'axios-hooks';
import axios from './src/utils/axios';

import { SafeAreaView, StyleSheet } from 'react-native';
import CameraUploadScreen from './src/components/screens/camera/CameraUploadScreen';
import HowToUpload from './src/components/screens/camera/HowToUpload';
import ConfirmImage from './src/components/organisms/camera/ConfirmImage';
import HowToDetailUpload from './src/components/screens/camera/HowToDetailUpload';
import UploadDetailPhoto from './src/components/organisms/camera/UploadDetailPhoto';
import ConfirmDetailImage from './src/components/organisms/camera/ConfirmDetailImage';
import { ScannerScreen } from './src/components/screens/barcode/ScannerScreen';

/* IOS stack 이동 animation options */
const TransitionScreenOptions = {
	...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator<StackParamList>();
configure({ axios: axios.axiosInstance });
const App = () => {
	return (
		<SafeAreaView style={styles.testContainer}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={TransitionScreenOptions}>
					<Stack.Screen
						name="메인화면"
						component={BottomNav}
						options={{ headerShown: false }}
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
							headerShown: true, // test 를 위해 header 를 보이게 함
						}}
					/>
					<Stack.Screen
						name="상품 정보 입력"
						component={ProductInfoInput}
						options={{
							headerShown: true, // test 를 위해 header 를 보이게 함
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
	testContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ffff',
	},
	testText: {
		fontSize: 40,
		textAlign: 'center',
	},
	headerStyle: {
		fontSize: 22,
		fontWeight: '600',
		fontStyle: 'normal',
	},
});

export default App;
