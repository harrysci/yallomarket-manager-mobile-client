import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { Text, Button, Image } from 'react-native-elements';

const LAYOUT_WIDTH = '87.5%';

function BarcodeRecognitionComplete(): JSX.Element {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'green',
				width: '100%',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					flex: 1,
					width: LAYOUT_WIDTH,
					backgroundColor: 'yellow',
					height: '100%',
				}}
			>
				{/* 텍스트 섹션 */}
				<Text
					style={{
						width: 93,
						flex: 1,
						//  fontFamily: "AppleSDGothicNeo",
						fontSize: 21,
						fontWeight: '600',
						fontStyle: 'normal',
						lineHeight: 25,
						letterSpacing: -0.67,
						textAlign: 'left',
						color: '#000000',
						marginTop: '5.4%',
					}}
				>
					바코드 스캔
				</Text>

				{/* 박스 섹션 */}
				<View
					style={{
						flex: 1,
					}}
				>
					<View
						style={{
							width: '100%',
							height: 104,
							borderRadius: 13,
							backgroundColor: '#ffffff',
							alignSelf: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
							// marginTop: 224,
							...Platform.select({
								ios: {
									shadowColor: '#4d4d4d',
									shadowOffset: { width: 0.1, height: 3 },
									shadowOpacity: 0.3,
									shadowRadius: 4,
								},
								android: { elevation: 8 },
							}),
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								marginLeft: 24,
								marginBottom: 4,
							}}
						>
							<Image
								source={require('../../../assets/images/barcode-recognition-complete/mini-badge.png')}
								style={{
									width: 16,
									height: 16,
								}}
							/>
							<Text
								style={{
									width: 30,
									height: 15,
									opacity: 0.66,
									// fontFamily: 'AppleSDGothicNeo',
									fontSize: 12,
									fontWeight: 'normal',
									fontStyle: 'normal',
									lineHeight: 15,
									letterSpacing: -0.29,
									textAlign: 'center',
									color: '#000000',
									marginLeft: 8,
								}}
							>
								상품명
							</Text>
						</View>
						<Text
							style={{
								height: 37,
								opacity: 1,
								// fontFamily: "AppleSDGothicNeo",
								fontSize: 31,
								fontWeight: '800',
								fontStyle: 'normal',
								lineHeight: 37,
								letterSpacing: -0.74,
								textAlign: 'center',
								color: '#000000',
								// justifyContent: 'center',
							}}
						>
							2 000010 132605
						</Text>
					</View>
				</View>

				{/* 버튼 섹션 */}
				<View
					style={{
						flex: 1,
					}}
				>
					<Text
						style={{
							width: 102,
							height: 19,
							// fontFamily: "AppleSDGothicNeo",
							fontSize: 16,
							fontWeight: '600',
							fontStyle: 'normal',
							lineHeight: 19,
							letterSpacing: -0.51,
							textAlign: 'center',
							color: '#848484',
							alignSelf: 'center',
							// marginTop: 135,
						}}
					>
						바코드 스캔 완료
					</Text>

					<TouchableOpacity
						style={{
							width: '100%',
							height: 48,
							borderRadius: 3,
							backgroundColor: '#ffffff',
							borderStyle: 'solid',
							borderWidth: 1,
							borderColor: '#000000',
							justifyContent: 'center',
							marginTop: 38,
						}}
					>
						<Text
							style={{
								fontSize: 17,
								fontWeight: '500',
								fontStyle: 'normal',
								lineHeight: 20,
								letterSpacing: 0,
								textAlign: 'center',
								color: '#000000',
							}}
						>
							다시 스캔하기
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: '100%',
							height: 48,
							borderRadius: 3,
							backgroundColor: '#fbd145',
							borderStyle: 'solid',
							borderWidth: 1,
							borderColor: '#000000',
							justifyContent: 'center',
							marginTop: 16,
						}}
					>
						<Text
							style={{
								fontSize: 17,
								fontWeight: '500',
								fontStyle: 'normal',
								lineHeight: 20,
								letterSpacing: 0,
								textAlign: 'center',
								color: '#000000',
							}}
						>
							상품 등록하기
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default BarcodeRecognitionComplete;
