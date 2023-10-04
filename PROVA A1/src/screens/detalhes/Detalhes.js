import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Card, Divider, Text } from 'react-native-paper'
import Api from '../../services/Api'

export default function Detalhes({ navigation, route }) {

  const restaurante = route.params
  const [pratos, setPratos] = useState([])
  const [bebidas, setBebidas] = useState([])


  useEffect(() => {

    Api.get('pratos?restaurante_id=' + restaurante.id)
      .then((response) => {
        setPratos(response.data)
      }).catch((error) => {
        console.log(error)
      })

    Api.get('bebidas?restaurante_id=' + restaurante.id)
      .then((response) => {
        setBebidas(response.data)
      }).catch((error) => {
        console.log(error)
      })

  }, [])


  return (
    <ScrollView>

      <Text variant='titleLarge' style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10 }}>Restaurante</Text>
      <Card
        style={styles.card}
        mode='elevated'
      >
        <Card.Title
          style={{ margin: 5 }}
          title={restaurante.nome}
          titleStyle={{ fontWeight: 'bold' }}
          subtitle={restaurante.descricao}
          subtitleNumberOfLines={2}
        />
        <Card.Cover style={{ margin: 12 }} source={{ uri: restaurante.imagem }} />
        <Card.Content>
          <View style={styles.labelArea}>
            <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>Nome:</Text>
            <Text variant="bodyMedium">{restaurante.nome}</Text>
          </View>
          <View style={styles.labelArea}>
            <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>Tipo de Cozinha:</Text>
            <Text variant="bodyMedium">{restaurante.tipo_cozinha}</Text>
          </View>
          <View style={styles.labelArea}>
            <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>Endereço:</Text>
          </View>
          <View style={styles.labelArea}>
            <Text variant="bodyMedium">{restaurante.endereco}</Text>
          </View>
          <View style={styles.labelArea}>
            <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>Horário de Funcionamento:</Text>
          </View>
          <View style={styles.labelArea}>
            <Text variant="bodyMedium">{restaurante.horario_funcionamento}</Text>
          </View>
        </Card.Content>
      </Card>

      <Text variant='titleLarge' style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10 }}>Cardápio</Text>
      <Card
        style={styles.card}
        mode='elevated'
      >
        <Card.Content>

          <Text variant='bodyMedium' style={{ fontWeight: 'bold', textAlign: 'center' }}>Pratos</Text>

          <FlatList
            data={pratos}
            renderItem={({ item }) => (
              <View style={styles.labelArea}>
                <Text variant="bodyMedium">{item.nome}</Text>
                <Text variant="bodyMedium">R$ {item.preco}</Text>
              </View>
            )}
          />

          <Divider />

          <Text variant='bodyMedium' style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10 }}>Bebidas</Text>

          <FlatList
            data={bebidas}
            renderItem={({ item }) => (
              <View style={styles.labelArea}>
                <Text variant="bodyMedium">{item.nome}</Text>
                <Text variant="bodyMedium">R$ {item.preco}</Text>
              </View>
            )}
          />

        </Card.Content>
      </Card>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10
  },
  labelArea: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})
