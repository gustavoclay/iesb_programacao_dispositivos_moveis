import React from 'react';
import {
  PaperProvider
} from 'react-native-paper';
import Home from './src/screens/home/Home';


export default function App() {

  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}




