import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})