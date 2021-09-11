import { RouteProp, useRoute } from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../../../../navigations/stack-param-list/StackParamList';
import { OrderChildRes, OrderParentRes, UpdateOrderReq } from '../order-list/OrderList';
import styles from './styles';
import moment from 'moment';
export interface OrderDetailStackParams {
	order_number: string | undefined;
	orderChild: OrderChildRes[] | undefined;
	orderParent: OrderParentRes | undefined;
}

export interface EachProductProps {
	orderChild: OrderChildRes;
}

export default function OrderDetail(): JSX.Element {
	const route = useRoute<RouteProp<StackParamList, '주문 상세 내역'>>();
	const updateOrderReq2: UpdateOrderReq = {
		order_number: route.params.order_number,
		order_status: 2,
	};

	const [, excuteUpdateOrder2] = useAxios<any>(
		{
			method: 'POST',
			url: `/order/update/`,
			data: updateOrderReq2,
		},
		{ manual: true },
	);

	const handelUpdateOrder2 = () => {
		excuteUpdateOrder2();
	};
	const EachProduct = (props: EachProductProps) => {
		return (
			<View style={styles.eachRoot}>
				<Text style={[styles.text1, styles.flexWithCenter, { flex: 2 }]}>
					{props.orderChild.order_product_name}
				</Text>
				<Text style={[styles.text1, styles.flexWithCenter]}>
					{props.orderChild.order_quantity}개
				</Text>
				<Text style={[styles.text1, styles.flexWithCenter]}>
					{props.orderChild.order_unit_price}원
				</Text>
			</View>
		);
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: '#f4f4f4',
			}}
		>
			{/* 접수 요청 */}
			<View style={styles.root1}>
				<View style={styles.sub1}>
					<Image
						source={require('../../../../assets/icons/order/house.png')}
						style={styles.img}
					/>
					<Text style={styles.textOrder}>접수 요청</Text>
				</View>
				<Text>
					상품주문일{' '}
					{moment(route.params.orderParent?.order_created_at).format('YYYY/MM/DD')}
				</Text>
			</View>

			{/* 주문 상품 내역 */}
			<ScrollView style={styles.scrollRoot}>
				<View style={styles.sub2}>
					<Text style={[styles.text1, { marginBottom: 16 }]}>주문상품</Text>
					<Text style={[styles.text1, { marginBottom: 6 }]}>
						{route.params.orderChild
							? route.params.orderChild[0].order_product_name
							: ''}{' '}
						외 2건
					</Text>
					<Text style={[styles.text2, { marginBottom: 6 }]}>주문일시 </Text>
					<Text style={[styles.text2, { marginBottom: 6 }]}>
						{moment(route.params.orderParent?.order_created_at).format('hh:mm')}{' '}
					</Text>
				</View>
				{route.params.orderChild?.map(each => {
					<EachProduct orderChild={each} />;
				})}

				<View style={styles.sub3}>
					<Text style={[styles.text1, { marginBottom: 24 }]}>결제금액</Text>
					<View style={[styles.sub4]}>
						<Text style={[styles.text1]}>총 주문금액</Text>
						<Text style={[styles.text1]}>
							{route.params.orderParent?.order_total_price}원
						</Text>
					</View>
					<View style={[styles.sub4]}>
						<Text>결제방법</Text>
						<Text>{route.params.orderParent?.order_pay_method}</Text>
					</View>
				</View>
			</ScrollView>

			{/* 버튼 그룹 */}
			<View style={styles.root3}>
				<TouchableOpacity
					style={styles.button1}
					onPress={() => {
						handelUpdateOrder2();
					}}
				>
					<Text style={styles.buttonText1}>접수 완료</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button2}>
					<Text style={styles.buttonText1}>주문 거부하기</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
