import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from './src/navigations/stack-param-list/StackParamList';
import BottomNav from './src/navigations/bottom-nav/BottomNav';
import ProductDetailInfoPage from './src/components/screens/product-detail-info-page/ProductDetailInfoPage';

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="메인화면"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="상품 상세 정보"
          component={ProductDetailInfoPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
