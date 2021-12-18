import React, { useState } from 'react'
import { View, Text,StyleSheet, Image,Button } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'
import { Link, NativeRouter, Route } from 'react-router-native'
import NavigationDrawer from '../NavigationDrawer'
import OrderDetail from '../OrderDetail/OrderDetail'
export default function ShowsItems({items}) {
  const [detailpage,setDetailpage]=useState([])
    const {_id,name,img,detail,price}=items
   
    return (
        <View >
              
    
        </View>
    )
}
const styles = StyleSheet.create({
 
  card_design: {
   backgroundColor:'#6db33f',
   color:'white'
  
    
  }
 
});