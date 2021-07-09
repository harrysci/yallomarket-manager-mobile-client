import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import ProductListComponent from '../../../organisms/product-list/ProductListComponent';
import UpContainer from '../../../organisms/product-list/UpContainer';

const styles = StyleSheet.create({
  upContainer: {
    marginTop: 43,
    marginLeft: 24,
  },
});

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
