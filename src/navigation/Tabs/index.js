import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Notification from '../../screens/Notification';
import Profile from '../../screens/Profile';
import {ICONS, COLORS} from '../../common';
import {AppIcon} from '../../components';

const tabs_options = () => ({
  HomeTab: {
    icon: ICONS.home,
    label: 'Home',
  },
  SearchTab: {
    icon: ICONS.magnify,
    label: 'Search',
  },
  NotificationTab: {
    icon: ICONS.notification,
    label: 'Notification',
  },
  ProfileTab: {
    icon: ICONS.account,
    label: 'Profile',
  },
});

const HomeNav = createStackNavigator();
const HomeStack = () => (
  <HomeNav.Navigator>
    <HomeNav.Screen
      component={Home}
      name={'Home'}
      //   options={{header: () => <HomeHeader />}}
    />
  </HomeNav.Navigator>
);
const SearchNav = createStackNavigator();
const SearchStack = () => (
  <SearchNav.Navigator>
    <SearchNav.Screen
      component={Search}
      name={'Search'}
      //   options={{header: () => <HomeHeader />}}
    />
  </SearchNav.Navigator>
);
const NotificationNav = createStackNavigator();
const NotificationStack = () => (
  <NotificationNav.Navigator>
    <NotificationNav.Screen
      component={Notification}
      name={'Notification'}
      //   options={{header: () => <HomeHeader />}}
    />
  </NotificationNav.Navigator>
);
const ProfileNav = createStackNavigator();
const ProfileStack = () => (
  <ProfileNav.Navigator>
    <ProfileNav.Screen
      component={Profile}
      name={'Profile'}
      //   options={{header: () => <HomeHeader />}}
    />
  </ProfileNav.Navigator>
);

const BottomTab = createBottomTabNavigator();
const TabNavigator = () => {
  const tabs_data = tabs_options();
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: tabs_data[route.name].label,
        tabBarIcon: (options) => (
          <AppIcon
            icomoon
            name={tabs_data[route.name].icon}
            color={options.color}
            size={25}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: COLORS.redishOrange,
        inactiveTintColor: COLORS.blueyGrey,
        labelPosition: 'below-icon',
      }}>
      <BottomTab.Screen component={HomeStack} name={'HomeTab'} />
      <BottomTab.Screen component={SearchStack} name={'SearchTab'} />
      <BottomTab.Screen
        component={NotificationStack}
        name={'NotificationTab'}
      />
      <BottomTab.Screen component={ProfileStack} name={'ProfileTab'} />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
