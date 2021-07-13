import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StackParamList } from './src/navigations/stack-param-list/StackParamList';
import ProductInfoInput from './src/components/screens/product-info-input/productInfoInput';

import Test from './src/components/screens/home/Test';
import BarcodeRecognitionComplete from './src/components/screens/barcode-recognition-complete/BarcodeRecognitionComplete';
import { configure } from 'axios-hooks';
import axios from './src/utils/axios';

/* IOS stack 이동 animation options */
const TransitionScreenOptions = {
	...TransitionPresets.SlideFromRightIOS,
};
const Stack = createStackNavigator<StackParamList>();

configure({ axios: axios.axiosInstance });

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={TransitionScreenOptions}>
				<Stack.Screen name="테스트" component={Test} />
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
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
