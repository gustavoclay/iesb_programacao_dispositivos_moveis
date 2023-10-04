import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Router from './src/routes/Router';

export default function App() {
  return (
    <PaperProvider>
      <Router></Router>
    </PaperProvider>
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
