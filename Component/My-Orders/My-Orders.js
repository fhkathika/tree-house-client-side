import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { DataTable } from 'react-native-paper';
export default function MyOrders() {
    const [myorder, setMyorder] = useState([])
    useEffect(() => {
        fetch('https://gentle-scrubland-47714.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setMyorder(data))

    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '50%', margin: 'auto',backgroundColor:'#c1f7cf' }}>
            <Text><h2>MyOrders</h2> </Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Ordered plant</DataTable.Title>
                    <DataTable.Title >Price</DataTable.Title>
                    <DataTable.Title >Action</DataTable.Title>
                </DataTable.Header>
                {
                    myorder.map(order => <>
                        <DataTable.Row >

                            <DataTable.Cell>{order.name}</DataTable.Cell>
                            <DataTable.Cell >{order.price}</DataTable.Cell>
                            <DataTable.Cell >{order.status}</DataTable.Cell>
                        </DataTable.Row>
                    </>)
                }





            </DataTable>
        </View>
    )
}
