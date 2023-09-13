import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Lista() {


    const carrosSimples = ['BMW', 'Ferrari', 'Mercedes', 'Audi', 'Fiat','Fiat']
    const carros = [{
        nome: 'BMW',
        cor: 'Preto'
    }, {
        nome: 'Ferrari',
        cor: 'Vermelha'
    },
    {
        nome: 'Mercedes',
        cor: 'Azul'
    }]


    return (
        <View>

            {carrosSimples.map((item, index) => {
                return (
                        <Text style={{ fontSize: 30 }}>O nome do carro é {item}</Text>
                )
            })}


            <FlatList
                data={carros}
                renderItem={({ item }) => <Text style={{ fontSize: 30 }}>Carro: {item.nome} Cor: {item.cor}</Text>}

            />



        </View>
    )
}

const styles = StyleSheet.create({})