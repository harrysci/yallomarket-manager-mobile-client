import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from './src/navigations/stack-param-list/StackParamList';
import Test from './src/components/screens/home/Test';

const Stack = createStackNavigator<StackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="테스트" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
