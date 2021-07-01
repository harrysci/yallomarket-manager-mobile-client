import useAxios from 'axios-hooks';
import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Text, Button, Overlay, Divider} from 'react-native-elements';

const ProductDetailInfoPage = (): JSX.Element => {
  const [deleteOverlayVisible, setDeleteOverlayVisibleVisible] =
    useState<boolean>(false);

  const handleDeleteOverlay = () => {
    setDeleteOverlayVisibleVisible(!deleteOverlayVisible);
  };

  const [confirmOverlayVisible, setConfirmOverlayVisibleVisible] =
    useState<boolean>(false);

  const handleConfirmOverlay = () => {
    setConfirmOverlayVisibleVisible(!confirmOverlayVisible);
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>상품 정보</Text>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/4114.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/93.png')}
          style={styles.productImage}
        />
      </View>
      <View style={styles.productInformationContainer}>
        <Text style={styles.storeNameText}>[경동빅마트]</Text>
        <View style={styles.productNamePriceContainer}>
          <Text style={styles.productNameText}>적양배추 1/2통</Text>
          <Text style={styles.productOnSalePriceText}>2,290원</Text>
          <Text style={styles.productSalePercentageText}>10%</Text>
          <Text style={styles.productCurrentPriceText}>2,210원</Text>
        </View>
      </View>
      <View style={styles.productDetailInformationContainer}>
        <Text style={styles.productDetailInformationTitleText}>상세정보</Text>
        <View style={styles.productDetailInformationElement}>
          <Text style={styles.detailTitleText}>바코드</Text>
          <Text style={styles.detailInformationText}>2000010132605</Text>
        </View>
        <View style={styles.productDetailInformationElement}>
          <Text style={styles.detailTitleText}>상품명</Text>
          <Text style={styles.detailInformationText}>적양배추</Text>
        </View>
        <View style={styles.productDetailInformationElement}>
          <Text style={styles.detailTitleText}>상품 현재 판매가</Text>
          <Text style={styles.detailInformationText}>1,450원</Text>
        </View>
        <View style={styles.productDetailInformationElement}>
          <Text style={styles.detailTitleText}>상품 카테고리</Text>
          <Text style={styles.detailInformationText}>2,290원</Text>
        </View>
        <View style={styles.productDetailInformationElement}>
          <Text style={styles.detailTitleText}>
            얄로마켓 시스템 내 상품 게시일
          </Text>
          <Text style={styles.detailInformationText}>2021/06/01</Text>
        </View>
        <View style={styles.productDetailInformationElement}>
          <Text style={styles.detailTitleText}>규격 (g)</Text>
          <Text style={styles.detailInformationText}>500g</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="수정"
          titleStyle={styles.buttonText}
          buttonStyle={styles.updateButton}
        />

        <Button
          title="삭제"
          titleStyle={styles.buttonText}
          type="outline"
          buttonStyle={styles.deleteButton}
          onPress={handleDeleteOverlay}
        />
      </View>

      {/* '정말 삭제하시겠습니까?' overlay */}
      <Overlay
        isVisible={deleteOverlayVisible}
        onBackdropPress={handleDeleteOverlay}
        overlayStyle={styles.deleteOverlay}>
        <View style={styles.deleteOverlayContainer}>
          <View style={styles.deleteOverlayTitleContainer}>
            <Text style={styles.deleteOverlayTitleText}>
              정말 삭제하시겠습니까?
            </Text>
          </View>
          <Divider orientation="horizontal" />
          <View style={styles.deleteOverlayButtonContainer}>
            <Button
              titleStyle={styles.deleteOverlayButtonText}
              buttonStyle={styles.deleteOverlayButton}
              title="아니오"
              onPress={() => {
                setDeleteOverlayVisibleVisible(false);
              }}
            />
            <Divider orientation="vertical" />
            <Button
              titleStyle={styles.deleteOverlayButtonText}
              buttonStyle={styles.deleteOverlayButton}
              title="네"
              onPress={() => {
                // useAxios -> 해당 상품 삭제
                executeDelete().catch(() => {
                  // 상품 삭제 에러 발생 시 '해당 상품을 삭제할 수 없습니다.' overlay 띄움.
                  setConfirmOverlayVisibleVisible(true);
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
          <View style={styles.loadingComponentContainer}>
            <ActivityIndicator size="large" color="#f7d02f" />
          </View>
        )}
      </Overlay>
      {/* '해당 상품을 삭제할 수 없습니다.' overlay */}
      <Overlay
        isVisible={confirmOverlayVisible}
        onBackdropPress={handleConfirmOverlay}
        overlayStyle={styles.deleteOverlay}>
        <View style={styles.deleteOverlayContainer}>
          <View style={styles.deleteOverlayTitleContainer}>
            <Text style={styles.deleteOverlayTitleText}>
              해당 상품을 삭제할 수 없습니다.
            </Text>
          </View>
          <Divider orientation="horizontal" />
          <View style={styles.deleteOverlayButtonContainer}>
            <Button
              titleStyle={styles.deleteOverlayButtonText}
              buttonStyle={styles.deleteOverlayButton}
              title="확인"
              onPress={() => {
                setConfirmOverlayVisibleVisible(false);
              }}
            />
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default ProductDetailInfoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '87.2%',
    alignSelf: 'center',
  },
  titleContainer: {
    height: '12.9%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: '18.6%',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInformationContainer: {
    height: '13.8%',
  },
  productNamePriceContainer: {
    flexDirection: 'row',
  },
  productDetailInformationContainer: {
    height: '34.9%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.67,
    textAlign: 'left',
    color: '#000000',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  storeNameText: {
    width: 68,
    height: 16,
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.13,
    textAlign: 'center',
    color: '#6a6a6a',
    marginBottom: '1%',
  },
  productNameText: {
    height: 24,
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -0.2,
    textAlign: 'center',
    color: '#000000',
    marginRight: '4%',
  },
  productOnSalePriceText: {
    height: 24,
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -0.2,
    textAlign: 'center',
    color: '#d00404',
    marginRight: '4.4%',
  },
  productSalePercentageText: {
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.13,
    textAlign: 'center',
    color: '#6d7278',
    marginRight: '1%',
    alignSelf: 'center',
  },
  productCurrentPriceText: {
    // fontFamily: 'AppleSDGothicNeo',
    textDecorationLine: 'line-through',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.13,
    textAlign: 'center',
    color: '#6d7278',
    alignSelf: 'center',
  },
  productDetailInformationTitleText: {
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',

    marginBottom: 19.2,
  },
  productDetailInformationElement: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  detailTitleText: {
    width: '29%',
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#585858',

    marginRight: '7%',
  },
  detailInformationText: {
    width: 138,
    height: 21,
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  updateButton: {
    height: 48,
    backgroundColor: '#f7d02f',
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 16,
  },
  deleteButton: {
    height: 48,
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonText: {
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    alignSelf: 'center',
    color: '#000000',
  },
  deleteOverlay: {
    width: '72%',
    height: '11.8%',

    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
  },
  deleteOverlayContainer: {
    flexDirection: 'column',
  },
  deleteOverlayTitleContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteOverlayButtonContainer: {
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteOverlayTitleText: {
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.54,
    textAlign: 'center',
    color: '#000000',
  },
  deleteOverlayButton: {
    backgroundColor: '#ffffff',
    width: 135,
  },
  deleteOverlayButtonText: {
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
  loadingComponentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
