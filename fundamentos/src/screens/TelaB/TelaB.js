import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function TelaB(props) {

    const navigation = props.navigation


    return (
        <View style={styles.container}>

            <Button
                title='CLIQUE AQUI'
                onPress={() => {
                    navigation.navigate('TelaC')
                }}
            />

            <Button
                title='CLIQUE AQUI PARA VOLTAR'
                onPress={() => {
                    navigation.goBack()
                }}
            />


            <Text style={{ fontSize: 40 }}>Tela B</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
})