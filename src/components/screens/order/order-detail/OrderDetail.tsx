import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../../../../navigations/stack-param-list/StackParamList';
import { OrderChildRes, OrderParentRes } from '../order-list/OrderList';
import styles from './styles';

export interface OrderDetailStackParams {
	orderParentId: number | undefined;
}

export default function OrderDetail(): JSX.Element {
	const route = useRoute<RouteProp<StackParamList, '주문 상세 내역'>>();
	const EachProduct = () => {
		return (
			<View style={styles.eachRoot}>
				<Text style={[styles.text1, styles.flexWithCenter, { flex: 2 }]}>햇감자 1kg</Text>
				<Text style={[styles.text1, styles.flexWithCenter]}>1개</Text>
				<Text style={[styles.text1, styles.flexWithCenter]}>4,400원</Text>
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
				<Text>상품주문일 2021/06/04</Text>
			</View>

			{/* 주문 상품 내역 */}
			<ScrollView style={styles.scrollRoot}>
				<View style={styles.sub2}>
					<Text style={[styles.text1, { marginBottom: 16 }]}>주문상품</Text>
					<Text style={[styles.text1, { marginBottom: 6 }]}>적양배추 1/2통 외 2건</Text>
					<Text style={[styles.text2, { marginBottom: 6 }]}>주문일시 </Text>
					<Text style={[styles.text2, { marginBottom: 6 }]}>주문번호 </Text>
				</View>

				<EachProduct />
				<EachProduct />
				<EachProduct />
				<EachProduct />

				<View style={styles.sub3}>
					<Text style={[styles.text1, { marginBottom: 24 }]}>결제금액</Text>
					<View style={[styles.sub4]}>
						<Text style={[styles.text1]}>총 주문금액</Text>
						<Text style={[styles.text1]}>6,870원</Text>
					</View>
					<View style={[styles.sub4]}>
						<Text>결제방법</Text>
						<Text>계좌이체</Text>
					</View>
				</View>
			</ScrollView>

			{/* 버튼 그룹 */}
			<View style={styles.root3}>
				<TouchableOpacity style={styles.button1}>
					<Text style={styles.buttonText1}>접수 완료</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button2}>
					<Text style={styles.buttonText1}>주문 거부하기</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
