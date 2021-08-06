import { TouchableOpacity, View } from 'react-native';
import { Text, Overlay } from 'react-native-elements';
import React from 'react';
import style from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../../../navigations/stack-param-list/StackParamList';

export interface AlreadyRegistedAlertOverlayProps {
	isOpen: boolean;
	handleOpen: (state: boolean) => void;
	navigation: StackNavigationProp<StackParamList, '상품 상세 정보'>;
}

/**
 *
 * @param props
 * @returns
 */
const AlreadyRegistedAlertOverlay = (props: AlreadyRegistedAlertOverlayProps): JSX.Element => {
	const { isOpen, handleOpen, navigation } = props;

	return (
		<Overlay isVisible={isOpen} overlayStyle={style.root}>
			<View style={style.container}>
				<View style={style.upperContainer}>
					<Text style={style.text}>
						{'이미 등록된 상품입니다.\n상품의 정보를 확인하시겠습니까?'}
					</Text>
				</View>

				<View style={style.lowerContainer}>
					<TouchableOpacity style={style.lowerButton} onPress={() => handleOpen(false)}>
						<Text style={style.text}>아니오</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={style.lowerButton}
						onPress={() => {
							navigation.replace('메인화면', {
								updateSuccess: false,
								routeName: '등록 목록',
							});
						}}
					>
						<Text style={style.text}>예</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Overlay>
	);
};

export default AlreadyRegistedAlertOverlay;
