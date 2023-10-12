import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default function InputCarro({ adicionarCarroNoPai }) {

    const [carro, setCarro] = useState('')

    function handleInputCarro() {
        adicionarCarroNoPai(carro)
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                mode='outlined'
                label={'Nome do Carro'}
                value={carro}
                onChangeText={(value) => setCarro(value)}
            />

            <Button
                style={styles.button}
                mode='contained'
                onPress={handleInputCarro}
            >
                Salvar
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        margin: 10,
        gap: 10
    },
    input: {
        flex: 4
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})