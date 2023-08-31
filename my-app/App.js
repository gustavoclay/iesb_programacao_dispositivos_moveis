import React from 'react';
import { StyleSheet, View } from 'react-native';
import Familia from './componentes/semana04/children/Familia';
import Filho from './componentes/semana04/children/Filho';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}
      {/* <MinMax min="10" max="20" /> */}

      {/* <MeuComponente /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      {/* <Botao /> */}

      {/* <Contador /> */}

      {/* <DigiteSeuNome /> */}

      {/* <Pai /> */}

      {/* <ComponenteControlado /> */}

      <Familia nomeFamilia="Silva">
        <Filho nome="Pedro" sobreNome="Silva"></Filho>
        <Filho nome="Joao" sobreNome="Silva"></Filho>
        <Filho nome="Davi" sobreNome="Silva"></Filho>
        <Filho nome="Miguel" sobreNome="Silva"></Filho>
      </Familia>


      <Familia nomeFamilia="Figueiredo">
        <Filho nome="Julia" sobreNome="Figueiredo"></Filho>
        <Filho nome="Joao" sobreNome="Figueiredo"></Filho>
        <Filho nome="Miguel" sobreNome="Figueiredo"></Filho>
        <Filho nome="Maria" sobreNome="Figueiredo"></Filho>
      </Familia>





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
