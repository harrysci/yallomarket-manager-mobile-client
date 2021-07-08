import React from 'react';
import BottomNav from './src/navigations/BottomNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StackParamList } from './src/navigations/stack-param-list/StackParamList';
const Stack = createStackNavigator<StackParamList>();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator >
				<Stack.Screen
					name="메인화면"
					component={BottomNav}
					options={{ headerShown: false }}
				/>
				{/* <Stack.Screen
					name="상품 상세 정보"
					component={ProductDetail}
					options={{ headerTitle: '' }}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
