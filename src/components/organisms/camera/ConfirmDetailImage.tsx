import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { styles } from './styles/style';
import { useNavigation } from '@react-navigation/native';
import { ProductInfoInputStackParams } from '../../../navigations/stack-params/ProductInfoInputStackParams';
import AsyncStorage from '@react-native-community/async-storage';

/* 
*****************************************************************
상세이미지 확인화면 

상세이미지를 확인하고 대표이미지 데이터와 상세이미지 데이터를 상품 등록 페이지로 전달한다.
*****************************************************************
setPath -> imagePath의 상태관리
imagePath (object type)
- detailImgPath : 상세이미지 base64 string
- imgPath : 대표이미지 base64 string
*****************************************************************
*/
export default function ConfirmDetailImage(): JSX.Element {
	const [imagePath, setImgPath] = useState('');
	const [detailPath, setDetailImgPath] = useState('');
	const navigation = useNavigation();

	React.useEffect(() => {
		AsyncStorage.getItem('detailImgUrl', (err, res) => {
			if (res) {
				setDetailImgPath(res);
			}
		});
	}, [detailPath]);

	// let path = require(imgPath);
	return detailPath ? (
		<View style={styles.root}>
			<Image
				style={styles.imageStyle}
				source={{
					uri: `${detailPath}`,
				}}
			/>
			<View style={styles.textBox}>
				<Text style={styles.textStyle}>상세 이미지 촬영완료</Text>
			</View>
			<View style={styles.buttonBox}>
				<Button
					type="outline"
					title="다시 촬영하기"
					titleStyle={styles.buttonTitleFont}
					buttonStyle={styles.buttonStyle2}
					onPress={() => {
						/* screen 이동 */
						navigation.navigate('상세 이미지 촬영');
					}}
				/>
			</View>
			<View style={styles.buttonBox2}>
				<Button
					type="outline"
					title="상세 이미지 등록하기"
					titleStyle={styles.buttonTitleFont}
					buttonStyle={styles.buttonStyle3}
					onPress={() => {
						/* screen 이동 */
						/* 법우님 최종등록 페이지로 연결 */
						/* imagePath : {detailImgPath => 상세이미지, ImgPath=> 대표이미지} */

						console.log('Detail Image\n', imagePath?.detailImgPath);
						console.log('\n\n Image\n', imagePath?.imgPath);

						/* 상품 정보 입력 (상품 등록 모드) navigation*/
						const productInfoInputStackParams: ProductInfoInputStackParams = {
							mode: 'regist',
							ownerId: 1,
							/* 더미 데이터, 바코드 인식 완료후 인식된 바코드, 서버에 받은 카테고리로 변경 필요 */
							initBarcode: '1123123',
							initProductCategory: '저울상품',

							/* 촬영한 상품 이미지 전달 */
							representativeProductImage: imagePath?.imgPath,
							detailProductImage: imagePath?.detailImgPath,
						};
						navigation.navigate('상품 정보 입력', productInfoInputStackParams);
					}}
				/>
			</View>
		</View>
	) : (
		<View></View>
	);
}
