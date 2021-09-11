import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { useNavigation } from '@react-navigation/core';
import useAxios from 'axios-hooks';
import moment from 'moment';
import { OrderDetailStackParams } from '../order-detail/OrderDetail';
export interface OrderItemProps {
	isProgress: boolean;
	time: number;
	orderParent: OrderParentRes;
	handleOpen: (state: boolean) => void;
}
export interface PickUpTimeOverlayProps {
	isVisible: boolean;
	pickUpTime: number;
	handleOpen: (state: boolean) => void;
	handlePickUpTime: (isUp: number) => void;
}
export interface OrderParentRes {
	order_parent_id: number;

	order_number: string;

	order_created_at: Date;

	order_status: number;

	order_total_price: number;

	order_is_pickup: boolean;

	store_id: number;

	order_completed_at: Date;

	order_pay_method: string;

	store_name: string;
}

export interface OrderChildRes {
	order_id: number;
	order_number: string; // 주문 번호
	order_product_name: string; // 주문 상품명
	order_unit_price: number; // 상품 한 개의 가격
	order_quantity: number; // 주문 수량
}
export interface UpdateOrderReq {
	order_number: string | undefined;
	order_status: number;
}
export default function OrderList(): JSX.Element {
	const list = [
		{
			order_parent_id: 'number',
			order_number: 'string', // 주문 번호
			order_created_at: 'Date', // 주문 생성 일시
			order_status: 'number',
			order_total_price: 'number', // 주문 총액

			order_is_pickup: 'boolean',
			store_id: 'number', // 점포 id

			order_completed_at: 'Date',
			order_pay_method: 'string', // 결제 방식

			store_name: 'string',
		},
	];
	const naviagtion = useNavigation();
	const [pickUpModal, setPickUpModal] = React.useState(false);
	const handlePickUpModal = (st: boolean) => {
		setPickUpModal(st);
	};

	const [pickUpTime, setPickUpTime] = React.useState(5);
	const handlePickUpTime = (isUp: number) => {
		setPickUpTime(isUp);
	};
	const [{ data: orderParentData, loading: orderParentLoading }, executeOrderParent] = useAxios<
		OrderParentRes[]
	>(
		{
			method: 'GET',
			url: '/order/get',
		},
		{ manual: true },
	);
	//const [orderListData, setListData] = useState<any>(list);
	useEffect(() => {
		executeOrderParent()
			.then(res => {
				// console.log(res.data);
				//setListData(res.data);
			})
			.catch(err => {
				console.log(err.message);
			});
	}, []);

	/* 각 주문 리스트 아이템  */
	const OrderItem = (props: OrderItemProps) => {
		const { isProgress, time, handleOpen, orderParent } = props;
		const [{ data: orderChildData, loading: orderChildLoading }, executeOrderChild] = useAxios<
			OrderChildRes[]
		>(
			{
				method: 'GET',
				url: `/order/get/${orderParent.order_number}`,
			},
			{ manual: true },
		);
		useEffect(() => {
			executeOrderChild()
				.then(res => {
					// console.log(res.data);
					//setListData(res.data);
				})
				.catch(err => {
					console.log(err.message);
				});
		}, []);
		const updateOrderReq1: UpdateOrderReq = {
			order_number: orderParent.order_number,
			order_status: 1,
		};
		const [, excuteUpdateOrder1] = useAxios<any>(
			{
				method: 'POST',
				url: `/order/update/`,
				data: updateOrderReq1,
			},
			{ manual: true },
		);
		const handelUpdateOrder1 = () => {
			excuteUpdateOrder1().then(() => {
				executeOrderParent();
			});
		};
		const orderTime = moment(orderParent.order_created_at).format('HH:mm');
		const title =
			orderChildData &&
			orderChildData[0].order_product_name + ' 외 ' + orderChildData?.length + '건';

		const orderState = orderParent.order_number;
		const totalPrice = orderParent.order_total_price;

		const OrderProgress = (): JSX.Element => {
			return (
				<TouchableOpacity style={styles.proRoot} onPress={() => handelUpdateOrder1()}>
					<AnimatedCircularProgress fill={100} size={52} width={4} tintColor="#000000">
						{fill => (
							<View style={[]}>
								<View style={styles.circleRoot}>
									<Text style={styles.timeText}>{`${time}분`}</Text>
								</View>
							</View>
						)}
					</AnimatedCircularProgress>
					<Text style={styles.stateText}>접수완료</Text>
				</TouchableOpacity>
			);
		};

		return (
			<TouchableOpacity
				style={styles.rootChild}
				onPress={() => {
					const OrderDetailParam: OrderDetailStackParams = {
						order_number: orderParent.order_number,
						orderChild: orderChildData,
						orderParent: orderParent,
					};
					naviagtion.navigate('주문 상세 내역', OrderDetailParam);
				}}
			>
				<View style={{ flex: 3 }}>
					<Text style={styles.text1}>{`접수요청: ${orderTime}`}</Text>

					<Text style={styles.text2}>{title}</Text>

					<Text style={styles.text3}>{`${orderState} ${totalPrice}원`}</Text>
				</View>

				<View style={styles.sub}>
					{!isProgress ? (
						<TouchableOpacity onPress={() => handelUpdateOrder1()}>
							<Image
								source={require('../../../../assets/icons/order/order-start.png')}
								style={styles.orderStartImage}
							/>
						</TouchableOpacity>
					) : (
						<OrderProgress />
					)}
				</View>
			</TouchableOpacity>
		);
	};

	/* 픽업 시간 설정 모달  */
	const PickUpTimeOverlay = (props: PickUpTimeOverlayProps) => {
		const { isVisible, handleOpen, handlePickUpTime } = props;

		const [pickUpTime, setPickUpTime] = React.useState(5);
		const handlePickUpTimeInner = (isUp: boolean) => {
			if (isUp) {
				setPickUpTime(pickUpTime + 5);
			} else {
				if (pickUpTime >= 5) {
					setPickUpTime(pickUpTime - 5);
				}
			}
		};

		return (
			<Overlay isVisible={isVisible} onBackdropPress={() => handleOpen(false)}>
				<View style={styles.overlayRoot}>
					<Text style={styles.overlayText1}>픽업 준비 시간을 선택해주세요.</Text>
					<Text style={styles.overlayText2}>시간은 5분씩 추가, 삭제가 가능해요.</Text>
					<View style={styles.overlayButtonGroup}>
						<TouchableOpacity
							style={[styles.buttonBack, { marginRight: 24 }]}
							onPress={() => {
								handlePickUpTimeInner(false);
							}}
						>
							<Image
								source={require('../../../../assets/icons/order/minus.png')}
								style={styles.overlayMinus}
							/>
						</TouchableOpacity>

						<Text style={styles.overlayText3}>{`${pickUpTime}분`}</Text>

						<TouchableOpacity
							style={[styles.buttonBack, { marginLeft: 24 }]}
							onPress={() => {
								handlePickUpTimeInner(true);
							}}
						>
							<Image
								source={require('../../../../assets/icons/order/plus.png')}
								style={styles.overlayPlus}
							/>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						style={styles.overlayButton}
						onPress={() => {
							handlePickUpTime(pickUpTime);
							handleOpen(false);
						}}
					>
						<Text style={styles.overlayButtonText}>선택 완료</Text>
					</TouchableOpacity>
				</View>
			</Overlay>
		);
	};

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.textRoot}>
				<Text style={styles.title}>주문 내역</Text>
			</View>

			<ScrollView style={styles.scrollRoot}>
				{/* <OrderItem time={pickUpTime} isProgress={false} handleOpen={handlePickUpModal} />
				<OrderItem time={30} isProgress={true} handleOpen={handlePickUpModal} /> */}
				{orderParentData &&
					orderParentData.length > 0 &&
					orderParentData?.map(each => (
						<OrderItem
							key={each.order_parent_id}
							time={pickUpTime}
							isProgress={each.order_status !== 0}
							handleOpen={handlePickUpModal}
							orderParent={each}
						/>
					))}
			</ScrollView>

			<PickUpTimeOverlay
				isVisible={pickUpModal}
				handleOpen={handlePickUpModal}
				pickUpTime={pickUpTime}
				handlePickUpTime={handlePickUpTime}
			/>
		</SafeAreaView>
	);
}
