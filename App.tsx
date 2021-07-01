import React from 'react';
import {SafeAreaView} from 'react-native';
import ProductDetailInfoPage from './src/components/screens/product-detail-info-page/ProductDetailInfoPage';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProductDetailInfoPage />
    </SafeAreaView>
  );
};

export default App;
