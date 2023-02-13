import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import SearchStack from './SearchStack';
import Timetable from '../Screens/Timetable';
import Profile from '../Screens/Profile';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Notifications from '../Screens/Notifications';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: -25,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      activeOpacity={0.7}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 59,
          borderRadius: 35,
          backgroundColor: '#ecc13b',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{headerShown:false}}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'relative',
        //   bottom: 5,
          // marginHorizontal:2,
          elevation: 1,
          height: 55,
          backgroundColor: '#fff',
          justifyContent:'center',
          ...styles.shadow,
        },
        tabStyle:{
            marginBottom:15
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/homes.png')}
                resideMode="contain"
                style={{
                  width: 32,
                  height: 32,
                  tintColor: focused ? '#ecc13b' : 'gray',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Timetable"
        component={Timetable}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/cal.png')}
                style={{
                  width: 32,
                  height: 32,
                  resizeMode:'contain',
                  tintColor: focused ? '#ecc13b' : 'gray',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/person.png')}
                resideMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  resizeMode:'contain',
                  tintColor: focused ? '#ecc13b' : 'gray',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchMain"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/search.png')}
                resideMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#ecc13b' : 'gray',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 4,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5,
  },
});
