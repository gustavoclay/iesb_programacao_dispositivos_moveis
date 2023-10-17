import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper'

export default function ListaCarros() {

    const [carros, setCarros] = useState(["Gol", "Civic"])
    const [inputValue, setInputValue] = useState('')

    function adicionarCarro() {
        let novaListaCarros = carros
        novaListaCarros.push(inputValue)

        setCarros(novaListaCarros)
        setInputValue('')
    }



    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{ flex: 4 }}
                    mode='outlined'
                    label='Carro'
                    placeholder='Adicionar o carro'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />


                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={adicionarCarro}
                >
                    Add
                </Button>

            </View>



            <FlatList
                style={styles.list}
                data={carros}
                renderItem={({ item }) => (
                    <Card
                    style={styles.card}
                    mode='outlined'
                    >
                        <Card.Content>
                            <Text>{item}</Text>
                            <IconButton icon='pen' />
                            <IconButton icon='trash-can-outline'/>
                        </Card.Content>
                    </Card>
                )}

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
    inputContainer: {
        flexDirection: 'row',
        width: '95%',
        paddingTop: 10,
        gap: 5
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        width: '95%',
        marginTop: 10
    },
    card: {
        margin: 5
    }
})