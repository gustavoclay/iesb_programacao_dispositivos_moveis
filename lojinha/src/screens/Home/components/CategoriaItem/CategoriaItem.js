import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function CategoriaItem({ categoria, navigation }) {

    function navegarParaCategoria() {
        navigation.navigate('Categoria', categoria)
    }


    return (
        <View style={styles.container}>
            <Button mode='contained-tonal' onPress={navegarParaCategoria}>{String(categoria).toUpperCase()}</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }


})