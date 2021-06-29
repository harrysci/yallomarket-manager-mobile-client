import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const App = () => {
  return (
    <SafeAreaView style={styles.testContainer}>
      <Text h1 style={styles.testText}>
        Owner Mobile Scanner{'\n'}App.tsx
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fdbd39',
  },
  testText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;
