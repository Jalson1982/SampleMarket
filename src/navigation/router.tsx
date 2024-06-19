import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home, MarketData, Profile} from '@features/index';
import {Routes} from './routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from '@components';

const Tab = createBottomTabNavigator();

const HomeIcon = () => (
  <Image source={require('@assets/home.png')} width={20} height={20} />
);

const MarketDataIcon = () => (
  <Image source={require('@assets/market.png')} width={20} height={20} />
);

const ProfileIcon = () => (
  <Image source={require('@assets/profile.png')} width={20} height={20} />
);

export const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: HomeIcon,
          }}
          name={Routes.Home}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: MarketDataIcon,
          }}
          name={Routes.MarketData}
          component={MarketData}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ProfileIcon,
          }}
          name={Routes.Profile}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
