import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, FAB, MD3Colors, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'


export default function ListaPessoas({ navigation, route }) {

  const [pessoas, setPessoas] = useState([
    {
      nome: 'João Paulo',
      idade: '25',
      altura: '189',
      peso: '80,5'
    },
    {
      nome: 'Jorge Luiz',
      idade: '20',
      altura: '180',
      peso: '70'
    }
  ])

  function adicionarPessoa(pessoa) {
    let novaListaPessoas = pessoas
    novaListaPessoas.push(pessoa)
    setPessoas(novaListaPessoas)
  }

  function editarPessoa(pessoaAntiga, novosDados) {
    console.log('PESSOA ANTIGA -> ', pessoaAntiga)
    console.log('DADOS NOVOS -> ', novosDados)

    const novaListaPessoas = pessoas.map(pessoa => {
     if(pessoa == pessoaAntiga){
       return novosDados
     } else {
       return pessoa
     }
   })

    setPessoas(novaListaPessoas)

  }

  function excluirPessoa(pessoa) {
    const novaListaPessoa = pessoas.filter(p => p !== pessoa)
    setPessoas(novaListaPessoa)
    Toast.show({
      type: 'success',
      text1: 'Pessoa excluida com sucesso!'
    })
  }

  function getImc(pessoa) {
    const peso = parseFloat(pessoa.peso)
    const altura = parseFloat(pessoa.altura)
    const imc = peso / ((altura / 100) * (altura / 100))
    return imc.toFixed(2)
  }


  return (
    <View style={styles.container}>

      <Text variant='titleLarge' style={styles.title} >Lista de Pessoas</Text>

      <FlatList
        style={styles.list}
        data={pessoas}
        renderItem={({ item }) => (
          <Card
            mode='outlined'
            style={styles.card}
          >
            <Card.Content
              style={styles.cardContent}
            >
              <View style={{ flex: 1 }}>
                <Text variant='titleMedium'>{item?.nome}</Text>
                <Text variant='bodyLarge'>Idade: {item?.idade}</Text>
                <Text variant='bodyLarge'>Altura: {item?.altura} cm</Text>
                <Text variant='bodyLarge'>Peso: {item.peso} kg</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text variant='titleMedium'>IMC</Text>
                <Text variant='bodyLarge'>{getImc(item)}</Text>
              </View>


            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.push('FormPessoa', { acao: editarPessoa, pessoa: item })}>
                Editar
              </Button>
              <Button onPress={() => excluirPessoa(item)}>
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
      />

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('FormPessoa', { acao: adicionarPessoa })}
      />

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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  list: {
    width: '90%',
  },
  card: {
    marginTop: 15
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: MD3Colors.primary80,
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 15
  }
})