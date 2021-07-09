import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import OneProductComponent from './OneProductComponent';
import useAxios from 'axios-hooks';
import {GetImageProductListRes} from '../../screens/home/dto/GetImageProductListDto';

const ProductListComponent = () => {
  //const baseURL = 'http://localhost:5000/product';
  const [{data: getData, loading: getLoading, error: getError}, executeGet] =
    useAxios<GetImageProductListRes[]>({
      method: 'GET',
      url: 'http://localhost:5000/product/getProductList/1',
    });
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
