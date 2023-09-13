import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Contador() {

    const [valor, setValor] = useState(0)

    // let valor = 0

    function incrementar() {
        setValor(valor + 1)
    }

    function decrementar() {
        setValor(valor - 1)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>VOLUME</Text>
            <Text style={styles.text}>{valor}</Text>
            <View style={styles.botao}>
                <Button
                    title='+ INCREMENTAR'
                    onPress={incrementar}
                />
                <Button
                    title='- DECREMENTAR'
                    onPress={decrementar}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
    botao: {
        margin: 10
    }
})