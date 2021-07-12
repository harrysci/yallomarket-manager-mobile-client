/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, Button, Overlay, Divider } from 'react-native-elements';
import { StackParamList } from '../../../navigations/stack-param-list/StackParamList';
import { GetImageProductListRes } from '../home/dto/GetImageProductListDto';
import ProductDetailInfoPageStyles from './styles/ProductDetailInfoPageStyles';

export interface ProductDetailInfoPageProps {
	product: GetImageProductListRes;
	storeName: string;
	ownerId: number;
	executeGetHandler: () => void;
}

/**
 *
 * @param props
 * @returns
 * @미비사항
 *  1. X 아이콘 클릭 -> 이전 페이지로 돌아가기
 *  2. 수정 버튼 클릭 -> 수정 페이지로 전환
 *  3. 삭제 버튼 클릭 -> 상품 리스트 페이지로 전환
 */
const ProductDetailInfoPage = (): JSX.Element => {
	const navigation = useNavigation();

	const route = useRoute<RouteProp<StackParamList, '상품 상세 정보'>>();
	const { product, storeName, ownerId, executeGetHandler } = route.params;

	console.log(product.productId);

	const [deleteOverlayVisible, setDeleteOverlayVisibleVisible] = useState<boolean>(false);

	const handleDeleteOverlay = () => {
		setDeleteOverlayVisibleVisible(!deleteOverlayVisible);
	};

	const [deleteConfirmOverlayVisible, setDeleteConfirmOverlayVisible] = useState<boolean>(false);

	const handleDeleteConfirmOverlay = () => {
		setDeleteConfirmOverlayVisible(!deleteConfirmOverlayVisible);
	};

	// 상품 삭제 요청
	const [{ data: deletedData, loading: deleteLoading, error: deleteError }, executeDelete] =
		useAxios<any>(
			{
				method: 'DELETE',
				url: `http://localhost:5000/product/deleteProductData/${ownerId}/${product.productBarcode}`,
			},
			{ manual: true },
		);

	// 상품 갱신 요청
	const [{ data: updateData, loading: updateLoading, error: updateError }, executeUpdate] =
		useAxios<any>(
			{
				method: 'PUT',
				url: 'http://localhost:5000/product/updateProductData/:ownerId/:barcode',
			},
			{ manual: true },
		);

	return (
		<SafeAreaView style={ProductDetailInfoPageStyles.container}>
			<View style={ProductDetailInfoPageStyles.titleContainer}>
				<Text style={ProductDetailInfoPageStyles.titleText}>상품 정보</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Image source={require('../../atoms/product-detail-info-page/exit.png')} />
				</TouchableOpacity>
			</View>

			<View style={ProductDetailInfoPageStyles.imageContainer}>
				<Image
					source={{ uri: product.representativeProductImage }}
					style={ProductDetailInfoPageStyles.productImage}
				/>
			</View>

			<View style={ProductDetailInfoPageStyles.productInformationContainer}>
				<Text style={ProductDetailInfoPageStyles.storeNameText}>{storeName}</Text>
				<View style={ProductDetailInfoPageStyles.productNamePriceContainer}>
					<Text style={ProductDetailInfoPageStyles.productNameText}>
						{product.productName}
					</Text>

					{/* 세일 상품인 경우 */}
					{product.onsaleProductId && product.productOnsalePrice && (
						<>
							<Text style={ProductDetailInfoPageStyles.productOnSalePriceText}>
								{String(product.productOnsalePrice).replace(
									/\B(?=(\d{3})+(?!\d))/g,
									',',
								)}
								원
							</Text>
							<Text style={ProductDetailInfoPageStyles.productSalePercentageText}>
								{(product.productCurrentPrice - product.productOnsalePrice) / 100 +
									'%'}
							</Text>
							<Text style={ProductDetailInfoPageStyles.productCurrentPriceText}>
								{String(product.productCurrentPrice).replace(
									/\B(?=(\d{3})+(?!\d))/g,
									',',
								)}
								원
							</Text>
						</>
					)}

					{/* 세일 상품이 아닌 경우 */}
					{!product.onsaleProductId && !product.productOnsalePrice && (
						<>
							<Text style={ProductDetailInfoPageStyles.productOnSalePriceText}>
								{String(product.productCurrentPrice).replace(
									/\B(?=(\d{3})+(?!\d))/g,
									',',
								)}
								원
							</Text>
						</>
					)}
				</View>
			</View>

			<View style={ProductDetailInfoPageStyles.productDetailInformationContainer}>
				<Text style={ProductDetailInfoPageStyles.productDetailInformationTitleText}>
					상세정보
				</Text>
				<View style={ProductDetailInfoPageStyles.productDetailInformationElement}>
					<Text style={ProductDetailInfoPageStyles.detailTitleText}>바코드</Text>
					<Text style={ProductDetailInfoPageStyles.detailInformationText}>
						{product.productBarcode}
					</Text>
				</View>
				<View style={ProductDetailInfoPageStyles.productDetailInformationElement}>
					<Text style={ProductDetailInfoPageStyles.detailTitleText}>상품명</Text>
					<Text style={ProductDetailInfoPageStyles.detailInformationText}>
						{product.processedProductName}
					</Text>
				</View>

				<View style={ProductDetailInfoPageStyles.productDetailInformationElement}>
					<Text style={ProductDetailInfoPageStyles.detailTitleText}>
						상품 현재 판매가
					</Text>
					{product.productOnsale && product.productOnsalePrice ? (
						// 세일 상품인 경우
						<Text style={ProductDetailInfoPageStyles.detailInformationText}>
							{String(product.productOnsalePrice).replace(
								/\B(?=(\d{3})+(?!\d))/g,
								',',
							)}
							원
						</Text>
					) : (
						// 세일 상품이 아닌 경우
						<Text style={ProductDetailInfoPageStyles.detailInformationText}>
							{String(product.productCurrentPrice).replace(
								/\B(?=(\d{3})+(?!\d))/g,
								',',
							)}
							원
						</Text>
					)}
				</View>

				<View style={ProductDetailInfoPageStyles.productDetailInformationElement}>
					<Text style={ProductDetailInfoPageStyles.detailTitleText}>상품 카테고리</Text>
					<Text style={ProductDetailInfoPageStyles.detailInformationText}>
						{product.productCategory}
					</Text>
				</View>

				<View style={ProductDetailInfoPageStyles.productDetailInformationElement}>
					<Text style={ProductDetailInfoPageStyles.detailTitleText}>상품 게시일</Text>
					<Text style={ProductDetailInfoPageStyles.detailInformationText}>
						{String(product.productCreatedAt)}
					</Text>
				</View>

				<View style={ProductDetailInfoPageStyles.productDetailInformationElement}>
					<Text style={ProductDetailInfoPageStyles.detailTitleText}>규격 (g)</Text>

					{product.productIsProcessed && product.processedProductVolume ? (
						// 공산품인 경우
						<Text style={ProductDetailInfoPageStyles.detailInformationText}>
							{product.processedProductVolume}
						</Text>
					) : (
						// 저울상품인 경우
						<Text style={ProductDetailInfoPageStyles.detailInformationText}>
							{product.weightedProductVolume}
						</Text>
					)}
				</View>
			</View>

			<View style={ProductDetailInfoPageStyles.buttonContainer}>
				<Button
					title="수정"
					titleStyle={ProductDetailInfoPageStyles.buttonText}
					buttonStyle={ProductDetailInfoPageStyles.updateButton}
					onPress={() => {
						navigation.navigate('메인화면');
					}}
				/>

				<Button
					title="삭제"
					titleStyle={ProductDetailInfoPageStyles.buttonText}
					type="outline"
					buttonStyle={ProductDetailInfoPageStyles.deleteButton}
					onPress={handleDeleteOverlay}
				/>
			</View>

			{/* '정말 삭제하시겠습니까?' overlay */}
			<Overlay
				isVisible={deleteOverlayVisible}
				onBackdropPress={handleDeleteOverlay}
				overlayStyle={ProductDetailInfoPageStyles.deleteOverlay}
			>
				<View style={ProductDetailInfoPageStyles.deleteOverlayContainer}>
					<View style={ProductDetailInfoPageStyles.deleteOverlayTitleContainer}>
						<Text style={ProductDetailInfoPageStyles.deleteOverlayTitleText}>
							정말 삭제하시겠습니까?
						</Text>
					</View>
					<Divider orientation="horizontal" />
					<View style={ProductDetailInfoPageStyles.deleteOverlayButtonContainer}>
						<Button
							titleStyle={ProductDetailInfoPageStyles.deleteOverlayButtonText}
							buttonStyle={ProductDetailInfoPageStyles.deleteOverlayButton}
							title="아니오"
							onPress={() => {
								setDeleteOverlayVisibleVisible(false);
							}}
						/>
						<Divider orientation="vertical" />
						<Button
							titleStyle={ProductDetailInfoPageStyles.deleteOverlayButtonText}
							buttonStyle={ProductDetailInfoPageStyles.deleteOverlayButton}
							title="네"
							onPress={() => {
								// useAxios -> 해당 상품 삭제
								executeDelete()
									.then(() => {
										// 상품 목록 재요청
										executeGetHandler();
										navigation.navigate('메인화면');
									})
									.catch(() => {
										// 상품 삭제 에러 발생 시 '해당 상품을 삭제할 수 없습니다.' overlay 띄움.
										setDeleteConfirmOverlayVisible(true);
									});

								setDeleteOverlayVisibleVisible(false);

								if (!deleteError && !deleteLoading && deletedData) {
									/**
									 * 1. '바코드 등록 상품 목록' 으로 페이지 전환
									 * 2. '상품정보 삭제 완료!' 모달 띄우기
									 */
								}
							}}
						/>
					</View>
				</View>

				{/* 삭제 중 로딩 컴포넌트 */}
				{deleteLoading && (
					<View style={ProductDetailInfoPageStyles.loadingComponentContainer}>
						<ActivityIndicator size="large" color="#f7d02f" />
					</View>
				)}
			</Overlay>
			{/* '해당 상품을 삭제할 수 없습니다.' overlay */}
			<Overlay
				isVisible={deleteConfirmOverlayVisible}
				onBackdropPress={handleDeleteConfirmOverlay}
				overlayStyle={ProductDetailInfoPageStyles.deleteOverlay}
			>
				<View style={ProductDetailInfoPageStyles.deleteOverlayContainer}>
					<View style={ProductDetailInfoPageStyles.deleteOverlayTitleContainer}>
						<Text style={ProductDetailInfoPageStyles.deleteOverlayTitleText}>
							해당 상품을 삭제할 수 없습니다.
						</Text>
					</View>
					<Divider orientation="horizontal" />
					<View style={ProductDetailInfoPageStyles.deleteOverlayButtonContainer}>
						<Button
							titleStyle={ProductDetailInfoPageStyles.deleteOverlayButtonText}
							buttonStyle={ProductDetailInfoPageStyles.deleteOverlayButton}
							title="확인"
							onPress={() => {
								setDeleteConfirmOverlayVisible(false);
							}}
						/>
					</View>
				</View>
			</Overlay>
		</SafeAreaView>
	);
};

export default ProductDetailInfoPage;
