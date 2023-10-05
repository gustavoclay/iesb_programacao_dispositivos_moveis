import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function TelaA(props) {

  const navigation = props.navigation


  return (
    <View style={styles.container}>


      <Button
        title='CLIQUE AQUI'
        onPress={() => {
          navigation.navigate('TelaB')
        }}
      />


      <Text style={{ fontSize: 40 }}>Tela A</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }

})