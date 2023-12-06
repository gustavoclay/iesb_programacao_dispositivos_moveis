import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from "react-native"
import { Button, Card, Text } from 'react-native-paper'

export default function ListaPessoas({ navigation, route }) {

  const [pessoas, setPessoas] = React.useState([])


  useEffect(() => {
    carregarPessoas()
  }, [])

  async function carregarPessoas() {
    const response = await AsyncStorage.getItem('pessoas')
    const pessoasStorage = response ? JSON.parse(response) : []
    setPessoas(pessoasStorage)
  }

  async function adicionar(pessoa) {
    let novaListaPessoas = pessoas
    novaListaPessoas.push(pessoa)
    await AsyncStorage.setItem('pessoas', JSON.stringify(novaListaPessoas));
    carregarPessoas()
  }

  async function editar(dadosNovos, pessoaAntiga) {

    const novaListaPessoas = pessoas.map(p => {
      if (p == pessoaAntiga) {
        return dadosNovos
      } else {
        return p
      }
    })

    await AsyncStorage.setItem('pessoas', JSON.stringify(novaListaPessoas))

    carregarPessoas()
  }

  async function excluir(pessoa) {
    const novaListaPessoas = pessoas.filter(p => p !== pessoa)
    await AsyncStorage.setItem('pessoas', JSON.stringify(novaListaPessoas))
    carregarPessoas()
  }

  return (
    <View>

      <View>
        <Button mode='contained' onPress={() => { navigation.navigate('FormPessoas', { acao: adicionar }) }}>Cadastrar</Button>
      </View>

      <FlatList
        data={pessoas}
        renderItem={({ item }) => (

          <Card>
            <Card.Content>
              <Text variant="titleLarge">Nome: {item.nome}</Text>
              <Text variant="titleLarge">CPF: {item.cpf}</Text>
              <Text variant="titleLarge">Idade: {item.idade}</Text>
              <Text variant="titleLarge">E-mail: {item.email}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => { navigation.navigate('FormPessoas', { acao: editar, pessoaAntiga: item }) }}>Editar</Button>
              <Button onPress={() => excluir(item)}>Excluir</Button>
            </Card.Actions>
          </Card>

        )}
      />



    </View>
  )
}

const styles = StyleSheet.create({})