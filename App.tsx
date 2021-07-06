import React from 'react';
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
				<Stack.Screen name="테스트" component={Test} />
				<Stack.Screen name="상품 정보 입력" component={ProductInfoInput} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
