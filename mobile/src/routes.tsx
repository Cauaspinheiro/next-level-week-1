import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Points from './pages/Points';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: '#f0f0f5' } }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Points" component={Points} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
