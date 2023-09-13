import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Botao() {

    function executarBotao2() {
        alert('Botao 2')
    }


    return (
        <View>
            <Text style={styles.texto}>Botões</Text>

            <Button
                title='Botao 1'
                onPress={() => alert('Botao 1')}
            />

            <Button
                title='Botao 2'
                onPress={executarBotao2}
            />

            <Button
                title='Botao 3'
                onPress={
                    function executaBotao3() {
                        alert('Botao 3')
                    }
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20
    }
})