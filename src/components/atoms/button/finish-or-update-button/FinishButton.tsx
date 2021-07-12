import React from 'react';
import { Button } from 'react-native-elements';

import style from './FinishButton.style';

export interface FinishButtonProps {
	title: string;
	callBack: any;
	isAvaliable: boolean;
}

/**
 * @name 수정/등록완료_버튼_Atom_컴포넌트
 * @param props FinishButtonProps
 * @returns JSX.Element
 */
const FinishButton = (props: FinishButtonProps) => {
	const { title, callBack, isAvaliable } = props;
	return (
		<Button
			title={title}
			containerStyle={style.buttonContainer}
			buttonStyle={isAvaliable ? style.buttonAvaliable : style.buttonNotAvaliable}
			titleStyle={isAvaliable ? style.titleAvaliable : style.titleNotAvaliable}
			onPress={callBack}
			disabled={!isAvaliable}
		/>
	);
};

export default FinishButton;
