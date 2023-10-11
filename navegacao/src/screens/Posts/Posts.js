import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export default function Posts() {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Posts</Text>
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