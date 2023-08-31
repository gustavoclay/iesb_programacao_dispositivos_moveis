import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Filho from './Filho'

export default function Pai() {

    const [numero, setNumero] = useState(0)

    function alterarNumero(valor) {
        setNumero(valor)
    }


    return (
        <View>

            <Text style={{ fontSize: 30 }}>O número aleatório é?</Text>
            <Text style={{ fontSize: 30 }}>{numero}</Text>


            <Filho min={1} max={60} funcao={alterarNumero} />



        </View>
    )
}

const styles = StyleSheet.create({})