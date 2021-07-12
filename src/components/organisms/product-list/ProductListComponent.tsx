import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import OneProductComponent from './OneProductComponent';
import useAxios from 'axios-hooks';
import {GetImageProductListRes} from '../../screens/home/dto/GetImageProductListDto';
import {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

const ProductListComponent = () => {
  const [{data: getData, loading: getLoading, error: getError}, executeGet] =
    useAxios<GetImageProductListRes[]>({
      method: 'GET',
      url: 'http://localhost:5000/product/getProductList/1',
    });

  const executeGetHandler = () => {
    executeGet();
  };

  const renderItem = ({item}: {item: GetImageProductListRes}) => (
    <OneProductComponent
      productData={item}
      executeGetHandler={executeGetHandler}
    />
  );
  return (
    <ScrollView>
      {!getLoading && !getError && getData && (
        <FlatList data={getData} renderItem={renderItem} />
      )}
    </ScrollView>
  );
};
export default ProductListComponent;
