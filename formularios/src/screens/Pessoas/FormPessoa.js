import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function FormPessoa({ navigation, route }) {

    const { acao } = route.params
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [showMensagemErro, setShowMensagemErro] = useState(false)

    function salvar() {

        if (nome === '' || idade === '' || peso === '' || altura === '') {
            setShowMensagemErro(true)
        } else {
            setShowMensagemErro(false)

            const novaPessoa = {
                nome: nome,
                idade: idade,
                peso: peso,
                altura: altura
            }

            acao(novaPessoa)
            Toast.show({
                type: 'success',
                text1: 'Pessoa salva com sucesso!'
            })
            navigation.goBack()
        }

    }


    return (
        <View style={styles.container}>

            <Text variant='titleLarge' style={styles.title} >Adicionar Pessoa</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    label={'Nome'}
                    mode='outlined'
                    value={nome}
                    onChangeText={text => setNome(text)}
                />

                <TextInput
                    style={styles.input}
                    label={'Idade'}
                    mode='outlined'
                    keyboardType='numeric'
                    value={idade}
                    onChangeText={text => setIdade(text)}
                />

                <TextInput
                    style={styles.input}
                    label={'Peso | KG'}
                    mode='outlined'
                    keyboardType='numeric'
                    value={peso}
                    onChangeText={text => setPeso(text)}
                />

                <TextInput
                    style={styles.input}
                    label={'Altura | cm'}
                    mode='outlined'
                    keyboardType='numeric'
                    value={altura}
                    onChangeText={text => setAltura(text)}
                />

                {showMensagemErro &&
                    <Text style={{ color: 'red', textAlign: 'center' }}>Preencha todos os campos!</Text>
                }


            </View>

            <View style={styles.buttonContainer}>

                <Button
                    style={styles.button}
                    mode='contained-tonal'
                    onPress={() => navigation.goBack()}
                >
                    Voltar
                </Button>

                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={salvar}
                >
                    Salvar
                </Button>


            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        margin: 10
    },
    inputContainer: {
        width: '90%',
        flex: 1
    },
    input: {
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        gap: 10,
        marginBottom: 10
    },
    button: {
        flex: 1
    }
})