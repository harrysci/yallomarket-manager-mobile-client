import React from 'react';
import { View } from 'react-native';
import { Input, Image } from 'react-native-elements';

import StyledLabel from '../../../atoms/text/styled-label/StyledLabel';

import style from './InputTextBoxWithLabel.style';

export interface InputTextBoxWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void;
	inputType: 'numeric' | 'date' | 'any' | 'currency';
	rightIconType?: 'won' | 'gram';
}

/**
 * @name 상품_정보(숫자/통화/텍스트/날짜)_입력_컴포넌트
 * @param props InputTextBoxWithLabelProps
 * @returns JSX.Element
 */
const InputTextBoxWithLabel = (props: InputTextBoxWithLabelProps) => {
	/* numeric 검사 정규식 */
	const numericReg = /^\d+$/;
	const reg = {
		pattern: new RegExp(''),
	};

	const { title, isNecessary, value, handleChange, inputType, rightIconType } = props;

	/* 정규식을 통한 input 값 검사 */
	if (inputType === 'numeric') {
		reg.pattern = numericReg;
	} else if (inputType === 'currency') {
		reg.pattern = numericReg;
	}

	/* 인풋 단위 분기 렌더링 핸들러 ('원' 이미지 or 'gram' 이미지) */
	const handleRightIcon = (rightIconType: 'won' | 'gram' | undefined) => {
		if (rightIconType === 'won') {
			return (
				<Image
					// source={{ uri: './images/product-info-input/checked.png' }}
					source={require('../../../../assets/images/product-info-input/won-mark.png')}
					style={style.wonImage}
				/>
			);
		} else if (rightIconType === 'gram') {
			return (
				<Image
					// source={{ uri: './images/product-info-input/checked.png' }}
					source={require('../../../../assets/images/product-info-input/g-mark.png')}
					style={style.gramImage}
				/>
			);
		} else {
			return undefined;
		}
	};

	return (
		<View style={style.root}>
			<StyledLabel title={title} isNecessary={isNecessary} />

			<Input
				value={value}
				onChange={handleChange}
				errorMessage={
					!reg.pattern.test(value.replace(/,/g, '')) && value.length > 0
						? '입력값이 올바르지 않습니다.'
						: ''
				}
				rightIcon={handleRightIcon(rightIconType)}
				containerStyle={{ paddingHorizontal: 0 }}
				inputContainerStyle={style.inputContainer}
				inputStyle={style.input}
			/>
		</View>
	);
};

export default InputTextBoxWithLabel;
