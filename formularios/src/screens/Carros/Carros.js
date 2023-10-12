import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import InputCarro from './components/InputCarro/InputCarro'

export default function Carros() {

  const [carros, setCarros] = useState([])
  

  function adicionarCarro(carroEnviado) {
    setCarros([...carros, carroEnviado])
  }

  return (
    <View style={styles.container}>

      <InputCarro adicionarCarroNoPai={adicionarCarro} />

      <FlatList
        style={styles.list}
        data={carros}
        renderItem={({ item }) => {
          return (
            <Card
              mode='outlined'
              style={styles.card}
            >
              <Card.Content>
                <Text variant='displaySmall'>{item}</Text>
              </Card.Content>
            </Card>
          )
        }}
      />



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%'
  },
  card: {
    margin: 10
  }
})