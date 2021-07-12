import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

import style from './CheckBox.style';

export interface CheckBoxProps {
	title: string;
	state: boolean;
	callBack: any;
}

/**
 * @name 이미지_체크박스_Atom_컴포넌트
 * @param props CheckBoxProps
 * @returns JSX.Element
 */
const CheckBox = (props: CheckBoxProps) => {
	const { title, state, callBack } = props;
	return (
		<TouchableOpacity style={style.root} onPress={callBack}>
			<View style={style.imageContainer}>
				{state ? (
					<Image
						source={require('../../../../assets/images/product-info-input/selected-radio.png')}
						style={style.image}
					/>
				) : (
					<Image
						source={require('../../../../assets/images/product-info-input/not-selected-radio.png')}
						style={style.image}
					/>
				)}
			</View>

			<Text style={style.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CheckBox;
