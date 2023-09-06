import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Filho(props) {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{props.nome} {props.sobreNome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})