import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

import StyledLabel from '../../../atoms/text/styled-label/StyledLabel';

import style from './InputDescriptionBoxWithLabel.style';

export interface InputDescriptionBoxWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	defaultDescription?: string;
	handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void;
}

/**
 * @name 상품_설명_입력_컴포넌트
 * @param props InputDescriptionBoxWithLabelProps
 * @returns JSX.Elements
 */
const InputDescriptionBoxWithLabel = (props: InputDescriptionBoxWithLabelProps): JSX.Element => {
	const { title, isNecessary, value, handleChange, defaultDescription } = props;

	return (
		<View>
			<StyledLabel title={title} isNecessary={isNecessary} />

			<Input
				value={value}
				onChange={handleChange}
				containerStyle={{ paddingHorizontal: 0 }}
				inputContainerStyle={style.inputContainer}
				inputStyle={style.input}
				multiline={true}
				maxLength={500}
				placeholder={defaultDescription}
			/>
		</View>
	);
};

export default InputDescriptionBoxWithLabel;
