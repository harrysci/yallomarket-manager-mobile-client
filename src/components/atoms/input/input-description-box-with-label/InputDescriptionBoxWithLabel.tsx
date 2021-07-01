import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

import StyledLabel from '../../text/styled-label/StyledLabel';

import style from './InputDescriptionBoxWithLabel.style';

export interface InputDescriptionBoxWithLabelProps {
	title: string;
	isNecessary: boolean;
	value: string;
	handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void;
}

const InputDescriptionBoxWithLabel = (props: InputDescriptionBoxWithLabelProps) => {
	const { title, isNecessary, value, handleChange } = props;

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
				numberOfLines={4}
			/>
		</View>
	);
};

export default InputDescriptionBoxWithLabel;
