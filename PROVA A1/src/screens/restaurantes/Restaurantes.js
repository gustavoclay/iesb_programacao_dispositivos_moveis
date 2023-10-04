import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'
import Api from '../../services/Api'

export default function Restaurantes({ navigation }) {

  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    Api.get('restaurantes')
      .then((response) => {
        setRestaurantes(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <View>

      <FlatList
        data={restaurantes}
        renderItem={({ item }) => (
          <Card
            mode='elevated'
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', item)}
          >
            <Card.Title
              title={item.nome}
              titleStyle={{ fontWeight: 'bold' }}
              subtitle={item.tipo_cozinha}
              left={() => <Avatar.Image size={48} source={{ uri: item.imagem }} />}
              right={() => <IconButton
                icon="arrow-right"
                size={20}
              />}
            />
          </Card>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10
  }
})
