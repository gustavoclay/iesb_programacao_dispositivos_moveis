import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function ComponenteControlado() {

    const [nome, setNome] = useState('')



    return (
        <View>
            <Text style={{ fontSize: 30 }}>ComponenteControlado</Text>
            <Text style={{ fontSize: 30 }}>{nome}</Text>

            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={valorDigitado => setNome(valorDigitado)}


            />


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        color: 'red',
        borderWidth: 2,
        margin: 10
    }
})