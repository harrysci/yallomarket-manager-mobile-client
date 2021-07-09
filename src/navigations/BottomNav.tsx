/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import ListScreen from '../components/screens/home/product-list/ListScreen';

const Tab = createBottomTabNavigator();

function ScanScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Scan!</Text>
    </View>
  );
}

const BottomNav = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === '바코드 스캔') {
            if (focused) {
              return (
                <Image
                  style={styles.barcodeScanTabImage}
                  source={require('../assets/icons/tabs/scan_active.png')}
                />
              );
            } else {
              return (
                <Image
                  style={styles.barcodeScanTabImage}
                  source={require('../assets/icons/tabs/scan_inactive.png')}
                />
              );
            }
          } else if (route.name === '등록 목록') {
            if (focused) {
              return (
                <Image
                  style={styles.productListTabImage}
                  source={require('../assets/icons/tabs/list_active.png')}
                />
              );
            } else {
              return (
                <Image
                  style={styles.productListTabImage}
                  source={require('../assets/icons/tabs/list_inactive.png')}
                />
              );
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#B7B7B7',
        style: styles.tabBar,
      }}>
      <Tab.Screen name="바코드 스캔" component={ScanScreen} />
      <Tab.Screen name="등록 목록" component={ListScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tabBar: {
    height: '10.2%',
    backgroundColor: '#FBFBFB',
  },
  productListTabImage: {
    width: 17.1,
    height: 19.6,
  },
  barcodeScanTabImage: {
    width: 22.4,
    height: 20.6,
  },
});
