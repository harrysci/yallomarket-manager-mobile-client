import React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { styles } from './styles/style';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export interface UploadPhotoProps {
	handleUploadOverlay: () => void;
}

/* 대표 이미지 촬영후 등록하는 메커니즘 */
export default function UploadPhoto(props: UploadPhotoProps): JSX.Element {
	const navigation = useNavigation();
	const cameraRef = React.useRef<RNCamera>(null); // useRef로 camera를 위한 ref를 하나 만들어주고
	const { handleUploadOverlay } = props;
	const takePhoto = async () => {
		if (cameraRef) {
			const data = await cameraRef.current
				?.takePictureAsync({
					quality: 1,
					exif: true,
				})
				.then()
				.catch(err => {
					console.log(err);
				});
			AsyncStorage.setItem('imgUrl', data ? data.uri : '', () => {
				// console.log('이미지 저장 완료');
			});
			navigation.navigate('대표 이미지 확인', { handleUploadOverlay: handleUploadOverlay });
		}
	};
	return (
		<View style={Platform.OS === 'ios' ? styles.root : styles.androidRoot}>
			<View style={Platform.OS === 'ios' ? styles.cameraStyle : styles.androidCameraStyle}>
				<RNCamera ref={cameraRef} style={styles.camera} captureAudio={false} ratio="1:1" />
			</View>

			<View style={Platform.OS === 'ios' ? styles.flexRow : styles.androidFlexRow}>
				<Text style={styles.font1}>등록할 상품의 </Text>
				<Text style={styles.font3}>대표 이미지를</Text>
				<Text style={styles.font1}> 촬영해 주세요.</Text>
			</View>

			<View style={styles.buttonFlex}>
				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => {
						takePhoto();
					}}
				/>
			</View>
		</View>
	);
}
