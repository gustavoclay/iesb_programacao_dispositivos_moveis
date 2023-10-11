import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './src/routes/Drawer.Routes';
import TabRoutes from './src/routes/Tab.Routes';


export default function App() {
  return (

    <PaperProvider>
      {/* <TabRoutes /> */}
      <DrawerRoutes />
    </PaperProvider>

  );
}
