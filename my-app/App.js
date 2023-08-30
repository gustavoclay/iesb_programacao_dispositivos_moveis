import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/semana02/MeuComponente';
import MeuComponente2 from './componentes/semana02/MeuComponente2';
import MeuComponente3 from './componentes/semana02/MeuComponente3';
import NumeroAleatorio from './componentes/semana03/NumeroAleatorio';
import Botao from './componentes/semana03/Botao';
import Contador from './componentes/semana03/Contador';
import DigiteSeuNome from './componentes/semana03/DigiteSeuNome';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}
      {/* <MinMax min="10" max="20" /> */}

      {/* <MeuComponente /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      {/* <Botao /> */}

      {/* <Contador /> */}

      <DigiteSeuNome />


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
