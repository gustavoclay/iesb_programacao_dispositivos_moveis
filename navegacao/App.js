import { PaperProvider } from 'react-native-paper';
import Routes from './src/routes/Routes';


export default function App() {
  return (

    <PaperProvider>
      <Routes />
    </PaperProvider>

  );
}
