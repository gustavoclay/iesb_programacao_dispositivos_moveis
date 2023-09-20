import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
// import usuarios from '../../mocks/users.json'
import Api from '../../service/api'
import Pessoa from './components/Pessoa'


export default function Home(props) {

    const [usuarios, setUsuarios] = useState([])

    Api.get('/users')
        .then(response => {
            console.log(response.data)

            setUsuarios(response.data.users)

        })
        .catch(err => {
            console.error("DEU RUIM AO CHAMAR: ", err)
        });

    function irParaAScreenFeed() {
        props.navigation.navigate('Feed', { nome: "teste" });
    }


    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 30 }}>Home</Text>

            <Button mode='outlined' onPress={irParaAScreenFeed} >Ir para Feed</Button>

            <FlatList
                style={styles.listPessoas}
                data={usuarios}
                renderItem={({ item }) => <Pessoa pessoa={item} />}
                showsVerticalScrollIndicator={false}
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
    listPessoas: {
        width: '90%'
    }
})