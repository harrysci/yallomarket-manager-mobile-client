import React from 'react';
import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavStyles from './styles/BottomNavStyles';

import ListScreen from '../../components/screens/home/ListScreen';
import { ScannerScreen } from '../../components/screens/barcode/ScannerScreen';

import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../stack-param-list/StackParamList';
import ProductListContext, {
	useProductList,
} from '../../utils/contexts/product-list-context/ProductListContext';
import OrderList from '../../components/screens/order/order-list/OrderList';
// import BarcodeRecognitionComplete from '../../components/screens/barcode-recognition-complete/BarcodeRecognitionComplete';

const Tab = createBottomTabNavigator();

const BottomNav = (): JSX.Element => {
	const route = useRoute<RouteProp<StackParamList, '메인화면'>>();
	const { data, loading, error, reload } = useProductList();

	return (
		<ProductListContext.Provider value={{ data, loading, error, reload }}>
			<Tab.Navigator
				initialRouteName={route.params ? route.params.routeName : '바코드 스캔'}
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
						} else if (route.name === '주문 내역') {
							if (focused) {
								return (
									<Image
										style={BottomNavStyles.productListTabImage}
										source={require('../../assets/icons/tabs/order_active.png')}
									/>
								);
							} else {
								return (
									<Image
										style={BottomNavStyles.productListTabImage}
										source={require('../../assets/icons/tabs/order_inactivate.png')}
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
					labelStyle:
						Platform.OS === 'android'
							? BottomNavStyles.androidLabelStyle
							: BottomNavStyles.iosLabelStyle,
				}}
			>
				<Tab.Screen name="바코드 스캔" component={ScannerScreen} />
				<Tab.Screen name="주문 내역" component={OrderList} />
				<Tab.Screen
					name="등록 목록"
					component={ListScreen}
					listeners={{
						tabPress: () => {
							if (reload) {
								reload();
							}
						},
					}}
				/>
			</Tab.Navigator>
		</ProductListContext.Provider>
	);
};

export default BottomNav;
