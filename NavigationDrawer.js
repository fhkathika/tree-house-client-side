import React from 'react'
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './Component/Home';
import AddItems from './Component/AddItems/AddItems';
import ManageItems from './Component/ManageItems/ManageItems';
import AllOrders from './Component/AllOrders/AllOrders';
import MyOrders from './Component/My-Orders/My-Orders';
import CloseDrawer from './drawer/CloseDrawer';
import OrderDetail from './OrderDetail/OrderDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './OrderDetail/Login/Login';

export default function NavigationDrawer() {
    const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();
    return (
        <Drawer.Navigator >
 
      <Drawer.Screen name="Home" component={Home}  />
      <Drawer.Screen name="Add Items" component={AddItems} />
      
      <Drawer.Screen name="My Orders" component={MyOrders} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
   
      
      </Drawer.Navigator>
    )
}
