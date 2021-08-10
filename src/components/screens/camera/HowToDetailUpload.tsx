import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { Image } from 'react-native-elements/dist/image/Image';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles/styles';
import { useState } from 'react';

export default function HowToDetailUpload(): JSX.Element {
	const ImagePath = require('../../../assets/images/drawable-hdpi/adobe_stock_301721923.jpg');
	const ImagePath2 = require('../../../assets/images/background/drawable-hdpi/2019.png');
	const ImagePath3 = require('../../../assets/images/focus/drawable-hdpi/4165.png');
	const navigation = useNavigation();

	const route = useRoute();

	return (
		<View style={styles.root}>
			<View style={styles.flexBox1}>
				<View style={styles.flexbox1}>
					<Text style={styles.yellowText}>2단계면 끝!</Text>
					<Text style={styles.header}>이미지 촬영은 이렇게!</Text>
				</View>
				<View>
					<Image style={styles.focusImage} source={ImagePath3} />
					<Image style={styles.imageStyle} source={ImagePath} />
					<Image style={styles.backgroundShadowImage} source={ImagePath2} />
				</View>

				<View style={styles.flexRow}>
					<Text style={styles.guidefont1}>2단계</Text>
					<Text style={styles.guidefont2}>상세 이미지 촬영</Text>
				</View>

				<View style={styles.flexRow}>
					<Text style={styles.font1}>상품 상세</Text>
					<Text style={styles.font2}>정보를 보여주는</Text>
					<Text style={styles.font3}>상세 이미지</Text>
					<Text style={styles.font1}>입니다.</Text>
				</View>
				<View style={styles.flexRow2}>
					<Text style={styles.font1}>위의 사진과 같이 </Text>
					<Text style={styles.font3}>사각형 프레임에 상세 정보 내용이</Text>
				</View>
				<View style={styles.flexRow2}>
					<Text style={styles.font3}>들어오도록</Text>
					<Text style={styles.font1}>촬영해 주세요.</Text>
				</View>
			</View>
			<View style={styles.flexBox1}>
				<View style={styles.flexBox}>
					<Button
						type="outline"
						title="이해했어요"
						titleStyle={styles.buttonTitleFont}
						buttonStyle={styles.buttonStyle}
						onPress={() => {
							/* screen 이동 */
							navigation.navigate('상세 이미지 촬영', {
								param: { ImgPath: '' },
							});
						}}
					/>
				</View>
			</View>
		</View>
	);
}
