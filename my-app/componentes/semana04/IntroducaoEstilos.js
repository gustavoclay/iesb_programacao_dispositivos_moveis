import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function IntroducaoEstilos() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'gray'
        }}>
            <View style={{ flex: 1, backgroundColor: 'red' }}></View>
            <View style={{ flex: 5, backgroundColor: 'blue' }}></View>
            <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
        </View>
    )
}

const styles = StyleSheet.create({})