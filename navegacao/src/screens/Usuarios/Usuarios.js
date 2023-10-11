import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export default function Usuarios() {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Usuários</Text>
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