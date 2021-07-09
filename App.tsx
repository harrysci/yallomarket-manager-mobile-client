import React from 'react';
import BottomNav from './src/navigations/BottomNav';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from './src/navigations/stack-param-list/StackParamList';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
