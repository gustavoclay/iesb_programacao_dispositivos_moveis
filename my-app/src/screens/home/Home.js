import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import usuarios from '../../mocks/users.json'
import Pessoa from './components/Pessoa'


export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Home</Text>

            <FlatList
                style={styles.listPessoas}
                data={usuarios}
                renderItem={({ item }) => <Pessoa pessoa={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    listPessoas: {
        width: '90%'
    }
})