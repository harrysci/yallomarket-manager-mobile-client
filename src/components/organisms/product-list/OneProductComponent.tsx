import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { ProductContainer } from '../../screens/product-list/dummy';

const styles= StyleSheet.create({
  item_container: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  items:{

  },
  image_container:{

  },
  detail_container:{
    flexDirection: 'column',
    marginLeft: 10,
  },
  last_containner:{
    flexDirection: 'row',
  },
  barcode:{
    width: 139,
  fontFamily: "AppleSDGothicNeo",
  fontSize: 11,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 14,
  letterSpacing: 0,
  textAlign: "left",
  color: "#000000",
  marginBottom: 8,
  },
  product_name:{
    width: 212,
  fontSize: 18,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 28,
  letterSpacing: -0.43,
  textAlign: "left",
  color: "#000000",
  marginBottom: 15,
  },
  product_price:{
    width: 62,
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: -0.41,
    textAlign: "left",
    color: "#d00404",
    marginRight: 99,
  },
  product_image:{
    width: 107, 
    height: 90, 
    backgroundColor:'#123424',
    borderRadius: 5,
  },
  go_detail:{
    flexDirection:'row',
    width: 62,
  opacity: 0.77,
  fontFamily: "AppleSDGothicNeo",
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 28,
  letterSpacing: -0.29,
  textAlign: "left",
  color: "#000000",
  alignItems: 'center',
  
  },
  go_detail_image:{
    width: 20, height: 20,
  }
})
export interface OneproductComponentProps {
	productData: ProductContainer;
}

const OneProductComponent =(props: OneproductComponentProps) => {
  const { productData}=props;
  return(
    <View style={styles.item_container}>
      <View style={styles.image_container}>
      <Image
            style={styles.product_image}
            source={require('../../../assets/icons/product-list/icon_forward.png')}
          >
            </Image>
            </View>
        <View style={styles.detail_container}>
        <Text style={styles.barcode}>바코드 {productData.barcode}</Text>
        <Text style={styles.product_name}>{productData.productName}</Text>
        <View style={styles.last_containner}>
          <Text style={styles.product_price}>{productData.price}원</Text>
          <TouchableOpacity style={styles.go_detail}>
          <Text>
            상세보기
          </Text>
          <Image
            style={styles.go_detail_image}
            source={require('../../../assets/icons/product-list/icon_forward.png')}
          >
          </Image>
        </TouchableOpacity>
        </View>
      </View>
		</View>
  )
};
export default OneProductComponent;