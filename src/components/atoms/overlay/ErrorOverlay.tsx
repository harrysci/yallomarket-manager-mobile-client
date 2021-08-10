import React from 'react';
import { View } from 'react-native';
import { Overlay, Text } from 'react-native-elements';

export interface ErrorOverlayProps {
	visible: boolean;
	toggleOverlay: (newState: boolean) => void;
}

const ErrorOverlay = (props: any) => {
	const { visible, toggleOverlay } = props;

	return (
		<View style={{}}>
			<Overlay
				isVisible={visible}
				onBackdropPress={() => toggleOverlay(false)}
				overlayStyle={{
					minWidth: 270,
					height: 70,
					borderRadius: 7,
					backgroundColor: '#ffffff',
					borderStyle: 'solid',
					borderWidth: 1.5,
					borderColor: '#191919',
				}}
			>
				<Text
					style={{
						flex: 1,
						fontSize: 16,
					}}
				>
					{'요청하신 작업을 처리하는중 오류가 발생했습니다.\n다시 시도해주세요.'}
				</Text>
			</Overlay>
		</View>
	);
};

export default ErrorOverlay;
