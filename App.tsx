import React from 'react';
import BottomNav from './src/navigations/bottom-nav/BottomNav';
import ProductDetailInfoPage from './src/components/screens/product-detail-info-page/ProductDetailInfoPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './src/navigations/stack-param-list/StackParamList';
import Test from './src/components/screens/home/Test';
import ProductInfoInput from './src/components/screens/product-info-input/productInfoInput';

const Stack = createStackNavigator<StackParamList>();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
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
				<Stack.Screen name="상품 정보 입력" component={ProductInfoInput} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
