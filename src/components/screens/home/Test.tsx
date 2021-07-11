import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  testContainer: {
    justifyContent: 'center',
    backgroundColor: '#f234',
  },
  testText: {
    fontSize: 40,
    textAlign: 'center',
  },
});
export default function Test(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.testContainer}>
        <Text style={styles.testText}>Test</Text>
      </View>
    </SafeAreaView>
  );
}
