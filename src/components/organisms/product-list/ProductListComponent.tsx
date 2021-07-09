import React from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements/dist/list/ListItem';
import {ProductContainer} from '../../screens/home/product-list/dummy';
import OneProductComponent from './OneProductComponent';
import {
  defaultProduct,
  defaultProduct2,
  defaultProduct3,
  defaultProduct4,
  defaultProduct5,
} from '../../screens/home/product-list/dummy';
import useAxios from 'axios-hooks';
import {GetImageProductListRes} from '../../screens/home/dto/GetImageProductListDto';

const ProductListComponent = () => {
  const baseURL = 'http://localhost:5000/getProductList';
  const [{data: getData, loading: getLoading, error: getError}, executeGet] =
    useAxios<GetImageProductListRes[]>({
      method: 'GET',
      url: 'http://localhost:5000/product/getProductList/1',
    });
  const test: ProductContainer[] = [
    defaultProduct,
    defaultProduct2,
    defaultProduct3,
    defaultProduct4,
    defaultProduct5,
  ];
  const renderItem = ({item}: {item: GetImageProductListRes}) => (
    <OneProductComponent productData={item} />
  );
  return (
    <ScrollView>
      {!getLoading && !getError && getData && (
        <FlatList data={getData} renderItem={renderItem}></FlatList>
      )}
    </ScrollView>
  );
};
export default ProductListComponent;
