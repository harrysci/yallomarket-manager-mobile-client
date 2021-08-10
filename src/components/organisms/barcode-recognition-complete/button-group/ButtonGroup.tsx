import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import style from './styles';

export interface handleUploadOverlayProps {
	handleUploadOverlay: () => void;
}
/**
 * @name 바코드_스캔완료_상품등록하기_컴포넌트
 * @returns JSX.Element
 */
const ButtonGroup = (props: handleUploadOverlayProps): JSX.Element => {
	const navigation = useNavigation();
	const { handleUploadOverlay } = props;
	return (
		<View style={style.root}>
			<Text style={style.text}>바코드 스캔 완료</Text>

			<TouchableOpacity
				style={style.touchAreaReScan}
				onPress={() => {
					navigation.goBack();
					// navigation.
					// console.log('dd');
				}}
			>
				<Text style={style.reScanText}>다시 스캔하기</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={style.touchAreaSave}
				onPress={() => {
					navigation.navigate('1단계', { handleUploadOverlay: handleUploadOverlay });
				}}
			>
				<Text style={style.saveText}>상품 등록하기</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ButtonGroup;
