import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  title: {
    height: 25,
    //fontFamily: "AppleSDGothicNeo",
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.67,
    textAlign: 'left',
    marginBottom: 26,
  },
  middleContainer: {
    width: 375,
    height: 31,
    backgroundColor: '#efefef',
    flexDirection: 'row',
    marginBottom: 24,
  },
  martname: {
    height: 15,
    //fontFamily: "AppleSDGothicNeo",
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: -0.38,
    textAlign: 'center',
    color: '#000000',
  },
});
const UpContainer = () => {
  return (
    <View>
      <Text style={styles.title}>바코드 등록 상품 목록</Text>

      <View style={styles.middleContainer}>
        <Image
          style={{width: 24, height: 16}}
          source={require('../../../assets/images/product-list/mart.png')}
        />
        <Text style={styles.martname}>경동 빅마트 토성점</Text>
      </View>
    </View>
  );
};
export default UpContainer;
