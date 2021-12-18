import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Routes,Route } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationDrawer from './NavigationDrawer';
import OrderDetail from './OrderDetail/OrderDetail';
import Home from './Component/Home';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
 
<>
    <NavigationContainer>
<NavigationDrawer/>

  
        <Stack.Screen
          name="NavigationDrawer"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
   
    
</NavigationContainer>
<NativeRouter>

<Routes>
<Route path="/orderdetail:id" element={<OrderDetail></OrderDetail>}></Route>
</Routes>  
      
  
</NativeRouter>
</>


    // <View style={styles.container}>
 
      
      /* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
       
        <Stack.Screen name="Add Items" component={AddItems} />
        <Stack.Screen name="Manage Items" component={ManageItems} />
        <Stack.Screen name="All Orders" component={AllOrders} />
        <Stack.Screen name="My Orders" component={MyOrders} />
      </Stack.Navigator> */
    /* </NavigationContainer> */
    
    //   <NativeRouter>
      
    //     <Link to="/home"> 
    //    <Text>Home</Text>
    //     </Link>
    //     <Link to="/additems"> 
    //     <Text>Add Items</Text>
    //     </Link>
    //     <Link to="/manageitems"> 
    //     <Text> ManageItems</Text>
       
    //     </Link>
    //     <Link to="/allorders"> 
    //     <Text> All Orders</Text>
    //     </Link>
    //     <Link to="/myorders"> 
    //     <Text> My Orders</Text>
    //     </Link>
     
    //   <Routes>
    //     <Route path="/" element={<Home></Home>}></Route>
    //     <Route path="/home" element={<Home></Home>}></Route>
    //     <Route path="/additems" element={<AddItems></AddItems>}></Route>
    //     <Route path="/manageitems" element={<ManageItems></ManageItems>}></Route>
    //     <Route path="/allorders" element={<AllOrders></AllOrders>}></Route>
    //     <Route path="/myorders" element={<MyOrders></MyOrders>}></Route>
    //   </Routes>
    //   </NativeRouter>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
