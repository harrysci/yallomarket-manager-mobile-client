import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style/style';

const UpContainer = () => {
	return (
		<View style={styles.up}>
			<View style={{ alignSelf: 'center' }}>
				<Text style={styles.title}>바코드 등록 상품 목록</Text>
			</View>

			<View style={styles.middleContainer}>
				<View style={styles.middleView}>
					<Image
						style={{ width: 24, height: 16 }}
						source={require('../../../assets/images/product-list/mart.png')}
					/>
					<Text style={styles.martname}>경동 빅마트 토성점</Text>
				</View>
			</View>
		</View>
	);
};
export default UpContainer;
