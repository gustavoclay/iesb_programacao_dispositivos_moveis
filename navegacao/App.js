import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './src/routes/Drawer.Routes';


export default function App() {
  return (

    <PaperProvider>
      <DrawerRoutes />
    </PaperProvider>

  );
}
