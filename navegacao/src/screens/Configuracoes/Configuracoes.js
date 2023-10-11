import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function Configuracoes({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Configurações</Text>
            <Button
                mode='contained'
                onPress={() => navigation.push('Profile')}
            >Ir para Configurações</Button>
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