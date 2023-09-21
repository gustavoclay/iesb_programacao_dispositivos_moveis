import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import Api from '../../services/Api'
import CategoriaItem from './components/CategoriaItem/CategoriaItem'

export default function Home({ navigation, route }) {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        Api.get('/products/categories')
            .then(response => {
                setCategorias(response.data)
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMDA DE CATEGORIAS: ", error)
            })

    }, [])



    return (
        <View style={styles.container}>

            <View style={styles.titleArea}>
                <Text variant='headlineLarge' style={styles.title} >MINHA LOJINHA</Text>
            </View>

            <FlatList
                style={{ width: '90%' }}
                data={categorias}
                renderItem={({ item }) => <CategoriaItem categoria={item} navigation={navigation} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleArea: {
        backgroundColor: 'yellow',
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})