import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './src/navigations/stack-param-list/StackParamList';
import Test from './src/components/screens/home/Test';
import BarcodeRecognitionComplete from './src/components/screens/barcode-recognition-complete/BarcodeRecognitionComplete';
import { configure } from 'axios-hooks';
import axios from './src/utils/axios';

const Stack = createStackNavigator<StackParamList>();

configure({ axios: axios.axiosInstance });

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="테스트" component={Test} />
				<Stack.Screen
					name="바코드 인식 완료"
					component={BarcodeRecognitionComplete}
					options={
						{
							// headerShown: false,
						}
					}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
