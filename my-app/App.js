import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, MD2Colors } from 'react-native-paper';



export default function App() {

  return (
    <View>
      <ActivityIndicator animating={true} color='red' size={'large'} />

      <Button icon="play" mode="outlined" onPress={() => console.log('Pressed')}>
      Clique Aqui
    </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


