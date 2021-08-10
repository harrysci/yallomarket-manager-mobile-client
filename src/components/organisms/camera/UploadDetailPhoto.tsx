import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { styles } from './styles/style';
import { Text } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

interface DetailPhotoProps {
	ImgPath: any;
}
/* 대표 이미지 촬영후 등록하는 메커니즘 */
export default function UploadDetailPhoto(data: DetailPhotoProps): JSX.Element {
	const { ImgPath } = data;
	const navigation = useNavigation();
	const cameraRef = React.useRef<RNCamera>(null); // useRef로 camera를 위한 ref를 하나 만들어주고
	const route = useRoute();
	const takePhoto = async () => {
		if (cameraRef) {
			const data = await cameraRef.current?.takePictureAsync({
				quality: 1,
				exif: true,
			});
			//console.log(route.params.param.ImgPath, data);
			AsyncStorage.setItem('detailImgUrl', data?.uri, () => {
				console.log('상세 이미지 저장 완료!');
			});
			navigation.navigate('상세 이미지 확인');
		}
	};
	return (
		<View style={styles.root}>
			<View style={styles.cameraStyle}>
				<RNCamera ref={cameraRef} style={styles.camera} captureAudio={false} />
			</View>
			<View style={styles.flexRow}>
				<Text style={styles.font1}>등록할 상품의</Text>
				<Text style={styles.font3}>상세 이미지를</Text>
				<Text style={styles.font1}> 촬영해 주세요.</Text>
			</View>
			<View style={styles.buttonFlex}>
				<Button style={styles.buttonStyle} onPress={takePhoto} />
			</View>
		</View>
	);
}
