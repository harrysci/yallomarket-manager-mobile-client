import useAxios from 'axios-hooks';
import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Text, Button, Overlay, Divider} from 'react-native-elements';
import {GetImageProductListRes} from '../home/dto/GetImageProductListDto';
import ProductDetailInfoPageStyles from './styles/ProductDetailInfoPageStyles';

interface Props {
  product: GetImageProductListRes;
  storeName: string;
}

const ProductDetailInfoPage = (props: Props): JSX.Element => {
  // dummy props
  props = {
    product: {
      productId: 145,
      storeId: 1,
      productBarcode: '123412341234',
      productName: '더원',
      productOriginalPrice: 2500,
      productCurrentPrice: 4500,
      productProfit: 44.4444,
      productDescription: '더원화이트',
      productIsProcessed: true,
      productIsSoldout: false,
      productOnsale: true,
      productCategory: '미분류',
      productCreatedAt: new Date('2021-05-01'),

      representativeProductImageId: 85,
      representativeProductImage:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MThfMTg1%2FMDAxNjIzOTQ2NjUxOTc0.wUfnn86EWZvVnac4gj5kvruZD3pflMQRxLNbRqC-jhYg.RPT3uPkhDvI-F_ApoizqYiy9tEW55ZP3jRwMUK9SNUUg.JPEG.ana_ad%2FKakaoTalk_20210608_104228055_03.jpg&t',
      detailProductImageId: 86,
      detailProductImage: '더원더원',
      additionalProductImageId: 87,
      additionalProductImage:
        'https://www.pinterest.co.kr/pin/8373949283300732/',

      processedProductId: 34,
      processedProductName: 'name dummy',
      processedProductCompany: 'company dummy',
      processedProductStandardType: 'type dummy',
      processedProductStandardValues: 'values dummy',
      processedProductComposition: 'composition dummy',
      processedProductVolume: 'volume dummy',
      processedProductAdult: 'adult dummy',
      processedProductCaution: 'caution dummy',
      processedProductInformation: 'information dummy',

      weightedProductId: undefined,
      weightedProductVolume: undefined,

      onsaleProductId: 33,
      productOnsalePrice: 1000,
    },
    storeName: '경동마트',
  };

  const [deleteOverlayVisible, setDeleteOverlayVisibleVisible] =
    useState<boolean>(false);

  const handleDeleteOverlay = () => {
    setDeleteOverlayVisibleVisible(!deleteOverlayVisible);
  };

  const [deleteConfirmOverlayVisible, setDeleteConfirmOverlayVisible] =
    useState<boolean>(false);

  const handleDeleteConfirmOverlay = () => {
    setDeleteConfirmOverlayVisible(!deleteConfirmOverlayVisible);
  };

  // 상품 삭제 요청
  const [
    {data: deletedData, loading: deleteLoading, error: deleteError},
    executeDelete,
  ] = useAxios<any>(
    {
      method: 'DELETE',
      url: 'http://localhost:5000/product/deleteProductData/2/88030357308582',
    },
    {manual: true},
  );

  // 상품 갱신 요청
  const [
    {data: updateData, loading: updateLoading, error: updateError},
    executeUpdate,
  ] = useAxios<any>(
    {
      method: 'PUT',
      url: 'http://localhost:5000/product/updateProductData/:ownerId/:barcode',
    },
    {manual: true},
  );

  return (
    <SafeAreaView style={ProductDetailInfoPageStyles.container}>
      <View style={ProductDetailInfoPageStyles.titleContainer}>
        <Text style={ProductDetailInfoPageStyles.titleText}>상품 정보</Text>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/4114.png')} />
        </TouchableOpacity>
      </View>

      <View style={ProductDetailInfoPageStyles.imageContainer}>
        <Image
          source={require('../../../assets/images/93.png')}
          style={ProductDetailInfoPageStyles.productImage}
        />
      </View>

      <View style={ProductDetailInfoPageStyles.productInformationContainer}>
        <Text style={ProductDetailInfoPageStyles.storeNameText}>
          {props.storeName}
        </Text>
        <View style={ProductDetailInfoPageStyles.productNamePriceContainer}>
          <Text style={ProductDetailInfoPageStyles.productNameText}>
            {props.product.productName}
          </Text>

          {/* 세일 상품인 경우 */}
          {props.product.onsaleProductId && props.product.productOnsalePrice && (
            <>
              <Text style={ProductDetailInfoPageStyles.productOnSalePriceText}>
                {String(props.product.productOnsalePrice).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ',',
                )}
                원
              </Text>
              <Text
                style={ProductDetailInfoPageStyles.productSalePercentageText}>
                {(props.product.productCurrentPrice -
                  props.product.productOnsalePrice) /
                  100 +
                  '%'}
              </Text>
              <Text style={ProductDetailInfoPageStyles.productCurrentPriceText}>
                {String(props.product.productCurrentPrice).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ',',
                )}
                원
              </Text>
            </>
          )}

          {/* 세일 상품이 아닌 경우 */}
          {!props.product.onsaleProductId && !props.product.productOnsalePrice && (
            <>
              <Text style={ProductDetailInfoPageStyles.productOnSalePriceText}>
                {String(props.product.productCurrentPrice).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ',',
                )}
                원
              </Text>
            </>
          )}
        </View>
      </View>

      <View
        style={ProductDetailInfoPageStyles.productDetailInformationContainer}>
        <Text
          style={ProductDetailInfoPageStyles.productDetailInformationTitleText}>
          상세정보
        </Text>
        <View
          style={ProductDetailInfoPageStyles.productDetailInformationElement}>
          <Text style={ProductDetailInfoPageStyles.detailTitleText}>
            바코드
          </Text>
          <Text style={ProductDetailInfoPageStyles.detailInformationText}>
            {props.product.productBarcode}
          </Text>
        </View>
        <View
          style={ProductDetailInfoPageStyles.productDetailInformationElement}>
          <Text style={ProductDetailInfoPageStyles.detailTitleText}>
            상품명
          </Text>
          <Text style={ProductDetailInfoPageStyles.detailInformationText}>
            {props.product.processedProductName}
          </Text>
        </View>

        <View
          style={ProductDetailInfoPageStyles.productDetailInformationElement}>
          <Text style={ProductDetailInfoPageStyles.detailTitleText}>
            상품 현재 판매가
          </Text>
          {/*  */}
          {props.product.productOnsale && props.product.productOnsalePrice ? (
            // 세일 상품인 경우
            <Text style={ProductDetailInfoPageStyles.detailInformationText}>
              {String(props.product.productOnsalePrice).replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ',',
              )}
              원
            </Text>
          ) : (
            // 세일 상품이 아닌 경우
            <Text style={ProductDetailInfoPageStyles.detailInformationText}>
              {String(props.product.productCurrentPrice).replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ',',
              )}
              원
            </Text>
          )}
        </View>

        <View
          style={ProductDetailInfoPageStyles.productDetailInformationElement}>
          <Text style={ProductDetailInfoPageStyles.detailTitleText}>
            상품 카테고리
          </Text>
          <Text style={ProductDetailInfoPageStyles.detailInformationText}>
            {props.product.productCategory}
          </Text>
        </View>

        <View
          style={ProductDetailInfoPageStyles.productDetailInformationElement}>
          <Text style={ProductDetailInfoPageStyles.detailTitleText}>
            상품 게시일
          </Text>
          <Text style={ProductDetailInfoPageStyles.detailInformationText}>
            {String(props.product.productCreatedAt)}
          </Text>
        </View>

        <View
          style={ProductDetailInfoPageStyles.productDetailInformationElement}>
          <Text style={ProductDetailInfoPageStyles.detailTitleText}>
            규격 (g)
          </Text>

          {props.product.productIsProcessed &&
          props.product.processedProductVolume ? (
            // 공산품인 경우
            <Text style={ProductDetailInfoPageStyles.detailInformationText}>
              {props.product.processedProductVolume}
            </Text>
          ) : (
            // 저울상품인 경우
            <Text style={ProductDetailInfoPageStyles.detailInformationText}>
              {props.product.weightedProductVolume}
            </Text>
          )}
        </View>
      </View>

      <View style={ProductDetailInfoPageStyles.buttonContainer}>
        <Button
          title="수정"
          titleStyle={ProductDetailInfoPageStyles.buttonText}
          buttonStyle={ProductDetailInfoPageStyles.updateButton}
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
        overlayStyle={ProductDetailInfoPageStyles.deleteOverlay}>
        <View style={ProductDetailInfoPageStyles.deleteOverlayContainer}>
          <View style={ProductDetailInfoPageStyles.deleteOverlayTitleContainer}>
            <Text style={ProductDetailInfoPageStyles.deleteOverlayTitleText}>
              정말 삭제하시겠습니까?
            </Text>
          </View>
          <Divider orientation="horizontal" />
          <View
            style={ProductDetailInfoPageStyles.deleteOverlayButtonContainer}>
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
                executeDelete().catch(() => {
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
        overlayStyle={ProductDetailInfoPageStyles.deleteOverlay}>
        <View style={ProductDetailInfoPageStyles.deleteOverlayContainer}>
          <View style={ProductDetailInfoPageStyles.deleteOverlayTitleContainer}>
            <Text style={ProductDetailInfoPageStyles.deleteOverlayTitleText}>
              해당 상품을 삭제할 수 없습니다.
            </Text>
          </View>
          <Divider orientation="horizontal" />
          <View
            style={ProductDetailInfoPageStyles.deleteOverlayButtonContainer}>
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
