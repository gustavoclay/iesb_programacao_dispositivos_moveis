import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/semana02/MeuComponente';
import MeuComponente2 from './componentes/semana02/MeuComponente2';
import MeuComponente3 from './componentes/semana02/MeuComponente3';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}
      {/* <MinMax min="10" max="20" /> */}

      <MeuComponente />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});