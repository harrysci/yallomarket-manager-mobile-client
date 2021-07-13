import React from 'react';
import { Button } from 'react-native-elements';

import style from './FinishButton.style';

export interface FinishButtonProps {
	title: string;
	callBack: () => void;
	isAvailable: boolean;
}

/**
 * @name 수정/등록완료_버튼_Atom_컴포넌트
 * @param props FinishButtonProps
 * @returns JSX.Element
 */
const FinishButton = (props: FinishButtonProps) => {
	const { title, callBack, isAvailable } = props;
	return (
		<Button
			title={title}
			containerStyle={style.buttonContainer}
			buttonStyle={isAvailable ? style.buttonAvailable : style.buttonNotAvailable}
			titleStyle={isAvailable ? style.titleAvailable : style.titleNotAvailable}
			onPress={callBack}
			disabled={!isAvailable}
		/>
	);
};

export default FinishButton;
