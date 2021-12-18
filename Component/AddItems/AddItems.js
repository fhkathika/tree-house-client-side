import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik';
export default function AddItems() {
  const [plants, setPlants] = useState({})
  return (

    <View style={[styles.container, {
      flexDirection: "column",
      width: 'auto',
      alignItems: 'center',
      backgroundColor:'#c1f7cf'
    }]}>
      <Formik
        initialValues={{ name: '', price: '', detail: '', img: '' }}
        onSubmit={(values) => {
          console.log('values....', values)
          fetch('https://gentle-scrubland-47714.herokuapp.com/addPlants', {
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

            <TextInput
              style={styles.input}
              placeholder='enter name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder='enter image url'
              onChangeText={props.handleChange('img')}
              value={props.values.image}
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
              placeholder='enter detail'
              onChangeText={props.handleChange('detail')}
              value={props.values.detail}
            />

            <Button title='submit' color='green' onPress={props.handleSubmit}></Button>

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

