import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TelaC(props) {
console.log("🚀 ~ file: TelaC.js:5 ~ TelaC ~ props:", props)

    const navigation = props.navigation


  return (
      <View style={styles.container}>

          <Button
              title='CLIQUE AQUI'
              onPress={() => {
                  navigation.push('TelaC')
              }}
          />


          <Button
              title='CLIQUE AQUI PARA VOLTAR'
              onPress={() => {
                  navigation.goBack()
              }}
          />


          <Button
              title='CLIQUE AQUI PARA VOLTAR AO INICIO'
              onPress={() => {
                  navigation.popToTop()
              }}
          />




          <Text style={{ fontSize: 40 }}>Tela C</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
})