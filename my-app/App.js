import React from 'react';
import { StyleSheet } from 'react-native';
import Profile from './componentes/semana04/Profile';


export default function App() {
  return (
    <Profile
      imgUri='https://www.fakepersongenerator.com/Face/female/female20161024753601562.jpg'
      genero='Feminino'
      nome='Felicia J Ochoa'
      email='aiyana1980@gmail.com'
      telefone='630-337-6439'
    />
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
