import React from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { useNavigation } from '@react-navigation/core';

export interface OrderItemProps {
	isProgress: boolean;
	time: number;

	handleOpen: (state: boolean) => void;
}
export interface PickUpTimeOverlayProps {
	isVisible: boolean;
	pickUpTime: number;
	handleOpen: (state: boolean) => void;
	handlePickUpTime: (isUp: number) => void;
}

export default function OrderList(): JSX.Element {
	const naviagtion = useNavigation();
	const [pickUpModal, setPickUpModal] = React.useState(false);
	const handlePickUpModal = (st: boolean) => {
		setPickUpModal(st);
	};

	const [pickUpTime, setPickUpTime] = React.useState(5);
	const handlePickUpTime = (isUp: number) => {
		setPickUpTime(isUp);
	};

	/* 각 주문 리스트 아이템  */
	const OrderItem = (props: OrderItemProps) => {
		const { isProgress, time, handleOpen } = props;
		const orderTime = '14:01';
		const title = '적양배추 1/2통 외 2건';
		const orderState = '결제 완료';
		const totalPrice = 52000;

		const OrderProgress = (): JSX.Element => {
			return (
				<View style={styles.proRoot}>
					<AnimatedCircularProgress fill={80} size={52} width={4} tintColor="#000000">
						{fill => (
							<View style={[]}>
								<View style={styles.circleRoot}>
									<Text style={styles.timeText}>{`${time}분`}</Text>
								</View>
							</View>
						)}
					</AnimatedCircularProgress>
					<Text style={styles.stateText}>접수완료</Text>
				</View>
			);
		};

		return (
			<TouchableOpacity
				style={styles.rootChild}
				onPress={() => {
					naviagtion.navigate('주문 상세 내역');
				}}
			>
				<View style={{ flex: 3 }}>
					<Text style={styles.text1}>{`접수요청: ${orderTime}`}</Text>

					<Text style={styles.text2}>{title}</Text>

					<Text style={styles.text3}>{`${orderState} ${totalPrice}원`}</Text>
				</View>

				<View style={styles.sub}>
					{!isProgress ? (
						<TouchableOpacity onPress={() => handleOpen(true)}>
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
				<OrderItem time={pickUpTime} isProgress={false} handleOpen={handlePickUpModal} />
				<OrderItem time={30} isProgress={true} handleOpen={handlePickUpModal} />
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
