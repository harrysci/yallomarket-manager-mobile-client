import React from 'react';
import { FlatList, ListViewComponent, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import ProductListComponent from '../../organisms/product-list/ProductListComponent';
import { defaultProduct, defaultProduct2, defaultProduct3, defaultProduct4, defaultProduct5, ProductContainer } from './dummy';



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
      <View>
        <Text>바코드 등록 상품 목록</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 24, height: 16}}
            source={require('../../../assets/images/product-list/mart.png')}/>
          <Text>경동 빅마트 토성점</Text>
        </View>
      </View>
      <ScrollView>
      <ProductListComponent/>
      </ScrollView>
      
    </SafeAreaView>
  );
};
