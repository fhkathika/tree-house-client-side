import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

export default function ManageItems() {
  const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch('https://gentle-scrubland-47714.herokuapp.com/showplants')
      .then(res => res.json())
      .then(data => {
        setPlants(data)
        console.log(data)
      })
  }, [plants._id])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column' }}>
      <Text ><h3>All Plants</h3></Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 'auto', flexDirection: 'row' }}>

        <ScrollView>
          {
            plants.map(plant => (
              <View key={plant._id} >
                <>
                  <Text style={{ paddingTop: '10%', alignItems: 'center', justifyContent: 'center', paddingBottom: '10%', width: '100%' }}>{plant.name}_____{plant.price} </Text>
                </>

              </View>
            ))
          }
        </ScrollView>


      </View>
      <hr />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  box: {
    flex: 1,
    height: 50,
    width: 50,
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "100",
  },
  previewContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "aliceblue",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: "center",
  },
});
