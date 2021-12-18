import { Formik } from 'formik'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export default function OrderDetail({ navigation }) {
  // const {_id,name,detail,price}=items
  const [plants, setPlants] = useState({})

  return (
    <View style={[styles.container, {
      flexDirection: "column",
      width: 'auto',
      alignItems: 'center',
      backgroundColor:'#c1f7cf'
    }]}>
      <Text></Text>
      <Formik
        initialValues={{ email: '', name: '', price: '', phone: '' }}
        onSubmit={(values) => {

          values.status = 'pending'
          console.log('values....', values)
          fetch('https://gentle-scrubland-47714.herokuapp.com/orderConfirm', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(values)

          })
            .then(res => res.json())
            .then(data => {
              console.log('data..........', data)
              setPlants(data)
            })
        }}
      >
        {(props) => (
          <View>
            <Text><h2>Make your Order here</h2></Text>
            <TextInput
              style={styles.input}
              placeholder='enter email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder='enter name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder='enter price'
              onChangeText={props.handleChange('price')}
              value={props.values.price}
            />
            <TextInput
              multiline
              style={styles.input}
              placeholder='enter contact number'
              onChangeText={props.handleChange('phone')}
              value={props.values.phone}
            />

            <Button title='Confirm Order' color='green' onPress={props.handleSubmit}></Button>

          </View>

        )}

      </Formik>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    margin: '10px',
    fontSize: 18,
    borderRadius: 6,
    padding: 10

  }
});