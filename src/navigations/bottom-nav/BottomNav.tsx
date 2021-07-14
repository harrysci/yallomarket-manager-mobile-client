import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavStyles from './styles/BottomNavStyles';

import ListScreen from '../../components/screens/home/product-list/ListScreen';
import { ScannerScreen } from '../../components/screens/barcode/ScannerScreen';
import BarcodeRecognitionComplete from '../../components/screens/barcode-recognition-complete/BarcodeRecognitionComplete';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../stack-param-list/StackParamList';

const Tab = createBottomTabNavigator();

const BottomNav = (): JSX.Element => {
	
	return (
		// <NavigationContainer>
		<Tab.Navigator
			
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					if (route.name === '바코드 스캔') {
						if (focused) {
							return (
								<Image
									style={BottomNavStyles.barcodeScanTabImage}
									source={require('../../assets/icons/tabs/scan_active.png')}
								/>
							);
						} else {
							return (
								<Image
									style={BottomNavStyles.barcodeScanTabImage}
									source={require('../../assets/icons/tabs/scan_inactive.png')}
								/>
							);
						}
					} else if (route.name === '등록 목록') {
						if (focused) {
							return (
								<Image
									style={BottomNavStyles.productListTabImage}
									source={require('../../assets/icons/tabs/list_active.png')}
								/>
							);
						} else {
							return (
								<Image
									style={BottomNavStyles.productListTabImage}
									source={require('../../assets/icons/tabs/list_inactive.png')}
								/>
							);
						}
					}
				},
			})}
			tabBarOptions={{
				activeTintColor: '#000000',
				inactiveTintColor: '#B7B7B7',
				style: BottomNavStyles.tabBar,
			}}
		>
			{/* 테스트를 위해 주석처리  <Tab.Screen name="바코드 스캔" component={ScannerScreen} /> */}
			<Tab.Screen name="바코드 스캔" component={BarcodeRecognitionComplete} />
			<Tab.Screen name="등록 목록" component={ListScreen} />
		</Tab.Navigator>
		// </NavigationContainer>
	);
};

export default BottomNav;
