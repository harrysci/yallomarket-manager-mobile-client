import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { styles } from './styles/style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function ConfirmImage(): JSX.Element {
	const navigation = useNavigation();
	const [imgPath, setImgPath] = useState('');

	React.useEffect(() => {
		AsyncStorage.getItem('imgUrl', (err, result) => {
			if (result) {
				setImgPath(result);
			}
		});
	}, []);

	return (
		<View style={styles.root}>
			<Image
				style={styles.imageStyle}
				source={{
					uri: `data:image/jpeg;base64,${imgPath}`,
				}}
			/>
			<View style={styles.textBox}>
				<Text style={styles.textStyle}>대표 이미지 촬영완료</Text>
			</View>
			<View style={styles.buttonBox}>
				<Button
					type="outline"
					title="다시 촬영하기"
					titleStyle={styles.buttonTitleFont}
					buttonStyle={styles.buttonStyle2}
					onPress={() => {
						/* screen 이동 */
						navigation.navigate('대표 이미지 촬영');
					}}
				/>
			</View>
			<View style={styles.buttonBox2}>
				<Button
					type="outline"
					title="대표 이미지 등록하기"
					titleStyle={styles.buttonTitleFont}
					buttonStyle={styles.buttonStyle3}
					onPress={() => {
						/* screen 이동 */
						navigation.navigate('2단계');
					}}
				/>
			</View>
		</View>
	);
}
