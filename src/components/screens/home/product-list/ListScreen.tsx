import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ProductListComponent from '../../../organisms/product-list/ProductListComponent';
import UpContainer from '../../../organisms/product-list/UpContainer';
import styles from './style';

export default function ListScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.upContainer}>
        <UpContainer />
        <ProductListComponent />
      </View>
    </SafeAreaView>
  );
}
