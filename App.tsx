// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/account/Account';
import HomeScreen from './src/screens/home/Home';

import Brand from './src/Tenant'

// Define types for the Tab Navigator
type TabParamList = {
  Home: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Brand.primaryColor },
          headerTintColor: '#ffffff',
          tabBarActiveTintColor: Brand.primaryColor,
          tabBarIconStyle: { color: Brand.primaryColor },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;