import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import Feed from '../pages/botttomTabPages/Feed';
import Search from '../pages/botttomTabPages/Search';
import Create from '../pages/botttomTabPages/Create';
import Cart from '../pages/botttomTabPages/Cart';
import Profile from '../pages/botttomTabPages/Profile';

import LiveAudienceStackNavigator from './StackNavigator/LiveAudienceStackNavigator';
import LiveHostStackNavigator from './StackNavigator/LiveHostStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          height: 80,
          justifyContent: 'center',
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarInactiveTintColor:'grey',
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name='Início'
        component={LiveAudienceStackNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="home" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Início</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="home-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Início</Text>
              </>
            );
          },
        }}
      />
      
      <Tab.Screen
        name='Descubra'
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="search-sharp" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Descubra</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="search-sharp" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Descubra</Text>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name='Criar'
        component={LiveHostStackNavigator}
        options={{
          
        }}
      />

      <Tab.Screen
        name='Compras'
        component={Cart}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <SimpleLineIcons name="handbag" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 11 }}>Compras</Text>
                </>
              );
            }
            return (
              <>
                <SimpleLineIcons name="handbag" size={22} color={color} />
                <Text style={{ color: color, fontSize: 11 }}>Compras</Text>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name='Eu'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="person" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Eu</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="person-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Eu</Text>
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;