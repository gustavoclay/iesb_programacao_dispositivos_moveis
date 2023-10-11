import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export default function Citacoes() {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Citações</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})