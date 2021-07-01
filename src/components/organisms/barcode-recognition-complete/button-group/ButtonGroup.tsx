import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import style from './styles';

const ButtonGroup = () => {
	return (
		<View style={style.root}>
			<Text style={style.text}>바코드 스캔 완료</Text>

			<TouchableOpacity style={style.touchAreaReScan}>
				<Text style={style.reScanText}>다시 스캔하기</Text>
			</TouchableOpacity>

			<TouchableOpacity style={style.touchAreaSave}>
				<Text style={style.saveText}>상품 등록하기</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ButtonGroup;
