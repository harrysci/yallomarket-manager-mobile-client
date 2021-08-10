import React from 'react';
import { View } from 'react-native';
import { styles } from './styles/styles';
import UploadPhoto from '../../organisms/camera/UploadPhoto';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';

export default function CameraUploadScreen(): JSX.Element {
	const route = useRoute<RouteProp<StackParamList, '대표 이미지 촬영'>>();
	return (
		<View style={styles.root1}>
			<UploadPhoto handleUploadOverlay={route.params.handleUploadOverlay} />
		</View>
	);
}
