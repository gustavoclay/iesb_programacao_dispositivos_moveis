import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { FlatList } from 'react-native-gesture-handler'
import Api from '../../services/Api'

export default function Categoria(props) {

    const categoriaRecebida = props.route.params
    const [produtos, setProdutos] = useState([])


    useEffect(() => {

        Api.get(`/products/category/${categoriaRecebida}`)
            .then(response => {
                setProdutos(response.data.products)
                console.log(response.data.products)
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMDA DE CATEGORIAS: ", error)
            })

    }, [])


    return (
        <View style={styles.container}>

            <View style={styles.titleArea}>
                <Text variant='headlineLarge' style={styles.title} >{String(categoriaRecebida).toUpperCase()}</Text>
            </View>


            <FlatList data={produtos} renderItem={({ item }) => <Text>{item.title}</Text>} />
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