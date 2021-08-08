import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { styles } from './styles/style';
import { Text } from 'react-native-elements';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';

interface DetailPhotoProps {
	ImgPath: any;
	handleUploadOverlay: () => void;
}
/* 대표 이미지 촬영후 등록하는 메커니즘 */
export default function UploadDetailPhoto(data: DetailPhotoProps): JSX.Element {
	const { ImgPath, handleUploadOverlay } = data;
	const navigation = useNavigation();
	const cameraRef = React.useRef<RNCamera>(null); // useRef로 camera를 위한 ref를 하나 만들어주고
	const route = useRoute<RouteProp<StackParamList, '상세 이미지 촬영'>>();
	const takePhoto = async () => {
		if (cameraRef) {
			const data = await cameraRef.current?.takePictureAsync({
				quality: 1,
				exif: true,
				base64: true,
			});
			//console.log(route.params.param.ImgPath, data);
			navigation.navigate('상세 이미지 확인', {
				imagePath: route.params.ImgPath,
				detailImgPath: data?.base64,
				handleUploadOverlay: route.params.handleUploadOverlay,
			});
		}
	};
	return (
		<View style={styles.root}>
			<View>
				<RNCamera ref={cameraRef} style={styles.cameraStyle} captureAudio={false} />
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
