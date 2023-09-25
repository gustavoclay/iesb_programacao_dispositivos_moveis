import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { FlatList } from 'react-native-gesture-handler'
import Api from '../../services/Api'
import ProdutoItem from './ProdutoItem/ProdutoItem'

export default function Categoria(props) {

    const categoriaRecebida = props.route.params
    const [produtos, setProdutos] = useState([])


    useEffect(() => {

        Api.get(`/products/category/${categoriaRecebida}`)
            .then(response => {
                setProdutos(response.data.products)
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMADA DE CATEGORIAS: ", error)
            })

    }, [])


    return (
        <View style={styles.container}>

            <View style={styles.titleArea}>
                <Text variant='headlineLarge' style={styles.title} >{String(categoriaRecebida).toUpperCase()}</Text>
            </View>


            <FlatList
                style={styles.listArea}
                showsVerticalScrollIndicator={false}
                data={produtos}
                renderItem={({ item }) => <ProdutoItem produto={item} navigation={props.navigation} />}
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
    },
    listArea: {
        width: '90%'
    }
})