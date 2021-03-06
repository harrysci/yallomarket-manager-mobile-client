import React from 'react';
import { View } from 'react-native';

import StyledLabel from '../../../atoms/text/styled-label/StyledLabel';
import CheckBox from '../../../atoms/check-box/styled-check-box/CheckBox';

import style from './CheckBoxGroupWithLabel.style';

export interface CheckBoxGroupWithLabelProps {
	title: string;
	isNecessary: boolean;
	isPossible: boolean;
	callBack: any;
}

/**
 * @name 체크박스그룹_컴포넌트
 * @param props CheckBoxGroupWithLabelProps
 * @returns JSX.Elements
 */
const CheckBoxGroupWithLabel = (props: CheckBoxGroupWithLabelProps): JSX.Element => {
	const { title, isNecessary, isPossible, callBack } = props;
	return (
		<View>
			<StyledLabel title={title} isNecessary={isNecessary} />

			<View style={style.checkBoxContainer}>
				<CheckBox title={'가능'} state={isPossible} callBack={callBack} />
				<CheckBox title={'품절'} state={!isPossible} callBack={callBack} />
			</View>
		</View>
	);
};

export default CheckBoxGroupWithLabel;
