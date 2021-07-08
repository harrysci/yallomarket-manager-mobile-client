import React from 'react';
import { FlatList, ListViewComponent, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import ProductListComponent from '../../../organisms/product-list/ProductListComponent';
import { defaultProduct, defaultProduct2, defaultProduct3, defaultProduct4, defaultProduct5, ProductContainer } from './dummy';


const styles=StyleSheet.create({
  upContainer:{
    marginTop: 43,
    marginLeft: 24,
    
  },
  title:{
    //width: 173,
    height: 25,
    //fontFamily: "AppleSDGothicNeo",
    fontSize: 21,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: -0.67,
    textAlign: "left",
    marginBottom: 26,
  },
  middleContainer: {
    width: 375,
    height: 31,
    backgroundColor: "#efefef",
    flexDirection: 'row',
    marginBottom: 24,
  },
  martname: {
  height: 15,
  //fontFamily: "AppleSDGothicNeo",
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 15,
  letterSpacing: -0.38,
  textAlign: "center",
  color: "#000000"
  },
})

export default function ListScreen(): JSX.Element {
  const test:ProductContainer[]=[
    defaultProduct,
		defaultProduct2,
		defaultProduct3,
		defaultProduct4,
		defaultProduct5,
  ];
  return(
   <SafeAreaView>
      <View style={styles.upContainer}>
        <Text style={styles.title}>바코드 등록 상품 목록</Text>
      
      
        <View style={styles.middleContainer}>
          <Image
            style={{width: 24, height: 16}}
            source={require('../../../../assets/images/product-list/mart.png')}/>
          <Text style={styles.martname}>경동 빅마트 토성점</Text>
        </View>
      
      <ProductListComponent/>
      </View>
    </SafeAreaView>
  );
};
