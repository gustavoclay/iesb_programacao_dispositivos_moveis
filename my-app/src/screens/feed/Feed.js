import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Feed(props) {

    const teste = JSON.stringify(props.route.params)

    function irParaAScreenProfile() {
        props.navigation.navigate('Profile');
    }


    return (
        <View>
            <Text>Feed</Text>

            <Text style={{ fontSize: 30 }}>PARAMETROS RECEBIDOS: {teste}</Text>

            <Button onPress={irParaAScreenProfile}> Ir para a tela Profile</Button>

        </View>
    )
}

const styles = StyleSheet.create({})