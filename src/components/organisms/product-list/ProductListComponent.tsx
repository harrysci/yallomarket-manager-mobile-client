import React from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { ProductContainer } from '../../screens/product-list/dummy';
import OneProductComponent from './OneProductComponent';
import { defaultProduct, defaultProduct2, defaultProduct3, defaultProduct4, defaultProduct5 } from '../../screens/product-list/dummy';


const ProductListComponent=()=>{
  const test:ProductContainer[]=[
    defaultProduct,
		defaultProduct2,
		defaultProduct3,
		defaultProduct4,
		defaultProduct5,
  ];
  const renderItem = ({ item }: { item: ProductContainer }) => (
		<OneProductComponent productData={item}/>
	);
  return(
    <ScrollView>
      <FlatList
        data={test}
        renderItem={renderItem}
      ></FlatList>
    </ScrollView>
  )
}
export default ProductListComponent;