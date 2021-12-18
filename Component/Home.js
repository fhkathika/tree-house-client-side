import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, Image } from 'react-native'
import ShowsItems from './ShowsItems'
import { Card, ListItem, Icon } from 'react-native-elements'
import { Link } from 'react-router-native'
import OrderDetail from '../OrderDetail/OrderDetail'

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('OrderDetail')
  }
  const [allitems, setAllitems] = useState([])
  useEffect(() => {
    fetch('https://gentle-scrubland-47714.herokuapp.com/showplants')
      .then(res => res.json())
      .then(data => setAllitems(data))

  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#c1f7cf' }}>

      <ScrollView>
        {
          allitems.map(items => (<View key={items._id}

          >

            <Card >
              <Card.Title>{items.name}</Card.Title>
              <Text style={{ alignItems: 'center', width: '25%', margin: 'auto' }}>  {items.price}tk</Text>
              <Card.Divider />

              <View >
                <Image
                  source={{
                    uri: `${items.img}`,
                  }}
                  style={{ width: 200, height: 200 }}
                />

              </View>

              <Button title='Order Now' color='green' onPress={() => pressHandler()} />

            </Card>
          </View>))
        }
      </ScrollView>



    </View>
  )
}
