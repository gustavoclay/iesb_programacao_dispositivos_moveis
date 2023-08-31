import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Filho(props) {

    function gerarNumeroAleatorio(min, max) {
        const delta = max - min
        const numeroAleatorio = Math.floor(Math.random() * delta) + min
        props.funcao(numeroAleatorio)
    }

    return (
        <View>
            <Button
                title='Gerar número Aleatório'
                onPress={() => {gerarNumeroAleatorio(props.min, props.max)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({})